const express = require("express");
const Todos = require("../Schema/Post");

const Todo = express.Router();

Todo.get("/", async (req, res)=>{
      let [id, email,name] = req.headers.token.split(":");
           try{
               let  data = await Todos.find({createdBy: id}).sort({createdAt: -1});
                      res.send(data);
           }catch(e){
                       res.send(e.message);
           }
});



Todo.post("/", async(req, res)=>{
    let [id, email,name] = req.headers.token.split(":");
    // console.log(id)
    let  post = req.body;
          post = {
            ...post,
            createdBy: id,
          };
             try{
                      let newPost = Todos(post);
                          await newPost.save();
                          res.send(newPost)
             }catch(e){
                    res.send(e.message)
             }
});


Todo.patch("/:id", async(req, res)=>{
     let [id, email,name] = req.headers.token.split(":");
     let  param = req.params.id;
     try{ 
      let data=await Todos.findByIdAndUpdate(param,{...req.body},{new:true});
                res.status(200).send("done");

     }catch(e){
        console.log(e.message)
         res.status(400).send(e.message)
     }
      
})

Todo.delete("/:id", async(req, res)=>{
   let id = req.params.id;
      try{ 
           await Todos.findByIdAndDelete(id);
           res.status(200).send("done")

      }catch(e){
         res.status(400).send(e.message)
      }
})

module.exports = Todo    
