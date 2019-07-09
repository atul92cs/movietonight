const express=require('express');
const Genre=require('../models/genre');
const router=express.Router();
router.post('/add',(req,res)=>{
    const Name=req.body.name;
    Genre.create({Name:Name}).then(()=>{
        res.status(200).json({
            message:'Genre created'
        });
    }).catch(err=>{
        res.status(400).json({
            message:'Error occured',
            error:err
        });
    });
});
router.get('/',(req,res)=>{
    Genre.findAll({}).then(result=>{
        res.status(200).json({
            result
        });
    }).catch(err=>{
        res.status(400).json({
            message:'Error occured no genre found'
        });
    });
});
router.put('/:id',(req,res)=>{
    const id=req.params.id;
    const Name=req.body.name;
      Genre.update({Name:Name},{where:{id}}).then(()=>{
           res.status(200).json({
               message:'Genre updated'
           });
      }).catch(err=>{
          res.status(400).json({
              message:'Error occured',
              error:err
          });
      });
});
router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    Genre.destroy({where:{id:id}}).then(result=>{
        if(result===1)
        {
           res.status(200).json({
               message:'genre deleted'
           });
        }
        else
        {
            res.status(400).json({
                message:'Error occured'
            });
        }
    }).then(err=>{
        res.status(400).json({
            message:'Error occured'
        });
    });
});
module.exports=router;