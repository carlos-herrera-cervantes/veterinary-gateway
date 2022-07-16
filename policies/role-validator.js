'use strict';

module.exports = {
  name: 'role-validator',
  policy: (actionParams) => (req, res, next) => {
    const rolesConcat = actionParams.roles.split(',');
    const userRole = req.headers['user-roles'];

    for (const role of rolesConcat) {
      if (role == userRole) return next();
    }

    return res.status(403).send({ message: 'Invalid role' });
  }
};
