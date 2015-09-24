(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
//var firebase = new FirebaseConnector();
var Renderer = require('./renderer')
var Router = require('./router')
var renderer = new Renderer()
var router = new Router(renderer)

$(function() {
  $('#testSubmit').click(function(e) {
    command = $('#testStringCommand').val()
    router.route(command)
  })
})


},{"./renderer":3,"./router":4}],3:[function(require,module,exports){
function Renderer() {

}

Renderer.prototype.makeSound = function(sound) {
  audio.play();
}

Renderer.prototype.display = function(){
  $("body").append("<div><img src='assets/potato.png'></div>")
}

var audio = new Audio('assets/ding.mp3');




module.exports = Renderer


},{}],4:[function(require,module,exports){
function Router(renderer) {
  this.renderer = renderer
}

Router.prototype.route = function(command) {
  // console.log('routing ' + command)
  var commandArray = command.split(' ')
  if(commandArray[0] == "play") {
    this.renderer.makeSound(commandArray[1])
  }
  else if(commandArray[0] == "show"){
    this.renderer.display()
  }
  else {
    console.log("I don't understand you");
  }
}

module.exports = Router

},{}]},{},[1,2,3,4]);
