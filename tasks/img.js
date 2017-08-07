/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:13:05
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-08-07 15:24:55
 */
var gulp = require('gulp');
var config = require('../config.js');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('img', function(cb) {
  console.log('img start');
  return gulp
    .src(config.img.src)
    .pipe(changed(config.img.src))
    .pipe(imagemin(config.img.setting))
    .pipe(gulp.dest(config.img.dest));
});
