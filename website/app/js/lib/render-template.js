/*
 * Module dependencies
 */

var Mustache = require('./../vendor/mustache')

module.exports = function() {

  function template(templateString, data) {
    data = data || {}

    var renderedTemplate = Mustache.render(templateString, data)
      , parser = new DOMParser()
      , doc = parser.parseFromString(renderedTemplate, 'text/html').body

    return $(doc)
  }

  return { template: template }

}