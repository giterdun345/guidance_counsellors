const express= require("express")
const app = express()
const cors = require("cors")

// middleware
app.use(express.json())
app.use(cors())

// ROUTES
// register and login
app.use("/auth", require("./routes/jwtAuth"))

app.use("/dashboard", require("./routes/dashboard"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})