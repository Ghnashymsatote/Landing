const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors")
let port=3000;
app.use(cors());
main().then((res)=>{
    console.log("Connecion Successfull new");
}).catch(err =>console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/TASK")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  app.post("/signDt",async(req,res)=>{
    let{lname,fname,email,mobile,password,cpassword}=req.query;
    res.send(lname,fname,email,mobile,password,cpassword);
    console.log(lname,fname,password,cpassword,mobile,email);
});
app.post("/loginData",async(req,res)=>{
    let{emails,passwords}=req.query;
    
    res.send(emails,", and ",passwords);
});
app.listen(port,()=>{
    console.log(` app is running ${port}`)
})