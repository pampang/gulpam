////////////////////////////////////////
// written by pangweizhan, 2016-01-28 //
////////////////////////////////////////
var gulp = require('gulp'); // https://www.npmjs.com/package/gulp
var path = require('path'); // nodeJS自带模块
var config = require('../config.js');
var fontmin = require('gulp-fontmin'); // https://www.npmjs.com/package/gulp-fontmin
var argv = require('yargs').argv; // https://www.npmjs.com/package/yargs

function minifyFont(text, cb) {
  return gulp
    .src(config.font.src)
    .pipe(
      fontmin({
        text: text
      })
    )
    .pipe(gulp.dest(config.font.dest))
    .on('end', cb);
}

gulp.task('font', function(cb) {
  var page = '*'; // 默认是通配所有html
  var pageBasePath = 'dist/';
  var buffers = [];

  // 设置需要配置的html页面
  if (argv.s) {
    page = argv.s;
    if (isArray(page)) {
      // 添加前缀后缀，配成完整路径。
      for (var i = 0, len = page.length; i < len; i++) {
        page[i] = pageBasePath + page[i] + '.html';
      }
    }
  } else {
    page = pageBasePath + page + '.html';
  }

  getFont(page);

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function getFont(page) {
    return gulp
      .src(page)
      .on('data', function(file) {
        buffers.push(file.contents);
      })
      .on('end', function() {
        var text = Buffer.concat(buffers).toString('utf-8');
        minifyFont(text, cb);
      });
  }
});
