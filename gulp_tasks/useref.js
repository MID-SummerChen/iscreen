var gulp = require('gulp'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-clean-css');

const conf = require('../conf/gulp.conf');

gulp.task('html', combind);

function combind() {
  return gulp.src('dist/index.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
}
