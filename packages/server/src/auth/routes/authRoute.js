const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');

const router = require('../../router');
const getUser = require('../helpers/getUser');
const verifySignature = require('../helpers/verifySignature');
const generateJWT = require('../helpers/generateJWT');
const { VERIFICATION_MESSAGE } = require('../../../constants');

const jsonParser = bodyParser.json();

router.post('/auth', jsonParser, async (req, res) => {
  const { address, signature } = req.body;

  const { userId, user } = await getUser(address);
  if (!user) {
    res.status(404).send("Address you're trying to use is not whitelisted to use the 0xVentures.");
    return;
  }

  // It's very important that verification message is exactly the same as the one on front end side.
  const verificationMessage = `${VERIFICATION_MESSAGE} ${user.nonce}`;

  const isSuccess = verifySignature({
    msg: verificationMessage,
    address,
    signature
  });

  if (!isSuccess) {
    res.status(401);
    res.end();
    return;
  }

  const jwt = await generateJWT(address, userId);
  if (!jwt) {
    res.status(500);
    res.end();
    return;
  }

  // If we're here that means everything worked correctly and user is logged in.
  // We should update nonce so it's different next time user tries to log in.
  const nonce = Math.floor(Math.random() * 1000000);
  const db = firebaseAdmin.firestore();
  const usersRef = db.collection('users');
  usersRef.doc(userId).update({ nonce });

  res.send(jwt);
  res.end();
});
