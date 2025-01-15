import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { UserModel } from "../models/Users.js";

const router = express.Router()

router.post("/register", async (req,res) => {
  const {username, password} = req.body
  const user = await UserModel.findOne({username})

  if(user){
    return res.status(400).json({message: "User already exists"})
  }
  
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new UserModel({username, password: hashedPassword})
  await newUser.save()

  res.json({message: "User registered successfully"})
})


router.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = await UserModel.findOne({username})

    if(!user){
      return res.status(400).json({message: "User not found"})
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
      return res.status(400).json({message: "Username or Invalid password"})
    }
    
    const token = jwt.sign({id: user._id}, "my_secret_key", {expiresIn: "1h"})
    res.json({token: token, userID: user._id})
})


export {router as userRouter}