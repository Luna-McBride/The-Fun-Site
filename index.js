var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

//var CONNECTION_STRING = "";

//var DATABASENAME = "";
//var database;

app.listen(5173, () => {
    //MongoClient.connect(CONNECTION_STRING, (error, client) => {
    //    database = client.db(DATABASENAME);
    //    console.log("Mongo Connected");
    //})
});

app.get("/", (request, response) => {
    response.render("/pages/welcome/App.vue")
})

app.get("/farm", (request, response) => {
    response.render("/pages/farm/app.html")
})