function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  var audio = new Audio(sound);
  audio.play();
}


Renderer.prototype.hideImage = function(imageID){
  $("#" + imageID).hide()
}

Renderer.prototype.draw = function(image) {
  $("body").append("<div><img src=" + image + "><div>");
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

module.exports = Renderer

