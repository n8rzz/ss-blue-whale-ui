/* eslint-disable */
'use strict';
const express = require('express');
const path = require('path');
const port = process.env.PORT || 4001;
const app = express();

app.use(express.static(__dirname + '/build'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port)
console.log('\nServer started on port ' + port);
