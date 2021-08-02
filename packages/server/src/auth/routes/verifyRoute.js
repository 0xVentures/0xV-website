const router = require('../../router');
const verifyJWT = require('../helpers/verifyJWT');

router.get('/auth/verify', async (req, res) => {
  const { token } = req.query;
  const verifiedToken = await verifyJWT(token);

  if (verifiedToken === 'invalid token') {
    res.status(401).send('Your authorization token is invalid or expired.');
    res.end();
    return;
  }
  res.send('verified');
  res.end();
});
