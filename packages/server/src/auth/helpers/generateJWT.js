const jwt = require("jsonwebtoken");

const generateJWT = async (address, id) => {
  const token = await new Promise((resolve, reject) =>
    jwt.sign(
      {
        payload: {
          id,
          address,
        },
      },
      process.env.SECRET_FOR_JWT,
      {},
      (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      }
    )
  );
  return token;
};

module.exports = generateJWT;
