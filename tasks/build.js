/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:11:36
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-08-07 15:24:37
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config.js');

gulp.task('build', function(cb) {
  console.log('build start');
  runSequence('sass', 'js', 'img', 'move', cb);
});
