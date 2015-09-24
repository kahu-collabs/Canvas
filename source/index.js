//var firebase = new FirebaseConnector();
var Renderer = require('./renderer')
var Router = require('./router')
var renderer = new Renderer()
var router = new Router(renderer)

$(function() {
  $('#testSubmit').click(function(e) {
    command = $('#testStringCommand').val()
    router.route(command)
  })
})

