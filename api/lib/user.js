/*
 * Private attributes
 */

var users = []

module.exports = function() {

  function newUser() {
    // Generate a new hash based on time stamp
    var currentDate = (new Date()).valueOf().toString()
      , random = Math.random().toString()
      , id = currentDate + random

    if (!checkExists(id)) {
      users.push({ userId: id.toString() })
      return id
    } else {
      newUser()
    }
  }

  function setUserName(userId, userName, callback) {
    var index = findById(userId)
    users[index].userName = userName
    callback(null, users[index])
  }

  return {
    new: newUser,
    setUserName: setUserName
  }

}

function checkExists(id) {
  users.forEach(function(game, index) {
    if (game.id === id) {
      return true
    }

    return false
  })
}

function findById(userId) {
  for (var i = users.length - 1; i >= 0; i--) {
    if (users[i].userId === userId) {
      return i
    }
  }
}