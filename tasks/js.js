/*
 * @Author: PAMPANG
 * @Date: 2016-02-16 10:40:23
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-08-07 15:13:17
 */
const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-cached');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');

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
    .pipe(babel({
      presets: [
        ['env', {
          targets: {
            browsers: ['last 10000 versions', 'safari 6'],
          },
        }],
      ],
    }))
    .pipe(cache('js'))
    .pipe(gulpif(global.__DEV__, sourcemaps.write()))
    .pipe(gulp.dest(config.js.dest));
});
