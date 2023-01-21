const express = require("express");
const cors = require("cors");
const dbConnect = require("../config/dbConnect");
const register = require("./Routes/register");
const login = require("./Routes/Login");
const Todo = require("./Routes/Todo");
const app = express();
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

// register api
app.use("/register", register);
app.use("/login", login);
app.use("/todo", Todo)

app.get("/", (req, res)=>[
      res.send("welcome")
])


app.listen(PORT , async ()=>{
   await dbConnect();
     console.log(PORT)
})

