var express  = require("express");
var server = express();

/*****************************************************************************/
/**********Server Configuartion */
/* win: ctr + p
/*****************************************************************************/

// render HTML from endpoints
var ejs = require('ejs');
server.set('views', __dirname + "/public");
server.engine('html', ejs.renderFile);
server.set('view engine', ejs);

//Server Static files (js, css, img, pdf, doc, .... which allows server to access all files in public)
server.use(express.static(__dirname + "/public"));


// body-parse to read paylod (ajax data) directly to object
var bparser = require('body-parser');
server.use(bparser.json());


//MongoDB connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var mongoDB = mongoose.connection;
var itemConstructor;

/*****************************************************************************/
/**********Web Server which sends the intructions*/  
/*****************************************************************************/

//THESE ARE AN ENDPOINTS
server.get("/", function(req, res){
    res.render("index.html");
});

server.get("/admin", function(req, res){
    res.render("admin.html");
});

server.get("/about", function(req, res){
    res.render("about.html");
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

var data = [];
var cnt = 1;

server.post('/api/items', function(req, res){
    //code here to save the item
    var item = req.body;

    if(!item.price){
        res.status(400); //bad request
        res.send("Price is required on the Item");
    }

    else{

        var itemFormDB = itemConstructor(item);
        itemFormDB.save((error, savedItem) => {
            if(error){
                res.status(500);
                res.send(error) 
            }

            res.status(201);
            res.json(savedItem);
        });
        
    }
});

//get all
 server.get('/api/items', (req, res) => {
    itemConstructor.find({}, (error, data) =>{
        if(error){
            res.status(500);
                res.send(error) 
            }

            //res.status(200);
            res.json(data);
    });
 });

 //get by name
 server.get('/api/items/:user', (req, res) => {
    let name = req.params.user;
    itemConstructor.find({ user: name }, (error, data) =>{
        if(error){
            res.status(500);
                res.send(error) 
            }

            //res.status(200);
            res.json(data);
    });
 });

server.delete('/api/items', (req, res) => {
    var id2Remove = req.body.id;
    itemConstructor.deleteOne({_id: id2Remove }, (error) => {
        if(error){
            res.status(500);
            res.send(error);
        }

        res.send("Removed");
    });
});

server.get('/test/1',(req, res) => {
    //sole the problem and reply results

    //data
    var nums = [81,3,1,543,-2,53,-28,897123,1,2,-9487745, 99];

    //problem: find the biggest number in the array
    //your code

                            //function (81,3,1,543,-2,53,-28,897123,1,2,-9487745, 99){
                            //   var greater = Math.max(81,3,1,543,-2,53,-28,897123,1,2,-9487745, 99);  
                        // }

              var positives = nums.filter(n => n>=0);

                   // var postives = num.filter((n) => {
                  //     if(n >= 0) return true;
                   //     else return false;
                   // });

                   // var max = nums[0]; for(let i=0; i < nums.length; i++){
                   //     if(num[i] > max) {
                    //        max = nums[i];
                    //    }
                    // }
    //result

    res.send("Res: " +3);
});




mongoDb.on('error', (error) => {
    console.log('Error connecting to DB');
});

mongoDb.on('open', () => {
    console.log('Yeah! I am connected to DB');

    //predefined schema for mongoDB
    var itemSchema = mongoose.Schema({
        coding: String,
        title: String,
        price: Number,
        category: String,
        image: String,
        user: String

    });

    itemConstructor = mongoose.model('itemsCh10', itemSchema);

});

// Start server
server.listen(8080, function(){
    console.log("Server running at http://:localhost:8080");
});




//Rest API
// Mongo DB and Mongoose
// npm install --global nodemon