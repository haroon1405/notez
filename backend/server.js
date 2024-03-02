// Setup Express and import routes
require("dotenv").config()
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const noteRoutes = require("./routes/notes.js")

// Use json middleware
app.use(express.json());

// Use Routes
app.use("/notes",noteRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // Listen on Port
    app.listen(process.env.PORT,()=>{
        console.log(`Connect to DB & Listening on Port-${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
