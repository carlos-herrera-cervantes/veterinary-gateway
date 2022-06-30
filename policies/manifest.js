'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const jwtValidatorPolicy = require('./jwt-validator');

    pluginContext.registerPolicy(jwtValidatorPolicy);
  },
  policies: [
    'jwt-validator',
  ],
};
