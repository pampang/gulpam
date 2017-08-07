/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:12:00
 * @Last Modified by:   PAMPANG
 * @Last Modified time: 2017-08-07 15:12:00
 */
var gulp = require('gulp');
var config = require('../config.js');
var del = require('del');

gulp.task('del', function(cb) {
  console.log('del start');
  return del(config.clean.src);
});
