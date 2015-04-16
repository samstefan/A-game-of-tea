module.exports = function() {

  function set(uri, key, value) {
    var re = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i')

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2')
    } else {
      var hash = ''
        , separator = uri.indexOf('?') !== -1 ? '&' : '?'

      if (uri.indexOf('#') !== -1) {
          hash = uri.replace(/.*#/, '#')
          uri = uri.replace(/#.*/, '')
      }

      return uri + separator + key + '=' + value + hash
    }
  }

  function get(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
      , results = regex.exec(location.search)

    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }

  return {
    set: set,
    get: get
  }

}