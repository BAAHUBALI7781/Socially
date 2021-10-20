const express=require('express');
const PORT=8080;
const app=express();

app.use('/',require('./routes/index.js'));

app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT}`);
})