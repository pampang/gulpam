/*
 * @Author: PAMPANG
 * @Date: 2016-02-16 10:40:23
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-02-27 18:25:56
 */
var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var process = require('process');
var webpackConfig = require(path.resolve(process.cwd(), 'webpack.config'));

gulp.task('js', (cb) => {
  webpack(webpackConfig, (error, stats) => {
    if (error) {
      console.log(error);
    }
    cb();
  });
});
