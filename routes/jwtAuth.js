const router = require("express").Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")
// registering
router.post("/register", validInfo, async(req, res) =>{
    try {
        // step1 destructure
            const { name, email, password } = req.body   
            
        // step2 check if the user exists 
            const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [email])
            if(user.rows.length >0){
                return res.status(401).json("User already exists; email is already registered with the database")
            }

        // step3 bcrypt the user password for db 
            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound)

            const bcryptPassword = await bcrypt.hash(password, salt)

        // step4 insert the info into the db 
            const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword])
       
        // step5 generate a jwt token 
            const token = jwtGenerator(newUser.rows[0].user_id, newUser.rows[0].user_name)
            res.json({ token })


    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error (register)")
    }
})

// login and logout 
router.post("/login", validInfo, async (req, res) => {
    try {
        // step1 deconstruct req.body 
            const { email, password } = req.body
        // step 2 check if user doesnt exist and if not throw and error 
            const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [email])
            if(user.rows.length === 0){
                return res.status(401).json("User email is incorrect or does not exist.")
            }
        // step 3 check if incoming pword is the same as db password 
            const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
            if(!validPassword){
                return res.status(401).json("Password is incorrect.")
            }
        // step4 give them a jwt token 
        var token = jwtGenerator(user.rows[0].user_id, user.rows[0].user_name)
        res.json({ token })
    } catch (err) {
        console.log(err.Message)
        res.statusMessage(500).json("Server Error (login)")
    }
})

router.get("/is-verified", authorization, (req, res) => {
    try {
        res.json(true)
    } catch (error) {
        console.log(error.Message)
        res.statusMessage(500).json("Server Error (is-verified)")
    }
})

module.exports = router;