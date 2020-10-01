const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async (req, res, next) => {
try {
    
    // step 1 destructure
    console.log("Printing jwtToken...")
    console.log(req.header("token"))

    const jwtToken = req.header("token")

    console.log(jwtToken.length)

    // if(!jwtToken){
    //     return res.status(403).json("Not Authorized (authorization not jwt Token)")
    // }
    // step 2 check if the token is valid 
    const payload = jwt.verify(jwtToken, process.env.jwtSecret)
    // step 3 gives access as req.user
    req.user = payload.user
    next()

    } catch (err) {
        console.error(err.message)
        return res.status(403).json("Not Authorized (authorization catch)")
    }
}