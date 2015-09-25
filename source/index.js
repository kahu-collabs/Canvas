var Renderer = require('./renderer')
var Router = require('./router')

var renderer = new Renderer()
var router = new Router(renderer)
var Firebase = require("firebase")


$(function() {
  $('#testSubmit').click(function(e) {
    command = $('#testStringCommand').val()
    router.route(command)
  })
})
var firebase = new Firebase("https://sweltering-inferno-8171.firebaseio.com/kahu")
firebase.on('child_added', function(snapshot) {
  var message = snapshot.val();
  // console.log(message)
  router.route(message.command)
});
