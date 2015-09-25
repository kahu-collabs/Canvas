var Validator = require('./validator')

var validator = new Validator();

var x = 1

function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  if(validator.audioValidator(sound)){
    var audio = new Audio(sound);
  audio.play();
  }
}

Renderer.prototype.draw = function(image) {
  x++
  if(validator.imgValidator(image)){
     $("body").append("<div class='hello' id=" + x + "><img src=" + image + "><div>");
    }
}

Renderer.prototype.show = function(image){
	console.log('showing ' + image)
}

Renderer.prototype.hide = function(obj){
	console.log('hiding ' + obj)
}

Renderer.prototype.move = function(id, direction, dist){
	var	distance = parseInt(dist)
  console.log(distance);
  var thing = document.getElementById(id)
  $(thing).css();

	console.log('moving ' + id + " " + direction + "wards by " + distance + "px")
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}

module.exports = Renderer

