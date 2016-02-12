/**
 * Created by DaraW on 2016/2/11.
 */
'use strict';

const gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    jslint = require('gulp-jslint'),
    uglify = require('gulp-uglify');

gulp.task('lint', function() {

    gulp.src('typing.js')
        .pipe(jslint())
        .pipe(jslint.reporter());

});

gulp.task('clean', function(cb) {

    return del(['typing.min.js'], cb);

});

gulp.task('build', ['clean'], function() {

    gulp.src('typing.js')
        .pipe(uglify())
        .pipe(rename('typing.min.js'))
        .pipe(gulp.dest(''));

});

gulp.task('default', ['clean', 'build']);