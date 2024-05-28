const mysql=require("mysql2");
const { json } = require("stream/consumers");


let myconnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'India$12',
    database:'myproj',
    port:3306,

    authSwitchHandler: function ({ pluginName, pluginData }, cb) {
        if (pluginName === 'caching_sha2_password') {
            // You may need to adjust this line based on your MySQL configuration
            const password = 'India$12';
            cb(null, Buffer.from(password + '\0'));
        }
    }

});

myconnection.connect((err)=>{
    if(!err)
        {
            console.log("Connection success");
        }
    else{
        console.log("connection failed"+JSON.stringify(err));
    }

})


module.exports=myconnection