describe 'preprocessors json2js', ->
  expect = require('chai').expect;

  json2js = require '../lib/json2js'
  logger = create: -> {debug: ->}
  process = null

  File = (path, mtime) ->
    @path = path
    @originalPath = path
    @contentPath = path
    @mtime = mtime
    @isUrl = false

  removeSpacesFrom = (str) ->
    str.replace /[\s\n]/g, ''

  beforeEach ->
    process = json2js logger, '/base'


  it 'should change path to *.js', (done) ->
    file = new File '/base/path/file.json'

    process '', file, (processedContent) ->
      expect(file.path).to.equal '/base/path/file.json.js'
      done()


  it 'should preserve new lines', (done) ->
    file = new File '/base/path/file.json'

    process 'first\nsecond', file, (processedContent) ->
      expect(removeSpacesFrom processedContent).to.contain "'first\\n'+'second'"
      done()

  it 'should preserve Windows new lines', (done) ->
    file = new File '/base/path/file.json'

    process 'first\r\nsecond', file, (processedContent) ->
      expect(processedContent).to.not.contain '\r'
      done()
