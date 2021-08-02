const { isValidChecksumAddress } = require('ethereumjs-util');

const router = require('../../router');
const getUser = require('../helpers/getUser');

router.get('/auth/nonce', async (req, res) => {
  const { address } = req.query;

  if (!isValidChecksumAddress(address)) {
    res.send(null);
    res.end();
    return;
  }

  const { user } = await getUser(address);
  if (!user) {
    res.status(404).send("Address you're trying to use is not whitelisted to use the 0xVentures.");
    return;
  }

  res.send(user.nonce.toString());
  res.end();
});
