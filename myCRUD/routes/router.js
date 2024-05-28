const express=require("express");
const router=express.Router();

const connection=require("../db/dbconnect.js");


//GET-------->retrive 
router.get("/products",function(req,resp){
    connection.query("select * from products",function(err,data,fields){
        console.log(data)
        if(err)
            {
                resp.status(500).send("data not found");

            }
        else{
            resp.send(data);
        }
    })
});

//params are used in |get delete| only as the values are retrive from url
router.get("/products/product/:pid",function(req,resp){
    connection.query("select * from products where pid=?",[req.params.pid],function(err,data,fields){
        if(err)
            {
                resp.status(500).send("data not found");

            }
        else{
            resp.send(data[0]);
        }
    })
})





//POST----->add 
router.post("/product/:id",function(req,resp){
  connection.query("insert into product values(?,?,?)",[req.body.pid,req.body.pname,req.body.pprice],function(err,result){
    if(err)
        {
            resp.status(500).send("error occured")
        }
        else{
            if(result.affectedRows>0)
                {
                    resp.send("data successfully added");
                }
        }
  })
});



//PUT---------->update
router.put("/products/:id",function(req,resp){
    connection.query("update product set name pname=? pprice=? where pid=?"[req.body.pname,req.body.pprice],function(err,result){
        if(err)
            {
                resp.status(500).send("error occured")
            }
            else{

                resp.status(200).send("data updated");
            }
    })
});



//DELETE->delete

router.delete("/products/:id",function(req,resp){
    connection.query("delete from procduct where pid=?",[req.params.pid],function(err,result){
        if(err)
            {
                resp.status(500).send("error occured");
            }
        else{
            resp.status(200).send("deleted succesfully")
        }
    })
});

module.exports=router;