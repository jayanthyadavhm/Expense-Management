const mongoose=require('mongoose');
const express=require('express');

const connectDb=async()=>{
    try{
      const connect= await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDb connected:${connect.connection.host}`)
    }catch (error)
    {
console.log("MongoDB connection error:",error);
    }
};
module.exports=connectDb