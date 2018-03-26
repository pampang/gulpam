/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:12:00
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2018-03-05 11:24:32
 */
var gulp = require('gulp');
var config = require('../config.js');
var del = require('del');

gulp.task('del', function(cb) {
  console.log('del start');
  // 删除指定文件
  const entryDirs = fs
    .readdirSync(path.resolve(__dirname, ))
    .filter((name) => {
      const filePath = path.resolve(__dirname, config.srcDir);
      return fs.statSync(filePath).isDirectory();
    });

  const delDirs = entryDirs.map(dir => path.resolve(__dirname, config.destDir, dir));

  return del.sync(delDirs);
});
