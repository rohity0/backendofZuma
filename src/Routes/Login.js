const express = require("express");
const Users = require("../Schema/user");
const  brcypt = require("bcrypt");
const login = express.Router();
   
login.post("/", async (req, res)=>{
       let {email, password} = req.body;
            try{
                 
                 let loger = await Users.findOne({email: email});
                  let flag = brcypt.compare(loger.password, password)
                    if(flag){
                               let token = `${loger._id}:${loger.email}:${loger.name}`
                             return  res.status(200).send({
                                token: token
                               })

                    }

                    res.status(200).send({error:"Wrong Credential"})

            }catch(e){
                res.send(e.message)
            }
      
    
})

module.exports = login;
