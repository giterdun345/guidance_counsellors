const bcrypt = require("bcrypt")


const newpword = password2
const saltRound = 10;
const salt = await bcrypt.genSalt(saltRound)
const bcryptPassword = await bcrypt.hash(newpword, salt)
console.log(bcryptPassword)


