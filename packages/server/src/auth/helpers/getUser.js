const firebaseAdmin = require('firebase-admin');

const getUser = async (address) => {
  const db = firebaseAdmin.firestore();
  const usersRef = db.collection('users');
  const userSnapshot = await usersRef.where('walletAddress', '==', address).get();

  if (userSnapshot.empty) {
    return null;
  }

  let userId, user;
  // There's no way to just get the single record from firestore (is there?)
  userSnapshot.forEach((userDocument) => {
    userId = userDocument.id;
    user = userDocument.data();
  });

  return { userId, user };
};

module.exports = getUser;
