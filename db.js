const Pool = require("pg").Pool
require('dotenv').config()

const devConfig = {
    user:    process.env.PG_USER, 
    password:process.env.PG_PASSWORD, 
    host:    process.env.PG_HOST, 
    database:process.env.PG_DATABASE,
    port:    process.env.PG_PORT
}

const proConfig ={
    connectionString: process.env.DATABASE_URL
}

console.log(process.env.PG_USER, 
    process.env.PG_PASSWORD, 
    process.env.PG_HOST, 
    process.env.PG_DATABASE,
    process.env.PG_PORT)
const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig: devConfig
    // {
    //     user:'postgres',
    //     password:'superuser',
    //     host:'localhost',
    //     database:'guidance',
    //     port:5432
    // }
    )



module.exports = pool;