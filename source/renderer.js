function Renderer() {

}

Renderer.prototype.play = function(sound) {
  audio.play();
}

var audio = new Audio('assets/ding.mp3');



module.exports = Renderer
