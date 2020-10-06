import React   from 'react'
import {Switch, Route} from "react-router-dom"
import Hud from './Hud/Hud' 
import ReportConnections from './ReportConnections'
import Counsellor from './Users/Counsellor'

function Panel ({allConnections}) {

    return (
        <div>
            <Switch >  
                <Route  exact path="/FullTable">
                    <h1 className='text-center pt-4'>All Communication Logs</h1>
                    <ReportConnections allConnections={ allConnections } />
                </Route> 
                <Route exact path="/">
                    <Hud allConnections={ allConnections }/>
                </Route>
                <Route exact path= "/hud/Sarah Dewson">
                    <Counsellor allConnections={ allConnections } name={"Sarah Dewson"}/>
                </Route> 
                <Route exact path= "/hud/Maren Walker">
                    <Counsellor allConnections={ allConnections } name={"Maren Walker"}/>
                </Route> 
                <Route exact path= "/hud/Daryl Pierre-Louis">
                    <Counsellor allConnections={ allConnections } name={"Daryl Pierre-Louis"}/>
                </Route> 
                <Route exact path= "/hud/Rodeshia Richards-Thomas">
                    <Counsellor allConnections={ allConnections } name={"Rodeshia Richards-Thomas"}/>
                </Route> 
                <Route exact path= "/hud/Gina Argenzio-Gayle">
                    <Counsellor allConnections={ allConnections } name={"Gina Argenzio-Gayle"}/>
                </Route> 
                <Route exact path= "/hud/Monique Anderson-Coke">
                    <Counsellor allConnections={ allConnections } name={"Monique Anderson-Coke"}/>
                </Route> 
                <Route exact path= "/hud/Elysia Murray">
                    <Counsellor allConnections={ allConnections } name={"Elysia Murray"}/>
                </Route> 
                <Route exact path= "/hud/Christopher Murray">
                    <Counsellor allConnections={ allConnections } name={"Christopher Murray"}/>
                </Route> 
                <Route exact path= "/hud/Conway King">
                    <Counsellor allConnections={ allConnections } name={"Conway King"}/>
                </Route> 
                <Route exact path= "/hud/Heather Ketterer">
                    <Counsellor allConnections={ allConnections } name={"Heather Ketterer"}/>
                </Route> 
                <Route exact path= "/hud/Meila Johnson">
                    <Counsellor allConnections={ allConnections } name={"Meila Johnson"}/>
                </Route> 
                <Route exact path= "/hud/Tanesha Richards">
                    <Counsellor allConnections={ allConnections } name={"Tanesha Richards"}/>
                </Route> 
                <Route exact path= "/hud/Susan Lees">
                    <Counsellor allConnections={ allConnections } name={"Susan Lees"}/>
                </Route> 
                <Route exact path= "/hud/Ian Godet">
                    <Counsellor allConnections={ allConnections } name={"Ian Godet"}/>
                </Route> 
                <Route exact path= "/hud/Amy Hunt">
                    <Counsellor allConnections={ allConnections } name={"Amy Hunt"}/>
                </Route> 
            </Switch>
        </div>
    )
}

export default Panel