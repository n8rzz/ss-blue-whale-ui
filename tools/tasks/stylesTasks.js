/* eslint-disable */
'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;

    var path = require('path');
    var sourcemaps = require('gulp-sourcemaps');

    ////////////////////////////////////////////////////////////////////
    // SASS
    ////////////////////////////////////////////////////////////////////
    gulp.task('sass', function() {
        var sass = require('gulp-sass');
        var autoprefixer = require('gulp-autoprefixer');

        gulp.src(OPTIONS.GLOB.SASS)
            .pipe(sourcemaps.init())
            .pipe(
                sass()
                .on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(OPTIONS.DIR.DEST_ASSETS));
    });

    ////////////////////////////////////////////////////////////////////
    // SASS
    ////////////////////////////////////////////////////////////////////
    gulp.task('lint:sass', function() {
        var sassLint = require('gulp-sass-lint');
        var jsYaml = require('js-yaml');
        var fs = require('fs');

        var configFileJSON = jsYaml.safeLoad(fs.readFileSync(OPTIONS.FILE.SASS_LINT_CONFIG, 'utf8'));

        gulp.src([
            OPTIONS.GLOB.SASS,
                '!**/_reset.scss',
                '!**/_util.scss',
                '!**/grid/_helpers.scss'
            ])
            .pipe(sassLint(configFileJSON))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('build:sass', ['sass']);

    gulp.task('watch:sass', function() {
        gulp.watch(OPTIONS.GLOB.SASS, ['sass', 'lint:sass']);
    });
};
