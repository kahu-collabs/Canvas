//var firebase = new FirebaseConnector();
var renderer = new Renderer();
var router = new Router();


$(function() {
  $('#testSubmit').click(function(e) {
    command = $('#testStringCommand').val()
    router.route(command)
  })
})

