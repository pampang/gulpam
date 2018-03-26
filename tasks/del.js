/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:12:00
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-03-26 17:39:25
 */
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var config = require('../config.js');
var del = require('del');

gulp.task('del', function(cb) {
  console.log('del start');

  // 删除指定文件
  const entryDirs = fs
    .readdirSync(config.srcDir)
    .filter((name) => {
      const filePath = path.resolve(config.srcDir, name);
      return fs.statSync(filePath).isDirectory();
    });

  const delDirs = entryDirs.map(dir => path.resolve(config.destDir, dir));

  del.sync(delDirs);

  cb();
});
