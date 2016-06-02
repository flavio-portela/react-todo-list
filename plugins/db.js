'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://tiempo:tiempomeetup@ds039684.mlab.com:39684/todos-example');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', (callback) => {
    console.log('connected to database');
});

var todoSchema = mongoose.Schema({
    description: String,
    done: Boolean
});

exports.Todo = mongoose.model('Todo', todoSchema);
