#!/usr/bin/env node
const fs = require('fs');
const filename = 'counter.txt';

// First callback
fs.exists(filename , function (exists) {

  // Second callback
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    // the file is read successfully
    var count = parseInt(data.toString());
    count ++;
    console.log('The new value is :' + count);

    // Third callback
    fs.writeFile(filename, count, function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
    })
  })
})
