//just to import all files 
const express=require("express");
const app=express();
const bodyParser=require("body-parser");

const routes=require("./routes/router.js");

//all middlewares are added
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//url specific will be send to routes
app.use("/",routes);


app.listen(3001,function(){
    console.log("Server is available at 3001")
})

module.exports=app;