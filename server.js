const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();
server.connection({host: 'localhost',port: 3000});

const plugins = [
  require('inert'),
  require('./plugins/api')
];

server.register( plugins, (err) => {
  if(err){
    throw err;
  }

  // static files
  server.route({
      method: 'GET',
      path: '/assets/{param*}',
      handler: {
          directory: {
              path: 'dist/assets'
          }
      }
  });

  // always return index.html
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: (request, reply) => {
      reply.file('dist/index.html');
    }
  });


  server.start((err) => {
    if(err){
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  })

});
