const express=require("express")
const router=express.Router()

// Test simple pour vérifier la route
/*router.post("/register", (req, res) => {
    console.log(req.body); 
    res.send("TEST OK");
});*/


const User = require("../models/UserSchema")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/register", async(req,res)=>{
        /*console.log(req.body);*/ // Vérifie ce que je reçois
    
    const{email, password, name} =req.body
    if(!email || !password || !name){
        return res.status(400).json({message:"email and name and password are required"})
        

        
    }

    let user= await User.findOne({email})
    if (user ){
        return res.status(400).json({message:"user already exists"})
    }
const hashedPassword= await bcrypt.hash(password, 10)
    const newUser= new User({
        email,
        password:hashedPassword,
        name
    })

    await newUser.save()
    /*console.log("New user created:", newUser);*/
     let token = jwt.sign({email,id :newUser._id},process.env.SECRET_KEY,{expiresIn:"1w"}) 
         res.status(201).json({message:"user registered successfully",user : newUser, token})



})
router.post("/signin",async(req,res)=>{
    const {password, email} =  req.body

 if(!email || !password ){
    return res.status(400).json({message:"email and name and password are required"})
       
    }
    let user = await User.findOne({email})
    if (user && bcrypt.compare(password, user.password)){
     let token = jwt.sign({email,id :user._id},process.env.SECRET_KEY,{expiresIn:"1w"}) 
        return  res.status(201).json({message:"user signin successfully",user : user, token})

    } 
    else 
    {
        return res.status(400).json({message:" invalid email or password"})

    }

})

module.exports =router;