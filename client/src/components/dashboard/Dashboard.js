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
    let defaultSchool
    switch(name) {
      case 'Sarah Dewson':
        defaultSchool= "Savannah"
        break;
      case "Maren Walker":
        defaultSchool= "John Gray"
        break;
      case "Daryl Pierre-Louis":
        defaultSchool= "Layman E. Scott"
        break;
      case "Rodeshia Richards-Thomas":
        defaultSchool= "Georgetown"
        break;
      case "Gina Argenzio-Gayle":
        defaultSchool= "Sir John A. Cumber"
        break;
      case "Monique Anderson-Coke":
        defaultSchool= "East End"
        break;
      case "Elysia Murray":
        defaultSchool= "Red Bay"
        break;
      case "Christopher Murray":
        defaultSchool="John Gray"
        break;
      case "Conway King":
        defaultSchool= "Theoline L. McCoy"
        break;
      case "Heather Ketterer":
        defaultSchool= "CIFEC"
        break;
      case "Meila Johnson":
        defaultSchool= "Prospect"
        break;
      case "Tanesha Richards":
        defaultSchool= "Clifton Hunter"
        break;
      case "Susan Lees":
        defaultSchool= "Clifton Hunter"
        break;
      case "Ian Godet":
        defaultSchool= "Clifton Hunter"
        break;
      case "Amy Hunt":
        defaultSchool= "Lighthouse"
}

    return(
        <Fragment>
            <div className="container">
                <div className='btn-group '>
                    <LogoutBtn setAuth = {setAuth}/>
                </div>
                    <h1 className="d-flex mt-3 pl-3" > {timeDay} {name}&nbsp;&nbsp;</h1>
                <InputConnection defaultSchool={defaultSchool} setConnectionsChange={setConnectionsChange}/>
                <ListConnections allConnections={ allConnections } setConnectionsChange={setConnectionsChange}/> 
            </div>     
        </Fragment>
    )
}
}

export default Dashboard;   