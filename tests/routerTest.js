var sinon = require('sinon')
var sinonChai = require('sinon-chai')
var expect = require('chai').use(sinonChai).expect

var Router = require('../source/router')
var Renderer = require('../source/renderer')

describe(Router, function() {
  before(function() {
    this.router = new Router(new Renderer())
  })
  
  it('plays ding', function() {
    sinon.spy(this.router.renderer, 'play')

    this.router.route('play ding')

    expect(this.router.renderer.play).to.have.been.calledWith('ding')
  })
})
