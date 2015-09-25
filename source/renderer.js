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


Renderer.prototype.hideImage = function(imageID){
  $("#" + imageID).hide()
}

Renderer.prototype.draw = function(image) {
  x++
  var top = getRandomArbitrary(0, 100)
  console.log(top)
  var left = getRandomArbitrary(0, 100)
  console.log(left)
  if(validator.imgValidator(image)){
     $("body").append("<div class='hello' id=" + x + " style='top:" + top + "%; left:"+ left +"%'><img src=" + image + "><div>");
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
  $(thing).css("left", "90px");

	console.log('moving ' + id + " " + direction + "wards by " + distance + "px")
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = Renderer

