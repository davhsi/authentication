const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require('./routes/authRoutes');
app.listen(4000, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Server Started Successfully. ");
    }
});

mongoose
    .connect("mongodb+srv://davishstd:hMbPHD6UtN52SqRk@cluster0.u33xi9t.mongodb.net/",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connection successfully");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
}));

app.use(cookieParser());

app.use(express.json());

app.use("/",authRoutes);



