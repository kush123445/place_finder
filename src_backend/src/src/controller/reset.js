const express= require('express');
const login = require("../models/register");
const nodemailer = require('nodemailer');
const otpp = require('../models/otp');

const router = express.Router();

router.post('/pass',async(req,res)=>{

    const empemail=req.body.adminid;
        const emppass=req.body.adminpass;
        const sendemail=req.body.adminmail;
       

 const repass = await  login.findOne({emppass:emppass});
    
    if(repass)
    {
         
      if(repass.empemail==empemail){

        console.log(repass.empemail);
         console.log(empemail);
           
        var digits = '0123456789';

        var otpLength = 4;
    
        var otp = '';
    
        for(let i=1; i<=otpLength; i++)
    
        {
    
            var index = Math.floor(Math.random()*(digits.length));
    
            otp = otp + digits[index];
    
        }
        const otpcode=otp;
        console.log(otpcode);
       
       //   console.log( req.body.empfname)
             
              const addotp= new otpp({ 
   
              code: otpcode,
              email:empemail,
                
                
                  
              })
              console.log("lhjuwhd");
              const inscode= await addotp.save().then((inscode)=>{
               //   res.send(inscode);
                  console.log(inscode+"kjhkj");
                  
                        
              }).catch((e)=>{
                  res.send("NO");
                 
              })
              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'kushalhts00@gmail.com',
                  pass: '9627077960'
                }
              });
    
              const mailOptions = {
                from: 'kushalhts00@gmail.com',
                to: 'kushalhts11@gmail.com',
                subject: `your verification code : ${otp}`,
                text: 'this is your one time password keep it secure and use only once  😘😘😘 :)'
              };
    
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              res.send("yes");
           
        
       



      }
      else
      {
        res.send("other account");
      }
      

    }
    else
    {
        res.send("no");
    }

    //res.send("hello");
})

//************************************************************************************************************************************ */
//here is the code of find code in the databse & change password




router.post('/pass/change',async(req,res)=>{

  const code=req.body.code;
      const newpass=req.body.newpass;

      const vcode= await  otpp.findOne({code:code});
     console.log(vcode)
        // const empemail1=vcode.email;

     if(vcode){
      
    const change=await login.findOneAndUpdate({empemail:vcode.email},{emppass:newpass},function(err,result){
      if(err){
        res.send(err);
      }
      else{
        res.send(result);
      }
    })
     }
     else{
          
      res.send("nonnn");
     }
     
})
  
module.exports=router;