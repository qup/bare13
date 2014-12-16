var metalsmith = require('metalsmith');

var autoprefixer = require('metalsmith-autoprefixer');
var fingerprint = require('metalsmith-fingerprint');
var headings = require('metalsmith-headings');
var templates = require('metalsmith-templates');
var permalinks = require('metalsmith-permalinks');

var site = metalsmith(__dirname);

site.use(fingerprint({ pattern: 'stylesheets/screen.css' }));
site.use(headings('h2'));
site.use(autoprefixer());
site.use(permalinks({
   relative: false,
}));

site.use(templates({
   directory: 'template',
   engine: 'handlebars'
}));

site.build(function(err) {
   if (err) {
      throw err;
   }
});
