/**
 * Generic require login routing middleware
 */

var userRoles = require('../routing-config').userRoles

module.exports = function (accessLevel) {

  return function (req, res, next) {

    // Check if user is logged in
    if (!req.user) {
      return res.status(403).json('Not logged in')
    }
    // Check if user is active first
    if (!req.user.active) {
      return res.status(403).json('User not active')
    // If user active then check access level
    } else {
      var role

      if (!req.user) {
        role = userRoles.public
      } else {
        role = req.user.role
      }

      if ( !(accessLevel.bitMask & role.bitMask) ) {
        return res.status(403).end()
      }
    }

    next()
  }

}