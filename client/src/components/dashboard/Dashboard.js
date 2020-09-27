import React, { Fragment, useState, useEffect } from 'react'
//components
import InputConnection from './connectionlist/InputConnection'
import ListConnections from './connectionlist/ListConnections'
import LogoutBtn from './LogoutBtn'
import ReportingLayout from './reporting/Layout/ReportingLayout'

const Dashboard = ({ setAuth }) => {
const [name, setName] = useState("")
const [allConnections, setAllConnections] = useState([])
const [connectionsChange, setConnectionsChange] = useState(false)
const auth = setAuth

const getName = async () => {
    try {
        
        const response = await fetch("/dashboard/", {
            method:"GET", 
            headers:{ token: localStorage.token }
        })

        const parseData = await response.json()
        // console.log(parseData)
        
        if (parseData.admin === 'lead') {
            setName("Lead School Counselor")
            setAllConnections(parseData.results)
        }else{
            setName(parseData[0].user_name)
            setAllConnections(parseData)
        }
    } catch (error) {
        
    }
}

useEffect(() => {
    getName()
    setConnectionsChange(false)
}, [connectionsChange])

if(name === "Lead School Counselor" ){
    return(
        <div>
            <ReportingLayout auth={auth} allConnections={ allConnections } />    
        </div>
       )
}else{
    return(
        <Fragment>
            <div className="container">
                <div className='btn-group '>
                    <LogoutBtn setAuth = {setAuth}/>
                </div>
                    <h1 className="d-flex rm-3" > Welcome {name},&nbsp;&nbsp;</h1>
                <InputConnection setConnectionsChange={setConnectionsChange}/>
                <ListConnections allConnections={ allConnections } setConnectionsChange={setConnectionsChange}/> 
            </div>     
        </Fragment>
    )
}
}

export default Dashboard;   