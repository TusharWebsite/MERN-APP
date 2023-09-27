const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require ("./routes/userRoute");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/merndb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(()=>{
    console.log("connected successfully");
    app.listen(4000); 
})
.catch((error)=>{
    console.log("error",error);

})
app.use(userRoute);
