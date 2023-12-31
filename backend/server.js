const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors");

const app = express();


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: ["http://localhost:3000","https://marn-task-app.onrender.com"]
}));
app.use("/api/tasks",taskRoutes);

// const logger = (req,res,next )=> {
//     console.log("middleware ran");
//     console.log(req.method);
//     next()

// }


//Routes 

app.get("/",(req,res)=> {

    res.send("Home page");

});

mongoose

.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT,()=> {
        console.log(`Server running on port ${PORT}`); 
    });


})
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000

//mongodb+srv://ashen443:<password>@cluster0.mqoee9z.mongodb.net/?retryWrites=true&w=majority
