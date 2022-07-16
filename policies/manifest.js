'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const jwtValidatorPolicy = require('./jwt-validator');
    const roleValidatorPolicy = require('./role-validator');

    pluginContext.registerPolicy(jwtValidatorPolicy);
    pluginContext.registerPolicy(roleValidatorPolicy);
  },
  policies: [
    'jwt-validator',
    'role-validator',
  ],
};
