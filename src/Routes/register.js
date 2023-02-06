const express = require("express");
const Users = require("../Schema/user");
const  brcypt = require("bcrypt");
const register = express.Router();

register.get("/", (req, res)=>[
    res.send("welcome2")
])


register.post("/", async (req, res)=>{
          let {email, password} = req.body;
            try{
                let  validUser = await Users.find({email: email});
                if(validUser.length===0){
                     let hashPassword = brcypt.hash(password, 10)
                        
                      let newUser = new Users({
                        ...req.body,
                        password: hashPassword,
                      });
                        await newUser.save();
                        res.status(200).send({ keyS : "User Signuped Sccessfully"})
                }else{
                    res.status(200).send("User already  have an account");
                }
            }catch(e){
                         res.send(e.message);
            }
})




module.exports = register