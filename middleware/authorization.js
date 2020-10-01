const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async (req, res, next) => {
try {
    // step 1 destructure else redirect to to login (used for reload)
    const jwtToken = req.header("token")
    if(!jwtToken){
        res.redirect('/login')
        // return res.status(403).json("Not Authorized (authorization not jwt Token)")
    }
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