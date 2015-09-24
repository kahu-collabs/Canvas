function Renderer() {

}

Renderer.prototype.play = function(sound) {
  console.log('playing ' + sound);
}

Renderer.prototype.draw = function(image) {
  console.log('drawing ' + image);
}

module.exports = Renderer
