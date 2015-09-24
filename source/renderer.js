function Renderer() {

}

Renderer.prototype.play = function(sound) {
  console.log('playing ' + sound);
}

Renderer.prototype.draw = function(image) {
  console.log('drawing ' + image);
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}

module.exports = Renderer
