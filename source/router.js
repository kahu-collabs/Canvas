function Router(renderer) {
  this.renderer = renderer
}

Router.prototype.route = function(command) {
  console.log('routing ' + command)
  this.renderer.play('ding')
}

module.exports = Router
