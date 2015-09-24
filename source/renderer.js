function Renderer() {

}

Renderer.prototype.play = function(sound) {
  audio.play();
}

Renderer.prototype.draw = function(image) {
  console.log('drawing ' + image);
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}

var audio = new Audio('assets/ding.mp3');



module.exports = Renderer
