var gulp = require('gulp');
var requireDir = require('require-dir');

var allTasks = requireDir('./tasks/gulp');

var runSequence = require('run-sequence').use(gulp)

gulp.task('build', function(done) {
  runSequence('del',
    ['sass', 'img', 'js', 'fonts', 'views'], 
    'cdn', 
    'usemin',
    done)
});
