var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('./config');

gulp.task('serve-browser', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './dev'
    }
  });
  gulp.watch(config.source.scss, ['sass']);
  gulp.watch(config.source.html).on('change', reload);
  gulp.watch(config.source.js).on('change', reload);
  gulp.watch(config.source.img).on('change', reload);
  gulp.watch(config.source.fonts).on('change', reload);
});
