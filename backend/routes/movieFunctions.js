const express=require('express');
const sequelize=require('sequelize');
const Movie=require('../models/movie');
const router=express.Router();
router.post('/add',(req,res)=>{
    const Name=req.body.name;
    const Genre=req.body.genre;
    const Video=req.body.video;
    Movie.create({
        Name:Name,
        Genre:Genre,
        Video:Video
    }).then(()=>{
         res.status(200).json({
             message:'Movie created'
         });
    }).catch(err=>{
         res.status(400).json({
             message:'Error occured',
             error:err
         });
    });

});
router.get('/',(req,res)=>{
    Movie.sequelize.query('select Movies.id,Movies.Name,Genres.Name as Genre from Movies join Genres on Movies.Genre=Genres.id',{type:sequelize.QueryTypes.SELECT})
    .then(result=>{
        res.status(200).json({
            result
        });
    })
    .catch(err=>{
        res.status(400).json({
            message:'Error occured',
            error:err
        });
    })
});
router.get('/:id',(req,res)=>{
    const id=req.params.id;
    Movie.sequelize.query('select Movies.id,Movies.Name,Movies.Video,Genres.Name as Genre from Movies join Genres on Movies.Genre=Genres.id where Movies.id=?',{replacements:[id],type:sequelize.QueryTypes.SELECT}).then(result=>{
        res.status(200).json({
            result
        });
    }).catch(err=>{
        res.status(400).json({
            message:'Error occured',
            error:err
        });
    })
  });
router.put('/:id',(req,res)=>{
    const id=req.params.id;
    const Name=req.body.name;
    const Genre=req.body.genre;
    const Video=req.body.video;
    Movie.update({Name:Name,Genre:Genre,Video:Video},{where:{id}}).then(()=>{
        res.status(200).json({
            message:'Movie updated'
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
     Movie.destroy({where:{id:id}}).then(result=>{
         if(result===1)
         {
             res.status(200).json({
                 message:'Movie deleted'
             });
        }
        else
        {
            res.status(400).json({
                message:'Error occured'
            });
        }
            
     }).catch(err=>{
          res.status(400).json({
              message:'Error occured',
              error:err
          });
     });
 });
 module.exports=router;