var express = require('express')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , properties = require('./properties')()
  , cors = require('./lib/middleware/cors')
  , path = require('path')
  , cookieParser = require('cookie-parser')
  , methodOverride = require('method-override')
  , morgan = require('morgan')

module.exports = function(app, logger, properties, passport, connection) {
  if (properties.env === 'development') {
    // Prettify HTML during development
    app.locals.pretty = true
  }

  app.use(cors(properties.allowedDomains))

  app.use(morgan(':remote-addr :method :url'))

  app.enable('jsonp callback')

  // cookieParser should be above session
  app.use(cookieParser())
  app.use(methodOverride())

  // Express / Mongo session storage
  app.use(session({
    secret: properties.session.secret
  , resave: true
  , saveUninitialized: true
  }))

  app.use(bodyParser.json())
}