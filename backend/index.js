const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/note.route')

const app = express()
dotenv.config()

try {
   mongoose.connect(process.env.MONGO_URL)
   console.log("Connected to MongoDB")
}
catch (error) {
    console.log("Error connecting to MongoDB: ", error)
}

app.use(express.json())
app.use(cors())

app.use("/api/v1/noteapp", router)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
