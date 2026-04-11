const express=require("express")
const router=express.Router()
const book = require("../models/bookSchema")
const multer  = require('multer')



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/mesimages/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })







router.post("/createbook", upload.single('coverImage'), async(req, res)=>{
    try {
const {title,author, description,price,stock,isfeautred,
        category, discountPercent, isOnSale}= req.body

        if(!title || !author  || !description|| !price || !stock  )

        return res.status(400).json({error:'all fields are required'})

        const newbook=new book({
            title,
            author,
             description,
             price,
             stock,
             isfeautred,
             category,
             discountPercent,
             isOnSale,
             coverImage : req.file?.filename , 

        })
        await newbook.save()
        return res.status(201).json({message:"book created with  successfully", book :newbook});
        




        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    })
    router.get("/getbooks", async (req,res)=>{
        try {
      const books = await book.find().populate("category", "name")
       return res.json(books)

        } catch (error) {
     res.status(500).json({error: error.message})
    }
         
    })
   
     router.get("/:id", async(req,res)=>{
        try {
        const book = await book.findById(req.params.id)
        if(!book){
            return res.status(404).json({message :"book is not founds"})
        }

        return res.json(Book)
        } catch (error) {
         res.status(500).json({error: error.message})

   } 

    })
     router.put("/updatebook/:id" , async(req,res)=>{
        try {
            

            const books = await book.findByIdAndUpdate(req.params.id,
               req.body,
               {new : true}
            ).populate("category", "name")

            if(!book){
            return res.status(404).json({message :"book is not founds"})
        }
        res.json({message: "book updated successfully "})


        } catch (error) {
          res.status(500).json({error: error.message})

        }
     })

     router.delete("/deletebook/:id", async(req,res)=>{
        try {

          const books = await book.findByIdAndDelete(req.params.id)
        if(!book){
            return res.status(404).json({message :"book is not founds"})
        }
         res.json({message: "book deleted successfully "})
  
            
        } catch (error) {
            
        }
        
     })
   

    module.exports =router;