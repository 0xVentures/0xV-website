const jwt = require('jsonwebtoken');

const verifyJWT = async (token) => {
  try {
    const promise = new Promise((resolve, reject) =>
      jwt.verify(token, process.env.SECRET_FOR_JWT, (err, verifiedToken) => {
        if (err) {
          return reject(err);
        }
        return resolve(verifiedToken);
      })
    );
    const verifiedToken = await promise;
    return verifiedToken;
  } catch (e) {
    return 'invalid token';
  }
};

module.exports = verifyJWT;
