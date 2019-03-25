#!/usr/bin/env node
const async = require('async');
const fs = require('fs');
const filename = 'counter.txt';

async.waterfall([
  function(callback) {
      fs.exists(filename , function (exists) {
        if (exists) {
          return callback(null);
        }

        callback(new Error('file not found'));        
      });      
  },
  function(callback) {
      fs.readFile(filename, function (err, data){
        return callback(err, parseInt(data.toString()));
      });
  },
  function(count, callback) {
    // the file is read successfully
    console.log('The new value is :' + (count + 1));

    fs.writeFile(filename, (count + 1), function (err, data) {
      callback(err);
    })
  }
],
// optional callback
function(err, results) {
  // completed
});

