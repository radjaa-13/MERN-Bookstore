const express=require("express")
const app = express()
const cors = require("cors")

const dotenv = require("dotenv").config()
const connectDB = require("./config/db")


// Connexion à la base de données
connectDB(); 
// pour parser le body JSON
app.use(express.json())


// Routes
app.use("/users", require("./routes/users"))


app.use(cors())

// Démarrage du serveur
const PORT  = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`)
})
