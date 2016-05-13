/* eslint-disable */
'use strict';

var path = require('path');

var ROOT = path.join(__dirname, './');

var srcDir = './src';
var srcScriptsDir = path.join(srcDir, 'scripts');
var srcStylesDir = path.join(srcDir, 'styles');
// var srcMedia = path.join(srcDir, 'media');

var destDir = './build';
var destAssetsDir = path.join(destDir, 'assets');
var destScriptsDir = path.join(destAssetsDir, 'scripts');
var destStylesDir = path.join(destAssetsDir, 'styles');
// var destMedia = path.join(destDir, 'media');

var docsDir = './docs';
var docsServerApiDir = path.join(docsDir, 'server-api');
var docsCoverageDir = path.join(docsDir, 'coverage');

var testDir = './spec';

var tempDir = './.tmp';

var options = {};
options.ROOT = ROOT;
options.DIR = {
    SRC: srcDir,
    SRC_STYLES: srcStylesDir,
//     SRC_SCRIPTS: srcScriptsDir,
//     SRC_MEDIA: srcMedia,

    DEST: destDir,
    DEST_ASSETS: destAssetsDir,
    DEST_SCRIPTS: destScriptsDir,
    DEST_STYLES: destStylesDir,
//     DEST_MEDIA: destMedia,

    DOCS: docsDir,
    DOCS_SERVER_API: docsServerApiDir,
    DOCS_COVERAGE: docsCoverageDir,
//     DOCS_CLIENT_API: docsApiDir,

    TEST: testDir,

    TEMP: tempDir
};

options.FILE = {
    JS_SRC_CLIENT: './src/scripts/client/index.js',
    SASS_LINT_CONFIG: './sass-lint.yml'
};


options.GLOB = {
    SRC: path.join(options.DIR.SRC, '**/*'),
    DEST: path.join(options.DIR.DEST, '**/*'),
    JS: path.join(options.DIR.SRC, '**/*.js'),
    TEST: path.join(options.DIR.TEST, '**/*.spec.js'),
//     MARKUP: path.join(options.DIR.SRC_FOLDER, '**/*.html'),
    SASS: path.join(options.DIR.SRC, '**/*.scss'),
};


module.exports = options;
