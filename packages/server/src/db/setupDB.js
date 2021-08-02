const firebaseAdmin = require('firebase-admin');

const firebaseAccount = require('../../xventures-firebase-secret.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseAccount)
});
