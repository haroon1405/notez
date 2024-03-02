// Setup Express and import routes
require("dotenv").config()
const express = require("express")
const app = express();
const noteRoutes = require("./routes/notes.js")

// Use json middleware
app.use(express.json());

// Use Routes
app.use("/notes",noteRoutes);

// Listen on Port
app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port-${process.env.PORT}`)
})