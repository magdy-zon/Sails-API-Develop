/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /************ LOGIN/signUp ***************/
  login(req, res) {
    const firebase = new Firebase();

    console.log(req.params.idToken)
  },

  signup(req, res) {
    return sequelize
      .transaction(t1 => {
        return User.create(req.body);
      })
      .then(req.created)
      .catch(res.negotiate);
  },

  /************ CREATE ADMIN ***************/
  createAdmin(req, res) {
    return sequelize
      .transaction(t1 => {
        req.body.role = 'admin';
        return User.create(req.body).then(user => {
          return user.signUp(t1).then(admin => {
            return Formatter.basic(admin);
          });
        });
      })
      .then(res.created)
      .catch(res.negotiate);
  },

  /************ CREATE USER***************/
  getUser(req, res) {
    const firebase = new Firebase();
    console.log(req.params.idToken);
    return firebase.getUser(req.params.idToken)
    .then(function(userRecord) {
      console.log(userRecord);
    })
    .catch(function(err) {
      console.log(err);
    })
  },

  create(req, res) {
      return sequelize
        .transaction(t1 => {
          return User.create(req.body).then(user => {
            return user.signUp(t1).then(admin => {
              return Formatter.basic(admin);
            });
          });
        })
        .then(res.created)
        .catch(res.negotiate);
    },

};
