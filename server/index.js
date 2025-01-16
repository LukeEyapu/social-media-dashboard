import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./src/routes/users.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)


mongoose.connect("mongodb+srv://eyapuluke278:ue6V4DOCwRWjmedW@social-media.lqj6e.mongodb.net/social-media?retryWrites=true&w=majority&appName=social-media", 
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

app.listen(3001,() => {
  console.log("server started!");
})
