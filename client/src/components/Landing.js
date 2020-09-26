import React from "react";
import { Link } from "react-router-dom";
import img from "./welcome1.jpg"
// const img = require("./welcome1.jpg")
const Landing = () => {
  return (
      <div className = "container">  
      <div  className="jumbotron jumbotron-billboard mt-5 " >
        <h1 className="text-center font-familyA">Welcome to School Counsellor's Connections</h1>
        <img src={img} className="img-fluid rounded mx-auto d-block" alt="" />
        <p className="text-center font-familyB">First, register by clicking the button. Once you have registered, you can use the login button to see your contact information.</p>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary ml-3">
          Register
        </Link>
      </div>

    </div>

  )}
          export default Landing;
   
   

