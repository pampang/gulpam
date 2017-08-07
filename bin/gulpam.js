#!/usr/bin/env node

console.log(123);

var dev = require('node-dev');
var which = require('npm-which')(process.cwd());
var args = process.argv.slice(2);

which('gulp', function(error, path) {
  if (error) {
    return console.error(error.message);
  } else {
    dev(path, args, [], {});
  }
});
