var gulp    = require('gulp'),
      connect = require('gulp-connect'),
      gutil    = require('gulp-util'),
      uglify  = require('gulp-uglify'),
      concat  = require('gulp-concat');

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['webserver']);
