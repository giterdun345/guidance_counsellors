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
const [timeDay, setTimeDay] = useState("Good Morning,")
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

const greeting = () => {
    let date = new Date()
    const hours = date.getHours()
    if(hours < 12){
        setTimeDay("Good Morning, ")
    }else if (hours >= 12 && hours < 17){
        setTimeDay("Good Afternoon, ")
    }else{
        setTimeDay("Good Evening, ")
    }
}

useEffect(() => {
    getName()
    greeting()
    setConnectionsChange(false)
}, [connectionsChange, timeDay])

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
                    <h1 className="d-flex mt-3 pl-3" > {timeDay} {name}&nbsp;&nbsp;</h1>
                <InputConnection setConnectionsChange={setConnectionsChange}/>
                <ListConnections allConnections={ allConnections } setConnectionsChange={setConnectionsChange}/> 
            </div>     
        </Fragment>
    )
}
}

export default Dashboard;   