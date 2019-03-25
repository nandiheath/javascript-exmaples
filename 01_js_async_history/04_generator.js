#!/usr/bin/env node
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const filename = 'counter.txt';
const co = require('co')

var main = co(function* () {
  var stat = yield fs.statAsync(filename);
  if (stat.isFile()) {
    const buffer = yield fs.readFileAsync(filename);
    var count = parseInt(buffer.toString());
    console.log('The new value is :' + count++);
    yield fs.writeFileAsync(filename, count);
  } 

  return;
});

main.then();
