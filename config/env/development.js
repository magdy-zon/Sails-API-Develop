/**
 * Development environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for Development.  The configuration in this file
 * is only used in your test environment, i.e. when you lift your app using:
 *
 * ```
 * npm run start:development
 * ```
 */

module.exports = {
  models: {
    /***************************************************************************
     *
     * Here the migration of the base is configurable.                          *
     * migrate: 'safe' -> never auto-migrate my database(s).                    *                                                                           *
     * I will do it myself, by hand.                                            *
     * migrate: 'alter' ->  auto-migrate columns/fields, but attempt            *
     * to keep my existing data                                                 *
     * migrate: 'drop' ->  wipe/drop ALL my data and rebuild models every time  *
     ***************************************************************************/
    migrate: 'safe',
    connection: 'development'
  },

  /***************************************************************************
   *                                                                          *
   * Configure your security settings for test.                         *
   *                                                                          *
   * IMPORTANT:                                                               *
   * If web browsers will be communicating with your app, be sure that        *
   * you have CSRF protection enabled.  To do that, set `csrf: true` over     *
   * in the `config/security.js` file (not here), so that CSRF app can be     *
   * tested with CSRF protection turned on in development mode too.           *
   *                                                                          *
   ***************************************************************************/
  security: {
    csrf: false,
    cors: {
      allRoutes: true,
      allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH',
      allowRequestHeaders:
        'Content-Type, Authorization, User-Authorization, auth-token',
      allowOrigins: '*'
    }
  },

  log: {
    level: 'info'
  }
};
