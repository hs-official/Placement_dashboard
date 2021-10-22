const express= require("express");
const app=express();
const mysql=require("mysql");
const db=mysql.createPool({
    host:"35.200.156.190",
    user:"root",
    password:"Goaldiggers@123#",
    database:"username_login",
});
app.listen(3001,()=>{
    console.log("The great Himanshu");
});
