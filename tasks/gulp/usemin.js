var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var removeCode = require('gulp-remove-code');

var config = require('./config');
var dist = config.getDist();

// TODO: REVIEW THIS TASK
gulp.task('usemin', function() {
  // gulp.src(dist)
  //   .pipe(usemin({
  //     html: [minifyHtml()],
  //     css: [rev()],
  //     inlinejs: [uglify, rev],
  //     inlinecss: [minifyCss, 'concat']
  //   }))
  //   .pipe(removeCode({ production: true }))
  //   .pipe(gulp.dest(dist));
});
