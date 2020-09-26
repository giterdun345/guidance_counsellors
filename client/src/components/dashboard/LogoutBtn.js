import React from 'react'
import { toast } from 'react-toastify'


const LogoutBtn = ({setAuth}) => {
    
const logout= async e => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
    toast.success('Logged out successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        })
}
    return(
        <button className="btn btn-primary btn-signout"  onClick={e => logout(e)}>Logout</button>
    )
}

export default LogoutBtn