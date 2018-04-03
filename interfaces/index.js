var parseNet = /^tcp:\/\/([^\/:]+)(?::(\d+))?\/?$/i;
var parsePrinter = /^printer:([^\/]+)(?:\/([\w-]*))?$/i;

function getInterface(uri) {
  if (typeof uri === 'object') {
    return uri;
  }

  var net = parseNet.exec(uri);
  if (net) {
    var Mod = require('./net');
    return new Mod(net[1], net[2]);
  }

  var printer = parsePrinter.exec(uri);
  if (printer) {
    var Mod = require('./printer');
    return new Mod(printer[1], printer[2]);
  }

  var Mod = require('./file');
  return new Mod(uri);
}

module.exports = getInterface;
