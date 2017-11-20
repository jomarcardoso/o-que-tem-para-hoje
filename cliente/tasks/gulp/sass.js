var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('./config');
var dist = config.getDist();

var runSequence = require('run-sequence').use(gulp)

gulp.task('sass-css', function() {
  return gulp.src(config.source.scss)
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.path.css))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('sass', function(done) {
  runSequence('del-css',
    ['sass-css'],
    done)
});
