var gulp = require('gulp');
var removeCode = require('gulp-remove-code');

var config = require('./config');
var dist = config.getDist();

gulp.task('img', function() {
  return gulp.src(config.source.img)
    .pipe(gulp.dest(dist + 'img'));
});

gulp.task('js', function() {
  return gulp.src(config.source.js)
    .pipe(gulp.dest(dist + 'js'));
});

gulp.task('fonts', function() {
  return gulp.src(config.source.fonts)
    .pipe(gulp.dest(dist + 'fonts'));
});

gulp.task('views', function() {
  return gulp.src(config.source.html)
  .pipe(removeCode({ production: process.env.NODE_ENV != '' }))
  .pipe(gulp.dest(dist))
});
