/* eslint-disable */
'use strict';

process.chdir(__dirname);

var gulp = require('gulp');
var OPTIONS = require('./tools/paths');
var runSequence = require('run-sequence');

////////////////////////////////////////////////////////////////////
// EXTERNAL TASKS
////////////////////////////////////////////////////////////////////
require('./tools/tasks/scriptsTasks')(gulp, OPTIONS);
require('./tools/tasks/docTasks')(gulp, OPTIONS);
// require('./tools/tasks/testTasks')(gulp, OPTIONS);
require('./tools/tasks/stylesTasks')(gulp, OPTIONS);
// require('./tools/tasks/serverTasks')(gulp, OPTIONS);
// require('./tools/tasks/markupTasks')(gulp, OPTIONS);
require('./tools/tasks/globalTasks')(gulp, OPTIONS);
////////////////////////////////////////////////////////////////////
// UNIFIED GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('build', function() {
    runSequence(
        'clean',
        ['build:sass', 'build:scripts'],
        // ,
        // 'lint:scripts',
        'lint:sass'
    );
});
gulp.task('watch', ['watch:sass', 'watch:scripts']);
gulp.task('default', ['build']);
gulp.task('lint', ['lint:sass']);
