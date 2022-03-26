const mongoose = require("mongoose");

const registerschema = new mongoose.Schema({
      empfname: String,
      emplname:String,
      empemail: {
            type:String,
            unique:true
      },
      emppass:String  ,
      empphoto:String
})


const login = new mongoose.model("login",registerschema)


module.exports= login;