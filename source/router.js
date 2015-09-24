function Router(renderer) {
  this.renderer = renderer
}
// var myDataRef = new Firebase("https://kahu-collabs.firebaseio.com")

// myDataRef.on('child_added', function(snapshot) {
//   var message = snapshot.val();
//   displayChatMessage(message.name, message.text);
// });

Router.prototype.route = function(command) {
  // console.log('routing ' + command)
  var commandArray = command.split(' ')
  if(commandArray[0] == "play") {
    this.renderer.play(commandArray[1])
  }
  else if(commandArray[0] == "draw"){
   this.renderer.draw(commandArray[1])
  } else {
    this.renderer.error(command)
  }
}

module.exports = Router
