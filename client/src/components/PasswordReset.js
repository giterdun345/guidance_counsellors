import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

const PasswordReset = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })

    // const [showButton, setShowButton] = useState(false)

    const { email, password} = inputs

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const body = {email, password}
            const response = await fetch("/auth/passwordreset_0057375432", {method:'POST', headers: {"Content-Type" : "application/json"}, body: JSON.stringify(body)})
            const parseRes = await response.json()
            console.log(parseRes)

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Password Reset Successfully",
                 {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
              } else {
                setAuth(false);
                toast.error(parseRes, 
                    {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    })
              }

        } catch (err) {
            console.error(err.message)
        }
    }
    return(
        <Fragment className="container">
            <h1 className='text-center my-5'>Reset your password</h1>
                <div className="d-flex h-100">
                    <div className="m-auto w-50">
                        <div class="card text-center shadow-lg">
                            <div class="card-body">
                                <form onSubmit = {onSubmitForm}>
                                    <input type='email' name='email' placeholder='email' className='form-control my-3 form-control-lg' value={email} onChange={e => onChange(e)} />
                                        {/* <small className="form-text text-muted" style={{marginTop:"-18px"}}>
                                        </small>   */}
                                    <input type='password' name='password' placeholder='new password' className='form-control my-3 form-control-lg' value={password} onChange={e => onChange(e)} /> 
                                        <small className="form-text text-muted" style={{marginTop:"-18px"}}>
                                            Your password can be any length consisting of numbers and letters. Just don't forget!
                                        </small>                                   
                                    {/* <input type='password' name='password2' placeholder='new password again' className='form-control my-3 form-control-lg' value={password2} onChange={e => onChange(e)} />
                                        <small className="form-text text-muted mb-5" style={{marginTop:"-18px"}}>
                                            Your password must match the above; stop forgetting 😋!
                                        </small>  */}
                                        <button className='btn btn-warning btn-block' style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>Reset Password</button>
                                    {/* {showButton ? <button className='btn btn-warning btn-block' style={{fontSize:"30px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}}>Reset Password</button>: <p>Passwords do not match</p>} */}
                                </form>                         
                            </div>
                            <div class="card-footer text-muted">
                                <Link to="/login">If you remember your password please log in here.</Link>
                            </div>
                        </div>
                    </div>
                </div>                    
            <div style={{marginBottom:"250px"}} />
        </Fragment>
    )
}

export default PasswordReset;