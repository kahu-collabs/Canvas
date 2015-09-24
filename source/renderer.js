function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  audio.play();
}

Renderer.prototype.display = function(){
  $("body").append("<div><img src='assets/potato.png'></div>")
}

Renderer.prototype.hideImage = function(imageID){
  $("#" + imageID).hide()
}

var audio = new Audio('assets/ding.mp3');




module.exports = Renderer

