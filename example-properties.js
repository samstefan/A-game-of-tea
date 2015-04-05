var _ = require('underscore')
  , path = require('path')
  , globalProperties = require('./../global-properties')

  , baseProperties =
    { port: 3010
    , session: { secret: 'a-team-game-secret' }
    , allowedDomains:
      [ 'localhost:5001'
      , 'localhost'
      ]
    , global: globalProperties
    }

  , properties =
    { development: {}
    , testing: {}
    , production: {}
    }

module.exports = function () {
  var env = process.env.NODE_ENV || 'development'
  return _.extend({ environment: env }, baseProperties, properties[env])
}