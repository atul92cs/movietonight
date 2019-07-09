const sequelize=require('sequelize');
const db=require('../config/database');
const User=db.define('Users',{
    Email:{
        type:sequelize.STRING
    },
    Password:{
        type:sequelize.STRING
    },

});
module.exports=User;