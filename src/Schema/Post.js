const mongoose =  require("mongoose");

const Todo =  mongoose.Schema({
    title: {type:String,  required: true},
    todoStatus : {type:String, enum: ["pending", "inprogress", "done"],  default:"pending"}, 
    description : {type:String, required: true },
    createdBy: {type: mongoose.Schema.Types.ObjectId,  ref:"user", }
},{timestamps: true})

const Todos = mongoose.model("todo", Todo);

module.exports = Todos;

 

