const express=require('express');
const User=require('./routes/userFunctions');
const Movie=require('./routes/movieFunctions');
const Genre=require('./routes/genreFunctions');
const authorize=require('./routes/auth/validation');
const app=express();
const PORT=8080||process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user',authorize,User);
app.use('/genre',authorize,Genre);
app.use('/movie',authorize,Movie);
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});