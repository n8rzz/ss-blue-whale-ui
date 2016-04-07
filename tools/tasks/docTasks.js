/*eslint-disable */
'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;


    ////////////////////////////////////////////////////////////////////
    // MOCK API
    ////////////////////////////////////////////////////////////////////
    var connect = require('gulp-connect');
    var mockApi = require('swagger-mock-api');
    var cors = require('cors');

    gulp.task('connect:mock-api', function() {
        connect.server({
            port: 3002,
            middleware: function() {
                return [
                    cors(),
                    mockApi({
                        swaggerFile: 'docs/server-api/book-api-spec.yml'
                    })
                ];
            }
        });
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('mockapi', ['connect:mock-api']);
};
