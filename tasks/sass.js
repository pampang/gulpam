/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:14:06
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-03-26 18:25:36
 */
var gulp = require('gulp');
var config = require('../config.js');
const gulpif = require('gulp-if');
var cache = require('gulp-cached');
var autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(cb) {
  console.log('sass start');
  return sass(config.sass.src, config.sass.setting)
    .on('error', sass.logError)
    .pipe(gulpif(global.__DEV__, sourcemaps.init()))
    .pipe(cache('sass'))
    .pipe(autoprefixer(config.autoprefixer.setting))
    .pipe(gulpif(!global.__DEV__, cleanCSS()))
    .pipe(gulpif(global.__DEV__, sourcemaps.write()))
    .pipe(gulp.dest(config.sass.dest));
});
