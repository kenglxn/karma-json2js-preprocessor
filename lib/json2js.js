var util = require('util');


var TEMPLATE = '' +
  'window.__json__ = window.__json__ || {};\n' +
  'window.__json__[\'%s\'] = \'%s\'';

var escapeContent = function(content) {
  return content.replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

var createJson2JsPreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.json2js');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);

    var jsonPath = file.originalPath.replace(basePath + '/', '');

    file.path = file.path + '.js';
    done(util.format(TEMPLATE, jsonPath, escapeContent(content)));
  };
};

createJson2JsPreprocessor.$inject = ['logger', 'config.basePath'];

module.exports = createJson2JsPreprocessor;
