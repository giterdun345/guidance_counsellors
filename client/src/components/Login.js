import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import FetchQuote from './quoteFetcher/FetchQuote'

const Login = ({setAuth, auth}) => {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })

    const {email, password} = inputs

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {email, password}
            const response = await fetch('/auth/login', {method: 'POST', headers:{'Content-Type' : 'application/json'}, body: JSON.stringify(body)})
            const parseRes = await response.json()

            if(parseRes.token){
                localStorage.setItem("token", parseRes.token)
                setAuth(true)
                toast.success('Successfully Logged In', 
                    {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
            }else{
                setAuth(false)
                toast.error(parseRes, 
                            {
                                position: "top-center",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            })
            }            
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
            <div className = "container">
                <div className = 'text-center' style={{paddingBottom:"75px"}} />
                    <FetchQuote setAuth={setAuth} auth={auth}/>
                    <div className="d-flex h-100">
                        <div className="m-auto w-50">
                            <div className="card text-center shadow-lg">
                                <div className="card-body">
                                    <form onSubmit = {onSubmitForm}>
                                        <input type="email" name="email" placeholder = "email" className='form-control my-3 form-control-lg' value={email} onChange={e => onChange(e)} />
                                        <input type="password" name="password" placeholder = "password" className='form-control my-3 form-control-lg' value={password} onChange={e => onChange(e)} />
                                        <button className = 'btn btn-success btn-block' style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>Login</button>
                                    </form>                         
                                </div>
                                <div className="card-footer text-muted">
                                <Link to="/register">If you cannot login please Register first at this link.</Link>
                                </div>
                            </div>
                        </div>
                    </div>                    
                <div style={{marginBottom:"250px"}} />
            </div>
    )
    
}

export default Login;