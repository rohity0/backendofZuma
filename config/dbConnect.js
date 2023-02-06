const mongoose =  require("mongoose");

mongoose.set('strictQuery', false);
const dbConnect = ()=>{
    return mongoose.connect(process.env.MONGODB_URL).catch((e)=>{
        console.log(e.message)
    })
}

module.exports = dbConnect;
