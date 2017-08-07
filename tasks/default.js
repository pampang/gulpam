/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:11:22
 * @Last Modified by:   PAMPANG
 * @Last Modified time: 2017-08-07 15:11:22
 */
var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');
var config = require('../config.js');

gulp.task('default', function(cb) {
  if (argv.h || argv.help) {
    return gulp.run('help');
  }

  console.log('您可以输入gulp -h 或 gulp --help 来查看更多命令帮助。');
  runSequence('build', 'watch', cb);
});
