// create new Router instance for api routes
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to 0xVentures API');
});

module.exports = router;
