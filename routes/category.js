const express=require("express")
const router=express.Router()


const category = require("../models/categorySchema")


router.post("/createcategory", async(req, res)=>{
    try {
const {name}= req.body

        if(!name )

        return res.status(400).json({error:'name is required'})

        const newcategory=new category({
            name,

        })
        await newcategory.save()
        return res.status(201).json({message:"category created with  successfully", category : newcategory  });
        




        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    })

    router.get("/getCategories", async  (req,res)=> {

    try {
      const categories = await category.find()

      return res.json(categories)

    } catch (error) {

     res.status(500).json({ error: error.message })
  
    }
})
    
    module.exports =router;