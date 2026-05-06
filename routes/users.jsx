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
        name,
        role: "user",
    })

    await newUser.save()
    /*console.log("New user created:", newUser);*/
     let token = jwt.sign({email,id :newUser._id,role: newUser.role},process.env.SECRET_KEY,{expiresIn:"1w"}) 
     res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,

   })
         res.status(201).json({message:"user registered successfully",user : newUser, token, role: newUser.role})



})
router.post("/signin",async(req,res)=>{
    const {password, email} =  req.body

 if(!email || !password ){
    return res.status(400).json({message:"email and name and password are required"})
       
    }
    let user = await User.findOne({email})
    if (user && bcrypt.compare(password, user.password)){
    const role = (user.role || "user").trim()


     let token = jwt.sign({email,id :user._id,role},process.env.SECRET_KEY,{expiresIn:"1w"}) 
     res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,

   })
   /**route pour  admin */
       const redirectPath  = role === "admin" ? "/admin" : "/"



        return  res.status(201).json({message:"user signin successfully",user : user, token,role, redirect : redirectPath})

    } 
    else 
    {
        return res.status(400).json({message:" invalid email or password"})

    }

})

router.get("./:id", async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message:"User not found "})
    }
    return res.status(200).json({user})
})

module.exports =router;