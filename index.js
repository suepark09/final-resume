const fs = require('fs');
const express = require('express');
const app = express();
const Mustache = require('mustache');
const path = require('path');
app.use('/', express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍');
  })
  

// const projectTemplate = fs.readFileSync('./templates/project-details.mustache', 'utf8');

function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, {aboutProjectHTML: "Luke"});
    $('#target').html(rendered);
  }
