const sequelize=require('sequelize');
const db=require('../config/database');
const Genre=db.define('Genres',{
    Name:{
        type:sequelize.STRING
    }
});
module.exports=Genre;