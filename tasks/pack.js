/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:13:46
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-10-10 16:05:47
 */
var gulp 		= require('gulp');
var runSequence = require('run-sequence');

gulp.task('pack', function (cb) {
  console.log('pack start');
	runSequence('del', 'build', 'minify', 'inlinesource', 'hash', cb);
});
