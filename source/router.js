function Router(renderer) {
  this.renderer = renderer
}

Router.prototype.route = function(command) {
  // console.log('routing ' + command)
  var commandArray = command.split(' ')
  if(commandArray[0] == "play") {
    this.renderer.makeSound(commandArray[1])
  } else {
    this.renderer.hideImage('testSubmit')
    console.log("I don't understand you");
  }
}

module.exports = Router
