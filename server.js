var express  = require("express");
var server = express();

/*****************************************************************************/
/**********Server Configuartion */
/*****************************************************************************/

// render HTML from endpoints
var ejs = require('ejs');
server.set('views', __dirname + "/public");
server.engine('html', ejs.renderFile);
server.set('view engine', ejs);


/*****************************************************************************/
/**********Web Server which sends the sintructions*/  
/*****************************************************************************/

//THESE ARE AN ENDPOINTS
server.get("/", function(req, res){
    res.send("Hello There!");
});

server.get("/about", function(req, res){
    res.send("about.html");
});

server.get("/work", function(req, res){
    res.send("Page Coming Soon...");
});

server.get("/contact", function(req, res){
    res.send("Page Coming Soon...");
});


/*****************************************************************************/
/*******Rest API is where the end points that don't respond to html but work nire with end point i.e.json*/
/*****************************************************************************/
server.post('/api/item', function(req, res){
    //code here to save the item
});


server.listen(8080, function(){
    console.log("Server running at http://:localhost:8080");
});