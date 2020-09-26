import React, {Fragment, useState} from 'react'
import {HashRouter as Router} from "react-router-dom"

import Header from "../Header"
import Sidebar from '../Sidebar/Sidebar'
import Panel from './Panel'

const ReportingLayout = ({auth, allConnections}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // console.log(auth)
    const openHandler = () => {
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }

    const sidebarCloseHandler = () => {
        setSidebarOpen(false)
    }

    let sidebar
    if(sidebarOpen){
        sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"}/>
    }

    return(
        <Fragment>
            <Router>
                <Header click={openHandler} cross={sidebarOpen} auth={auth}/>
                {sidebar}
                <Panel allConnections={ allConnections }/>
            </Router>
            
        </Fragment>
    )
}

export default ReportingLayout