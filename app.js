const express = require("express");
const bodyparser = require("body-parser");
var mongodb = require("mongodb").MongoClient;
const app = express();
app.use(bodyparser.json());






app.use((req, res, next)=>{
    console.log("middleware1");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
});


app.get('/',function(req,res){
    res.send("this is from node");
    console.log('working')
});



var db;
mongodb.connect("mongodb://sundarammcse:Dravid!86@ds063833.mlab.com:63833/userinformation",(error, database)=>{
    //mongodb.connect("mongodb:/localhost:27017/userinformation",(error, database)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log("DB connected");
        db = database;
    }
});

app.post('/register',function(req,res){
    console.log("post data");
    console.log(req.header);
    req.body._id=new Date().getTime();
    db.collection("user").save(req.body,(error,data)=>{
     if(error)
     {
         res.status(302).send('something went wrong');
     }
     else{
         res.json("user registered sucessfully");
     }
    });
});

app.post('/login',function(req,res){
   console.log(req.data);

   db.collection("user").find(req.body).toArray((error,data)=>{
   if(error){
       res.status(403).send("error in select query");
   }
   else{
       console.log(data);
       res.json(data);
   }
   });
});




module.exports = app;
