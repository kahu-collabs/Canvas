function Renderer() {

}

Renderer.prototype.play = function(sound) {
  console.log('playing ' + sound);
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


module.exports = Renderer
