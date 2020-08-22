/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 //
 // const path = require('path');
 // const Sequelize = require('sequelize');
 //
 // const config = require(path.resolve(__dirname, '../../config/config.json'))["development"];
 //
 // sequelize = new Sequelize('food_central_dev', 'mJuarez', 'root', {host:'localhost', dialect:'postgres'});

module.exports = {

  /************ CREATE ADMIN***************/
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
