//var firebase = new FirebaseConnector();
var Renderer = require('./renderer')
var Router = require('./router')

var router = new Router()

$(function() {
  $('#testSubmit').click(function(e) {
    command = $('#testStringCommand').val()
    router.route(command)
  })
})

