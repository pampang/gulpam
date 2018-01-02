/*
 * @Author: PAMPANG
 * @Date: 2017-10-10 15:48:55
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-10-12 14:31:48
 */

const gulp = require('gulp');
const revts = require('gulp-rev-timestamp');

const config = require('../config.js');

// add `?rev=@hash` at the end of file url
gulp.task('hash', function (cb) {
	setTimeout(function() {
		gulp.src(config.hash.src)
			.pipe(revts())
			.pipe(gulp.dest(config.hash.dest));

		cb();
	}, 1000);
});