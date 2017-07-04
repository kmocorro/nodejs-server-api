var express = require('express');
var app = express();
<<<<<<< HEAD
=======

>>>>>>> f7e8137b6e82f7f8a56810e0d74366e956d81b90
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

<<<<<<< HEAD
// gg
=======

>>>>>>> f7e8137b6e82f7f8a56810e0d74366e956d81b90
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);

