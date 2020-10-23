import React from "react";
import { Link } from "react-router-dom";
// import img from "./welcome1.jpg"
import img from "./heart.jpg"
// const img = require("./welcome1.jpg")
const Landing = () => {
  return (
      <div className = "container">  
      <div  className="jumbotron jumbotron-billboard mt-5 " >
        <h1 className="text-center font-familyA">Welcome to the School Counsellor's Communication Logs</h1>
        <img src={img} className="img-fluid rounded mx-auto d-block border border-dark mb-4" alt="" />
        <p className="text-center font-familyB mb-3" style={{margin:"0 10em 0 10em"}}>First, register by clicking the button below. Once you have registered, you can use the login button to use your communication log.</p>
        <div className="text-center">
          <Link to="/login" className="btn btn-primary btn-xl pr-4 pl-4" style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>
            Login
          </Link>
          <Link to="/register" className="btn btn-primary ml-5 btn-xl pr-4 pl-4" style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>
            Register
          </Link>
        </div>
      </div>

    </div>

  )}
          export default Landing;
   
   

