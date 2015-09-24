function Renderer() {

}


Renderer.prototype.makeSound = function(sound) {
  audio.play();

}

Renderer.prototype.draw = function(image) {
  console.log('drawing ' + image);
}

Renderer.prototype.error = function(command) {
    console.log("I don't understand: " + command)
}


Renderer.prototype.move = function(name, direction, px){

}

$(name).css({})




Renderer.prototype.display = function(){
  $("body").append("<div><img src='assets/potato.png'></div>")
}


var audio = new Audio('assets/ding.mp3');




module.exports = Renderer

