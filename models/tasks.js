var mongoose = require("mongoose");

//creating model
var taskSchema = new mongoose.Schema({
    name:
    { 
        type: String,
        required: true
    },
    completed:
    {
        type: Boolean,
        default:false
    }
},{timestamps:true})


module.exports = mongoose.model("Task", taskSchema);
