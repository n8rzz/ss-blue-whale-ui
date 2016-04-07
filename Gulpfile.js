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
// require('./tools/tasks/stylesTasks')(gulp, OPTIONS);
// require('./tools/tasks/serverTasks')(gulp, OPTIONS);
// require('./tools/tasks/markupTasks')(gulp, OPTIONS);
////////////////////////////////////////////////////////////////////
// UNIFIED GULP TASKS
////////////////////////////////////////////////////////////////////
gulp.task('build', ['build:scripts']);
gulp.task('watch', ['watch:scripts']);
gulp.task('default', ['build']);
