/*
 * @Author: PAMPANG
 * @Date: 2016-02-16 10:40:23
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-05-28 17:25:06
 */
const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-cached');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');

const config = require('../config.js');

gulp.task('js', () => {
  console.log('js start');
  return gulp
    .src(config.js.src)
    .pipe(gulpif(global.__DEV__, sourcemaps.init()))
    .pipe(plumber({
      errorHandler(error) {
        console.log(error.message);
        this.emit('end');
      },
    }))
    .pipe(babel())
    .pipe(gulpif(!global.__DEV__, uglify()))
    .pipe(cache('js'))
    .pipe(gulpif(global.__DEV__, sourcemaps.write()))
    .pipe(gulp.dest(config.js.dest));
});
