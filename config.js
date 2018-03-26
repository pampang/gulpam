var path = require('path');
var process = require('process');
var customConfig = require(path.resolve(process.cwd(), 'gulpam.config.json'));

// https://segmentfault.com/q/1010000002763411
// 如果我们使用了“./”来引导路径，会导致gulp无法监听新建的文件。
// 因此取消使用“./”路径。

var srcDir = customConfig.srcDir || 'app/src';
var destDir = customConfig.destDir || 'app/public';

module.exports = {
  srcDir,
  destDir,
  hash: {
    src: path.resolve(destDir, './**/*.html'),
    dest: destDir,
  },
  sass: {
    src: path.resolve(srcDir, './**/css/*.*'),
    dest: destDir,
    watch: path.resolve(srcDir, './**/css/*.*')
  },
  autoprefixer: {
    setting: {
      browsers: ['last 10000 versions', 'ios 6', 'android 2.3', '>1%'], // 设置要适配的浏览器前缀
      remove: false, // 是否删除无用的前缀，默认为true。
      cascade: false
    }
  },
  js: {
    src: path.resolve(srcDir, './**/js/*.js'),
    dest: destDir,
    watch: path.resolve(srcDir, './**/js/*.js'),
    setting: {}
  },
  img: {
    src: path.resolve(srcDir, './**/images/*.*'),
    dest: destDir,
    setting: {
      progressive: true
    }
  },
  clean: {
    src: ['app/public/**', path.resolve(srcDir, './**/.sass-cache')], // 需要清除的文件夹
    setting: {}
  },
  browserSync: {
    setting: {
      files: [destDir, '../debug/**'],
      server: {
        baseDir: destDir
      },
      open: false // 取消自动打开浏览器
    }
  },
  font: {
    src: 'dist/font/*.ttf',
    dest: 'dist/font'
  },
  move: {
    html: {
      src: path.resolve(srcDir, './**/*.html'),
      dest: destDir,
      watch: path.resolve(srcDir, './**/*.html')
    },
    font: {
      src: path.resolve(srcDir, './**/font/**'),
      dest: destDir,
      watch: path.resolve(srcDir, './**/font/**')
    },
    json: {
      src: path.resolve(srcDir, './**/*.json'),
      dest: destDir,
      watch: path.resolve(srcDir, './**/*.json')
    },
    swf: {
      src: path.resolve(srcDir, './**/swf/**'),
      dest: destDir,
      watch: path.resolve(srcDir, './**/swf/**')
    },
    media: {
      src: path.resolve(srcDir, './**/media/**'),
      dest: destDir,
      watch: path.resolve(srcDir, './**/media/**')
    }
  },
  minify: {
    js: {
      src: path.resolve(destDir, './**/*.js'),
      dest: destDir
    },
    css: {
      src: path.resolve(destDir, './**/*.css'),
      dest: destDir
    }
  },
  inlinesource: {
    src: path.resolve(destDir, './**/*.html'),
    dest: destDir
  }
};
