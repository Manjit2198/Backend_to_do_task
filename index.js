require("./dbConnection")
var express = require("express"),
cors        = require("cors")
app         = express(),
port        = 3050,
bodyParser  = require('body-parser'),
taskRoutes = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using routes 
app.use(taskRoutes);

app.listen(port, () => {
console.log("listening the port ", 3050);
});