#!/usr/bin/env node
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const filename = 'counter.txt';


fs.statAsync(filename).then( function(stat) {
  if (stat.isFile()) {
    return fs.readFileAsync(filename);
  } else {
    throw new Error('File not found');
  }  
}).then( function(data) {
  return Promise.resolve(parseInt(data.toString()) + 1)
}).then( function(count) {
  console.log('The new value is :' + count++);
  return fs.writeFileAsync(filename, count);
}).catch( function(err) {
  console.error(err.message);
  console.error(err.stack);
});
