/*
 * Private attributes
 */

var games = []

module.exports = function() {

  function newGame(user) {
    // Generate a new hash based on time stamp
    var currentDate = (new Date()).valueOf().toString()
      , id = 'presence-' + currentDate

    if (!checkExists(id)) {
      games.push({ id: id, state: 'notReady', users: [user] })
      return { id: id, state: 'notReady' }
    } else {
      newGame()
    }
  }

  return { new: newGame }

}

function checkExists(id) {
  games.forEach(function(game, index) {
    if (game.id === id) {
      return true
    }

    return false
  })
}