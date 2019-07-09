const sequelize=require('sequelize');
const db=require('../config/database');
const Movie=db.define('Movies',{
    Name:{
        type:sequelize.STRING
    },
    Genre:{
        type:sequelize.STRING
    },
    Video:{
        type:sequelize.STRING
    }
});
module.exports=Movie;