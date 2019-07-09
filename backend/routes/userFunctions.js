const sequelize=require('sequelize');
const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const User=require('../models/user');
router.post('/signup',(req,res)=>{
    const Email=req.body.email;
    const Password=req.body.password;
    bcrypt.hash(Password,10).then(hash=>{
      User.create({
          Email:Email,
          Password:hash
      }).then(()=>{
        res.status(200).json({
            message:'user registered'
        });
      }).catch(err=>{
        res.status(400).json({
            message:'Error occured'
        });
      });
    }).catch(err=>{
       res.status(400).json({
           message:'error occured'
       });
    });
});
router.post('/login',(req,res)=>{
    const Email=req.body.email;
    const Password=req.body.password;
    let fetcheduser;
    User.findOne({where:{Email:Email}}).then(result=>{
        if(!result)
        {
           res.status(401).json({
               message:'Error occured! user not found'
           });
        }
        fetcheduser=result
        return bcrypt.compare(Password,fetcheduser.Password);
    }).then(result=>{
        if(!result)
        {
            res.status(401).json({
                message:'Password is invalid'
            });
        }
        else
        {
            const token=jwt.sign({email:fetcheduser.Email},"Jackward");
            res.status(200).json({
                token:token,
                email:fetcheduser.Email
            });
            

        }
    }).catch(err=>{
        res.status(400).json({
            message:"Error occured",
            error:err
        });
    })
});
module.exports=router;