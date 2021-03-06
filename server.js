if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}

const express=require("express");
const ejs=require("ejs");
const expressLayouts=require("express-ejs-layouts");
const mongoose=require("mongoose");
const app=express();

const indexRouter=require('./routes/index');


app.set("view engine","ejs");
app.set("views",__dirname+'/views');
app.set('layout',"layouts/layout");
app.use(expressLayouts);
app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('error',()=>{
    console.error("phata");
});

db.once('open',()=>{
    console.log("mongoose is running");
});


app.use('/',indexRouter);
app.listen(process.env.port||3000,()=>{
    console.log("running on 3000");
})
