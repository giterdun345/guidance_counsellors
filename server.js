const express= require("express")
const app = express()
const cors = require("cors")
const path = require('path')

// middleware
app.use(express.json())
app.use(cors())

// ROUTES
// register and login
app.use("/auth", require("./routes/jwtAuth"))
app.use("/dashboard", require("./routes/dashboard"))

app.use("/", express.static(path.join(__dirname, 'client/build')))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})