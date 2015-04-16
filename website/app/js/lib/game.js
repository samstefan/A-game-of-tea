/*
 * Module dependencies
 */

var query = require('./query')()

module.exports = function() {

  function exsiting() {
    var gameSession = query.get('gameSession')
    return gameSession
  }

  return { exsiting: exsiting }

}

