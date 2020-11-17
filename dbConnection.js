var mongoose = require("mongoose")

// setting connection with mongodb
mongoose.connect("mongodb://localhost:27017/toDoTask",
 {useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
       console.log("database connected")
 }).catch((err)=>{
       console.log(err);
 })