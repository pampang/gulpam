/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:14:06
 * @Last Modified by:   PAMPANG
 * @Last Modified time: 2017-08-07 15:14:06
 */
var gulp = require('gulp');
var config = require('../config.js');
var cache = require('gulp-cached');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(cb) {
  console.log('sass start');
  return sass(config.sass.src, config.sass.setting)
    .on('error', sass.logError)
    .pipe(cache('sass'))
    .pipe(autoprefixer(config.autoprefixer.setting))
    .pipe(gulp.dest(config.sass.dest));
});
