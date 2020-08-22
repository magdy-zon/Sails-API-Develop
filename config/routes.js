/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /** USERCONTROLLER **/
  'POST /login': {
    controller: 'UserController',
    action: 'login',
    body: 'req'
  },
  'POST /signup': {
    controller: 'UserController',
    action: 'signup',
    body: 'req'
  },

  'POST /user': {
    controller: 'UserController',
    action: 'getUser',
    body: 'idToken'
  }



};
