const express=require("express")
const router=express.Router()


const book = require("../models/bookSchema")


router.post("/createbook", async(req, res)=>{
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
        const Book = await book.findById(req.params.id)
        if(!book){
            return res.status(404).json({message :"book is not founds"})
        }

        return res.json(book)
        } catch (error) {
         res.status(500).json({error: error.message})

   } 

    })
    
   

    module.exports =router;