function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  audio = new Audio(sound);
  audio.play();
}

Renderer.prototype.draw = function(image) {
  console.log('drawing ' + image);
}

Renderer.prototype.show = function(image){
	console.log('showing ' + image)
}

Renderer.prototype.hide = function(obj){
	console.log('hiding ' + obj)
}

Renderer.prototype.move = function(obj, direction, dist){
	var	distance = parseInt(dist)
	console.log('moving ' + obj + " " + direction + "wards by " + distance + "px")
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}

var audio = new Audio('assets/ding.mp3');

module.exports = Renderer

