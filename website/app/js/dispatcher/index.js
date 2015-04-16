/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , api = require('./../lib/api')()
  , query = require('./../lib/query')()
  , Dispatcher = Stapes.subclass({

    constructor: function(app) {
      this.app = app
      this.$contentView = $('.content__view')
      this.$hudView = $('.content__hud')
      // Set event listeners
      this.events()
      // Load the start view first
      this.start()
    }

  , events: function() {
      var scope = this

      this.app.models.user.on('create:user', function(event) {
        // Set user name in HUD
        scope.hud({ userName: event })
        if (scope.app.exisitngGame) {
          // connect to that channel
          scope.app.channel = scope.app.pusher.subscribe(scope.app.exisitngGame)
          // Bind channel events
          scope.bindChannelEvents()
        } else {
          api.newGame(function (error, game) {
            if (error) {
              return scope.app.models.user.remove('user')
            }
            // Set new game
            scope.app.models.game.set('game', game)
            // connect to that channel
            scope.app.channel = scope.app.pusher.subscribe(game.id)
            // Set game session in query
            window.location.search = query.set(window.location.search, 'gameSession', game.id)
            // Bind channel events
            scope.bindChannelEvents()
          })
        }
      })
    }

  , bindChannelEvents: function () {
      var scope = this

      this.app.channel.bind('pusher:subscription_succeeded', function(event) {
        $.each(event.members, function(index) {
          scope.app.models.members.push(index)
        })

        // Set user id in model
        scope.app.models.user.set('id', event.myID)

        // Register new user name with the id
        api.newUserName({ userId: event.myID, userName: scope.app.models.user.get('user') }, function(error, user) {
          console.log('user:', user)
        })
      })

      this.app.channel.bind('pusher:member_added', function(member) {
        scope.app.models.members.push(member.id)
      })
    }

  , start: function() {
      var template = this.app.views.start.get()
      this.$contentView.html(template)
    }

  , hud: function(data) {
      var template = this.app.views.hud.get(data)
      this.$hudView.html(template)
    }

  })

module.exports = Dispatcher