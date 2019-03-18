// library

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');


var argv = require('yargs').argv;
var _ = require('lodash');
var path = require('path');
var concat = require('gulp-concat');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var htmlminOptionsDefault = {
  minifyJS: false, //压缩页面JS
  removeComments: true
};
var htmlminOptionsDev = {
  minifyJS: true, //压缩页面JS
  removeComments: true
};
var htmlminOptionsBuild = {
  removeComments: true, //清除HTML注释
  collapseWhitespace: true, //压缩HTML
  collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
  removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
  removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
  removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
  minifyJS: true, //压缩页面JS
  minifyCSS: true //压缩页面CSS
};

var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var fileinclude = require('gulp-file-include');
var util = require('gulp-util');
var spawn = require('child_process').spawn;

// config
var pkg = require('./package.json');
var config_data = require('./gulpConfig.json');

// variable
var modeDev = true;
var myDate = new Date();
var reloadKey = myDate.getTime();

// task

gulp.task('help', function() {

  console.log('	gulp dev			文件打包');

  console.log('	gulp watch			文件监控打包');

  console.log('	gulp help			gulp参数说明');

  console.log('	gulp server			测试server');

  console.log('	gulp build    		生产环境');

  console.log('	gulp -m <module>	部分模块打包（默认全部打包）');

});

/* 默认 */
gulp.task('default', function() {
  gulp.start('help');
});

gulp.task('d', function(cb) {
  gulp.start('dev-task-main');
});

gulp.task('b', function(cb) {
  gulp.start('build-task-main');
});

gulp.task('w', function() {
  gulp.start('watch-task-main');
});



// ===============================================================
// task-main
// ===============================================================
gulp.task('task-main', function() {

  util.log('task web');

  if (modeDev) {
    gulp.src(config_data.html)
      .pipe(replace('//dev ', ''))
      .pipe(replace('reload-key', reloadKey))
      .pipe(fileinclude())
      //.pipe(htmlmin(htmlminOptionsDev))
      .pipe(gulp.dest(config_data.dest));

    gulp.src(config_data.data)
      .pipe(gulp.dest(config_data.dest + ''));
    gulp.src(config_data.locales_en)
      .pipe(gulp.dest(config_data.dest + '_locales/en/'));
    gulp.src(config_data.locales_cn)
      .pipe(gulp.dest(config_data.dest + '_locales/zh_CN/'));
    gulp.src(config_data.images)
      .pipe(gulp.dest(config_data.dest + 'images/'));

    gulp.src(config_data.js)
      .pipe(gulp.dest(config_data.dest + 'js/'));

    gulp.src(config_data.css)
      .pipe(minify())
      .pipe(gulp.dest(config_data.dest + 'css/'));

    gulp.src(config_data.less)
      //.pipe(sourcemaps.init())
      .pipe(less())
      //.pipe(minify())
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest(config_data.dest + 'css/'));
  } else {
    gulp.src(config_data.html)
      .pipe(replace('//dev ', ''))
      .pipe(replace('reload-key', reloadKey))
      .pipe(fileinclude())
      //.pipe(htmlmin(htmlminOptionsDev))
      .pipe(gulp.dest(config_data.prod));

    gulp.src(config_data.data)
      .pipe(gulp.dest(config_data.prod + ''));
    gulp.src(config_data.locales_en)
      .pipe(gulp.dest(config_data.prod + '_locales/en/'));
    gulp.src(config_data.locales_cn)
      .pipe(gulp.dest(config_data.prod + '_locales/zh_CN/'));
    gulp.src(config_data.images)
      .pipe(gulp.dest(config_data.prod + 'images/'));

    gulp.src(config_data.js)
      .pipe(uglify())
      .pipe(gulp.dest(config_data.prod + 'js/'));

    gulp.src(config_data.css)
      .pipe(minify())
      .pipe(gulp.dest(config_data.prod + 'css/'));

    gulp.src(config_data.less)
      //.pipe(sourcemaps.init())
      .pipe(less())
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest(config_data.prod + 'css/'));

  }
});

gulp.task('watch-task-main', function() {
  gulp.watch(config_data.html[0], ['task-main']);
  gulp.watch(config_data.js[0], ['task-main']);
  gulp.watch(config_data.css[0], ['task-main']);
  gulp.watch(config_data.less[0], ['task-main']);
});

gulp.task('dev-task-main', function() {
  modeDev = true;
  //gulpSequence('zt-public', 'task-main')();
  gulp.start('task-main');
  util.log('task finished.');
});

gulp.task('build-task-main', function() {
  modeDev = false;
  //gulpSequence('zt-public', 'task-main')();
  gulp.start('task-main');
  util.log('task finished.');
});
