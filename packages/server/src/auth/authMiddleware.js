const verifyJWT = require('./helpers/verifyJWT');

const requireAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace('Bearer ', '');
    try {
      const result = await verifyJWT(token);
      if (result === 'invalid token') {
        throw new Error('invalid token');
      }
      next();
    } catch (e) {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }
};

module.exports = { requireAuth };
