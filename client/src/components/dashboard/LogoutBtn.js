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
            <button className="btn btn-primary btn-signout" style={{fontSize:"15px", color: "white", border: "2px solid rgba(103, 192, 103, 0.75)", borderRadius:"50px", transition: "all 0.3s ease 0s"}} onClick={e => logout(e)}>Logout</button>
    )
}

export default LogoutBtn