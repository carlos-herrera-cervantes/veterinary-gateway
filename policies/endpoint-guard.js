'use strict';

module.exports = {
  name: 'endpoint-guard',
  policy: (actionParams) => (req, res, next) => {
    for (const param of actionParams.endpoints) {
      const regex = new RegExp(param.regex);
      
      if (req.path.match(regex) && !param.methods.includes(req.method)) {
        return res.status(403).send({ message: 'Invalid role' });
      }
    }
    
    return next();
  }
};
