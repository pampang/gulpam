/*
 * @Author: PAMPANG
 * @Date: 2017-08-07 15:12:09
 * @Last Modified by: PAMPANG
 * @Last Modified time: 2017-08-07 15:18:35
 */
var gulp = require('gulp');
var helpText = [
  '1.  gulp ejs 			--> 编译ejs为html',
  '2.  gulp sass 			--> 编译sass为css',
  '3.  gulp js 			--> 编译js，检测语法错误',
  '4.  gulp move			--> 迁移不需做处理的项目，从src到dist',
  '5.  gulp png 			--> 压缩png',
  '6.  gulp watch			--> 创建监听器，监听当前目录下的改动',
  '7.  gulp build			--> 执行ejs、sass、js、png、move任务。',
  '8.  gulp default		--> 执行build、wacth任务。'
];

gulp.task('help', function() {
  console.log('在项目内，您可以输入：');
  for (var i = 0, len = helpText.length; i < len; i++) {
    console.log(helpText[i]);
  }
});
