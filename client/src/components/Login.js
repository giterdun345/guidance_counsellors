import React, { Fragment, useState } from 'react'
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
                 });

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
                            });
            }

            
        } catch (err) {
            console.error(err.message)
        }
    }
    return(
        <Fragment>
            <div className = "container">
                <h1 className = 'text-center' style={{paddingBottom:"75px"}}>Login</h1>
                <FetchQuote setAuth={setAuth} auth={auth}/>
                    <form onSubmit = {onSubmitForm}>
                        <input type="email" name="email" placeholder = "email" className='form-control my-3' value={email} onChange={e => onChange(e)} />
                        <input type="password" name="password" placeholder = "password" className='form-control my-3' value={password} onChange={e => onChange(e)} />
                        <button className = 'btn btn-success btn-block'>Log in</button>
                    </form>
                <Link to="/register" >If you cannot login please Register first at this link.</Link>
                <div style={{marginBottom:"250px"}} />
            </div>
            
        </Fragment>
    )
    
}

export default Login;