'use strict';

module.exports = {
  name: 'endpoint-guard',
  policy: (actionParams) => (req, res, next) => {
    const rolesInHeaders = req.headers['user-roles'].split(',');
    const roleMatch = actionParams.roles.split(',').some(element => rolesInHeaders.includes(element));

    for (const param of actionParams.endpoints) {
      const regex = new RegExp(param.regex);
      const pathMatch = req.path.match(regex);
      const methodMismatch = !param.methods.includes(req.method);
      
      if (pathMatch && methodMismatch && roleMatch) {
        return res.status(403).send({ message: 'Invalid role' });
      }
    }
    
    return next();
  }
};
