function Router() {
}

Router.prototype.route = function(command) {
  console.log('routing ' + command)
}

module.exports = Router
