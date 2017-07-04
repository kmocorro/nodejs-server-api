var Todos = require('../models/todoModel');


module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){

        // seed database
        var starterTodos = [
            {
                username : 'test',
                todo : 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username : 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
            
        ];

        // create from the model
        Todos.create(starterTodos, function(err, results){

            if (err) throw err;
            console.log(results);
            res.send(results);

        });


    });


}