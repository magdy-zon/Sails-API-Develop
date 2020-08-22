const FIREBASE_ADMIN = require('firebase-admin');
const SERVICE_ACCOUNT = require(`${sails.config.firebase.service_key_path}`);

class Firebase {

  constructor() {
    FIREBASE_ADMIN.initializeApp({
      credential: FIREBASE_ADMIN.credential.cert(SERVICE_ACCOUNT),
      databaseURL: `${sails.config.firebase.database_url}`
    });
  }

  getUser(uid) {
    FIREBASE_ADMIN.auth().getUser(uid)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully fetched user data:', userRecord.toJSON());
      })
      .catch(function(error) {
        console.log('Error fetching user data:', error);
      });
  }

}

module.exports = Firebase;
