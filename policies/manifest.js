'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const jwtValidatorPolicy = require('./jwt-validator');
    const roleValidatorPolicy = require('./role-validator');
    const endpointGuardPolicy = require('./endpoint-guard');

    pluginContext.registerPolicy(jwtValidatorPolicy);
    pluginContext.registerPolicy(roleValidatorPolicy);
    pluginContext.registerPolicy(endpointGuardPolicy);
  },
  policies: [
    'jwt-validator',
    'role-validator',
    'endpoint-guard',
  ],
};
