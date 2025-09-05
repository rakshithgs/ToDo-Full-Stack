const express=require("express");
const User=require("../modles/user");
const router=express.Router();

const jwt = require("jsonwebtoken");

router.post("/login",async(req,res)=>{
    const { email,password}=req.body;

    const user=await User.findOne({email});
    if(!user)return res.status(400).json({message:"user not found"});

    const valid = await user.checkPassword(password);
    if(!valid)return res.status(400).json({message:"wrong password"});

    const token = jwt.sign(
        {id:user._id,email:user.email},
        process.env.JWT_SECRET
    );
    res.json({token});
});


router.post("/register",async(req,res)=>{
    const {email,password}=req.body;
    const user=new User({email,password});
    await user.save();
    res.json({message:"user registerd!"});
    }
);
module.exports=router;