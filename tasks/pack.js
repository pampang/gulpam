/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:13:46
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-03-26 18:25:12
 */
var gulp 		= require('gulp');
var runSequence = require('run-sequence');

gulp.task('pack', function (cb) {
  console.log('pack start');
	runSequence('del', 'build', 'inlinesource', 'hash', cb);
});
