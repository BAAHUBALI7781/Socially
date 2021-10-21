const express=require('express');
const PORT=8080;
const app=express();

const expressLayouts=require('express-ejs-layouts');
const connectDb=require('./config/mongoose');
connectDb();

//Create a session cookie
const session=require('express-session');

const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

const MongoStore=require('connect-mongo');

app.use(express.urlencoded({extended:false}));

app.use(expressLayouts);


app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'socially',
    secret:'socially-webd-project',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:MongoStore.create({
        
        mongoUrl: "mongodb+srv://aditya26:adityaaditya@cluster0.e36bl.mongodb.net/Socially?retryWrites=true&w=majority",
        autoRemove:'disabled',
    },function(err){
        console.log(err || 'connect-mongdb setup');
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes/index.js'));

app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT}`);
})