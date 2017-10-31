var gulp = require('gulp');
var cdn = require('gulp-cdn');
var foreach = require('gulp-foreach');
var removeCode = require('gulp-remove-code');
var config = require('./config');

var cdnUrl = config.getCdn();
var apiUrl = config.getApi();
var dist = config.getDist();

gulp.task('cdn-html', function() {
  return gulp.src(config.source.html)
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(cdn([{
          domain: '/img/',
          cdn: cdnUrl + 'img/'
        }, {
          domain: '/js/',
          cdn: cdnUrl + 'js/'
        }, {
          domain: '/css/',
          cdn: cdnUrl + 'css/'
        }]));
    }))
    .pipe(removeCode({ production: process.env.NODE_ENV != '' }))
    .pipe(gulp.dest(dist));
});

gulp.task('cdn-js', function() {
  return gulp.src(config.source.js)
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(cdn([{
          domain: '/arezzo-api/',
          cdn: apiUrl
        }]));
    }))
    .pipe(gulp.dest(dist + 'js'));
});

gulp.task('cdn-css', function() {
  return gulp.src(config.source.css)
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(cdn([{
          domain: '/img/',
          cdn: cdnUrl + 'img/'
        }, {
          domain: '/fonts/',
          cdn: cdnUrl + 'fonts/'
        }]));
    }))
    .pipe(gulp.dest(dist + 'css'));
});

gulp.task('cdn', ['cdn-html', 'cdn-js', 'cdn-css']);
