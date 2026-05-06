const mongoose=require("mongoose")
const bookSchema= new mongoose.Schema({
title : {
    type : String,
    require : true,

},
author: {
     type : String,
    require : true,

},
description : {
     type : String,
    require : true,

},

price: {
     type : Number,
    require : true,

},

stock: {
     type : Number,
    require : true,
    default : 0,

},

isfeatred: {
     type : Boolean,
    default : false,

},

isOnSale: {
     type : Boolean,
    default : false,

},

discountPercent: {
     type : String,
    default : false,

},

category:{
    type: mongoose.Schema.Types.ObjectId,ref: "category"
},

coverImage: {
     type : String,
   

},

})

module.exports =mongoose.model('book', bookSchema);