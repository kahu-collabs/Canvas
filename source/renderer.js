function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  audio = new Audio(sound);
  audio.play();
}

Renderer.prototype.display = function(){
  $("body").append("<div><img src='assets/potato.png'></div>")
}



module.exports = Renderer

