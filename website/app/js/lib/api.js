module.exports = function() {

  function newGame(callback) {
    $.ajax({
      url: 'http://localhost:3010/api/game/new',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        callback(null, data)
      },
      error: function() {
        callback(new Error('New game failed'))
      }
    })
  }

  function newUserName(userData, callback) {
    $.ajax({
      url: 'http://localhost:3010/api/user/setName',
      type: 'POST',
      data: userData,
      dataType: 'jsonp',
      success: function(data) {
        callback(null, data)
      },
      error: function() {
        callback(new Error('Failed to set user name'))
      }
    })
  }

  return{
    newGame: newGame,
    newUserName: newUserName
  }
}