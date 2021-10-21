const mongoose=require('mongoose');



function connectDb(){
    mongoose.connect("mongodb+srv://aditya26:adityaaditya@cluster0.e36bl.mongodb.net/Socially?retryWrites=true&w=majority");
    const connection=mongoose.connection;
    connection.once('open',(err)=>{
        if(err){
            console.log("Not connected to database!");
            return;
        }
        console.log('Database connected!');
    })
}
module.exports=connectDb;
