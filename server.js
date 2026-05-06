const express=require("express")
const app = express()
const cors = require("cors")

const dotenv = require("dotenv").config()
const connectDB = require("./config/db")


// Connexion à la base de données
connectDB(); 
// pour parser le body JSON
app.use(cors())
app.use(express.json ({
  origin: "http://localhost:3000", //  React app's URL
  credentials: true, // Allow credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))


// Routes
app.use("/users", require("./routes/users"))

app.use("/books", require("./routes/books"))

app.use("/category", require("./routes/category"))








// Démarrage du serveur
const PORT  = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`)
})
