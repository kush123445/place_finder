
 const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/place",{
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
    
  
  
}).then(()=>  console.log("success connection")
  
).catch((e)=>console.log(e)
    
);