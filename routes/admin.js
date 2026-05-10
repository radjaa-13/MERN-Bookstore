const express = require("express")
const router = express.Router()
const book = require("../models/bookSchema")
const multer  = require('multer')
const {cookieAuth} = require("../auth/middleware")




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
     cb(null, filename)
  }
})

const upload = multer({ storage: storage })
router.post("/createbook", cookieAuth, upload.single('coverImage'), async(req,res)=>{
    try {
        const {title,author,description,price,stock,isFeautred,category,discountPercent ,isOnSale } = req.body

    if(!title || !author || !description || !price || !stock){
         return res.status(400).json({ error: 'All fields are required' });
    }

    const newbook = new book({
      title,
      author,
      description,
      price,
      stock,
      isFeatred,
      isOnSale,
      discountPercent,
      category,
      coverImage: req.file?.filename ,
    })

    await newbook.save()
   res.status(201).json({ message: "book created successfully", book: newbook });
    } catch (error) {
     res.status(500).json({ error: error.message });
    }
    



})


router.get("/getbooks", cookieAuth, async  (req,res)=> {

    try {

       if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admin only.' });
        }
      const books = await book.find().populate("category","name")

      return res.json(books)

    } catch (error) {

     res.status(500).json({ error: error.message })
  
    }
})




router.put("/updatebook/:id" , async (req,res)=>{
    try {
        const Book = await  book.findByIdAndUpdate(req.params.id,
       req.body ,
      { new: true }  
        ).populate("category","name")


     if (!Book) {
      return res.status(404).json({ message: "book not found" })
    }   
      res.json({ message: "book updated successfully", book })
        
        
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
})


router.delete("/deletebook/:id", async (req,res)=> {

    try {
        
         const Book = await book.findByIdAndDelete(req.params.id)

      if (!Book) {
      return res.status(404).json({ message: "book not found" })
    } 

    res.json({ message: "book deleted successfully" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
   

})
router.get("/:id", async (req,res)=> {

    try {
    const Book = await book.findById(req.params.id).populate("category","name")
    if(!Book){
    return res.status(404).json({message:"book Is Not Found"})


    }

      return res.json(Book)
    } catch (error) {
     res.status(500).json({ error: error.message })
    }
   

})

module.exports = router;