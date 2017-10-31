var gulp = require('gulp');
var del = require('del');

var config = require('./config');

gulp.task('del', function() {
  return del(config.getDist(), {force: true});
});

gulp.task('del-css', function() {
  return del(config.path.css, {force: true});
});
