(function () {
    'use strict';

    // Load HapiJS package in our application
    var Hapi = require('hapi');
    
    // Instantiate a new Server
    var server = new Hapi.Server();

    // Initialize a new connection
    server.connection({
        port: 1337,
        host: '127.0.0.1'
    });

    // Setting a basic route
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply({
                message: 'Welcome to our Beer API, cheers!'
            })
        }
    });

    // Start our server and connections
    server.start(function (err) {
        if (err) {
            throw new Error('Ups ! no good our Server isn\' Hapi anymore. \n', err);
        }

        console.log('Server is Hapi and running at: ', server.info.uri);
    });

})();
