var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var twig        = require('metalsmith-twig');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(twig({
    directory: 'layouts',
    cache: false
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
