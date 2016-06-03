'use strict'
var Todo = require('./db').Todo;

exports.register = function( server, options, next )
{
    server.route({
        method: 'GET',
        path: '/api/todos',
        handler: (request, reply) => {
            Todo.find(function(err, todos){
                if(err) return console.log(err);
                reply(todos);
            });
        }
    });

    server.route({
        method: 'POST',
        path: '/api/todos',
        handler: (request, reply) => {
            const todo = new Todo({description: request.payload.text, done: false});
            todo.save((err, todo) => {
                if(err) return console.log(err);
                reply(todo);
            });
        }
    });

    server.route({
        method: 'PATCH',
        path: '/api/todos',
        handler: (request, reply) => {
            Todo.findOne({ _id: request.payload._id }, (err, todo) => {
                if(err) return console.log(err);
                todo.done = !todo.done;
                todo.save((err, todo) => {
                    if(err) return console.log(err);
                    reply(todo);
                })
            });
        }
    });

    server.route({
        method: 'DELETE',
        path: '/api/todos',
        handler: (request, reply) => {
            Todo.remove({ _id: request.payload._id }, (err) => {
                if(err) return console.log(err);
                reply(request.payload._id);
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'api',
    version: '1.0.0'
}
