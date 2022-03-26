const mongoose = require("mongoose");

const otpschema = new mongoose.Schema({

   code : String,
   email : String,
 

  
})

const otpp = new mongoose.model("otpp",otpschema)

module.exports= otpp;