/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:13:11
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-03-26 17:39:16
 */
var gulp = require('gulp');
var config = require('../config.js');
var inlinesource = require('gulp-inline-source');
var fs = require('fs');

gulp.task('inlinesource', function(cb) {
  // 强制延时1000ms
  setTimeout(function() {
    console.log('inlinesource start');
    gulp
      .src(config.inlinesource.src)
      .pipe(inlinesource())
      .pipe(gulp.dest(config.inlinesource.dest));

    cb();
  }, 1500);
});
