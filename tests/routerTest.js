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

    this.router.renderer.play.restore()
  })

  it('draws cow', function() {
    sinon.spy(this.router.renderer, 'draw')

    this.router.route('draw cow')

    expect(this.router.renderer.draw).to.have.been.calledWith('cow')

    this.router.renderer.draw.restore()
  })

  it('raise an error', function() {
    sinon.spy(this.router.renderer, 'error')

    this.router.route('')

    expect(this.router.renderer.error).to.have.been.calledWith('')

    this.router.renderer.error.restore()
  })
})
