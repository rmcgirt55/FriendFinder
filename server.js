var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('.app/routing/html-routes.js');

var app = express();
var Port = process.env.port || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type:'application/vcd.api+json'}));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function(){
    console.log("app running on PORT: " + PORT);
});