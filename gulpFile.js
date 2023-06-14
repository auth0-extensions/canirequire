const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const util = require('gulp-util');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
  return browserify({ entries: ['./index.jsx'], debug: true })
    .bundle()
    .on('error', util.log.bind(util, 'Browserify Error'))
    .pipe(source('canirequire.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify({ mangle: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', gulp.series(['build', function () {
  return gulp.watch(['**/*.jsx', 'src/**.js'], gulp.series(['build']));
}]));

gulp.task('default', gulp.series(['build']));
