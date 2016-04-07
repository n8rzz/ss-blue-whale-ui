/*eslint-disable */
'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var browserify = require('browserify');
    var babelify = require('babelify');
    var sourcemaps = require('gulp-sourcemaps');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');

    ////////////////////////////////////////////////////////////////////
    // BABEL
    ////////////////////////////////////////////////////////////////////
    gulp.task('babel', function () {
        browserify({
            entries: OPTIONS.FILE.JS_SRC_CLIENT,
            extensions: ['.js, .jsx'],
            debug: true
        })
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-0']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(OPTIONS.DIR.DEST_SCRIPTS));
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('build:scripts', ['babel']);

    gulp.task('watch:scripts', function() {
        gulp.watch(OPTIONS.GLOB.JS, ['babel']);
    });
};
