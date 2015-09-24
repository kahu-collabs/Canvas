function Router(renderer) {
  this.renderer = renderer
}

Router.prototype.route = function(command) {
  // console.log('routing ' + command)
  var commandArray = command.split(' ')
  if(commandArray[0] == "play") {

    this.renderer.makeSound(commandArray[1])
  }
  else if(commandArray[0] == "draw"){
   this.renderer.draw(commandArray[1])
  }
  else if(commandArray[0] == "show"){
    this.renderer.show(commandArray[1])
  }
  else if(commandArray[0] == "hide"){
    this.renderer.hide(commandArray[1])
  }
  else if(commandArray[0] == "move"){
    this.renderer.move(commandArray[1], commandArray[2], commandArray[3])
  }
  else {
    console.log("I don't understand you");
  }
}

module.exports = Router
