const mongoose =  require("mongoose");
mongoose.set('strictQuery', false);
const dbConnect = ()=>{
    return mongoose.connect("mongodb+srv://rohity0:rohity0@cluster0.1kbffmi.mongodb.net/Todo").catch((e)=>{
        console.log(e.message)
    })
}

module.exports = dbConnect;
