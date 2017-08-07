/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:13:25
 * @Last Modified by:   PAMPANG
 * @Last Modified time: 2017-08-07 15:13:25
 */
var gulp  = require('gulp');
var config  = require('../config.js');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var fs = require('fs');

gulp.task('minifyJs', function (cb) {
  return gulp.src(config.minify.js.src)
    .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
    }}))
    .pipe(uglify())
    .pipe(gulp.dest(config.minify.js.dest));
});

gulp.task('minifyCss', function (cb) {
  return gulp.src(config.minify.css.src)
    .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
    }}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.minify.css.dest));
});

gulp.task('minify', function (cb) {
  console.log('minify start');
  runSequence('minifyJs', 'minifyCss', cb);
});
