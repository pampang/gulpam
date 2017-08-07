/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:14:12
 * @Last Modified by:   PAMPANG
 * @Last Modified time: 2017-08-07 15:14:12
 */
var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(cb) {
  browserSync.init(config.browserSync.setting);

  // watch *.scss
  gulp.watch(config.sass.watch, ['sass']);

  // watch *.js
  gulp.watch(config.js.watch, ['js']);

  // watch img
  gulp.watch(config.img.src, ['img']);

  // watch move
  for (var item in config.move) {
    gulp.watch(config.move[item].watch, ['move']);
  }

  cb();
});
