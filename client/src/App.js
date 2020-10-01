import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

// components 
import Root from './components/Root'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'

//toastify 
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure()  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  if (process.env.NODE_ENV === 'production') {
    console.log = function () { };
  }

  async function isAuth(){
    try {
      const response = await fetch("/auth/is-verified", {
        method:"GET", 
        headers:{token: localStorage.getItem("token") }
      })
      var parseRes = await response.json()

      if(parseRes === true || parseRes === undefined){
          setIsAuthenticated(true)
      }else{
          setIsAuthenticated(false)
      }
      // parseRes === true ? setIsAuthenticated(true): setIsAuthenticated(false)

    } catch (err) {
        console.error(`(App Catch)${err.message}`)
    }
  }

  useEffect(() => {
    isAuth()
  })

  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props => !isAuthenticated ? <Root {...props} /> : <Redirect to='/dashboard'/>} />
            <Route path="/landing" render={props => !isAuthenticated ? <Landing {...props} /> : <Redirect to='/dashboard'/>} />
            <Route path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth ={setAuth} />  : <Redirect to='/login'/>} />
            <Route path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth ={setAuth} auth={isAuthenticated}/> : <Redirect to='/dashboard'/>} />
            <Route path="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth ={setAuth} /> : <Redirect to='/login'/>} />
          </Switch>
        </div>
      </Router>
    </Fragment>

  );
}

export default App;
