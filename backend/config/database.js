const sequelize=require('sequelize');
const Sequelize=new sequelize('8SzEkSACy3','8SzEkSACy3','lUTnPs4NbO',{
    host:'remotemysql.com',
    port:'3306',
    dialect:'mysql'
});
module.exports=Sequelize;