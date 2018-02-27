/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:11:36
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-02-27 16:06:29
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config.js');

gulp.task('build', function(cb) {
  console.log('build start');
  runSequence('move', 'sass', 'js', 'img', cb);
});
