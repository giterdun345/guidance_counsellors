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
    // connectionString:"postgres://srbkpvrnhehwwz:cb437cb434cceec1ef7ecd4085591fec421504f65d3c39166dbb5bebd375d2dd@ec2-54-146-4-66.compute-1.amazonaws.com:5432/d3m3rjc74u9fs"
}

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