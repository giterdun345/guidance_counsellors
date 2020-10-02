import React from 'react'
import ReactEcharts from 'echarts-for-react'
import {Link} from "react-router-dom"
// import echarts from 'echarts/lib/echarts'
import moment from 'moment'


const User = (props)=>{
    const thisMonth = props.month

    function calculateWork(userName, month){
        // month must be (month - 1) due to indexing with moment/
        let total = 0
        for(let index in props.allConnections){
            const conditionsArray = [
                // props.allConnections[index].user_name === userName, 
                // moment(props.allConnections[index].mon).month() === month,
                props.allConnections[index].contact_method === 'session',
                props.allConnections[index].contact_method === 'classroom presentation',
                props.allConnections[index].contact_method === 'group session',
                props.allConnections[index].contact_method === 'check in',
                props.allConnections[index].contact_method === 'crisis intervention',
                props.allConnections[index].contact_method === 'home visit',
                props.allConnections[index].contact_type === 'parent',
                props.allConnections[index].contact_method === 'meeting',
                props.allConnections[index].cp_referral === 'Yes'
            ]

            if((props.allConnections[index].user_name === userName) && (moment(props.allConnections[index].mon).month() === month)){
                if (conditionsArray.includes(true)) {
                    total += 1
                 }
            }
        }
        return total
    }
    
    const engagement = (userName, month) => {
        let total = 0
        for(let index in props.students){
            if((props.students[index].user_name === userName) && (moment(props.students[index].mon).month() === month)){
                total += parseInt(props.students[index].students, 10)
            }
        }
        return total
    }

        var className
        var hudColor
    if(props.percentage < 25){
        className = 'light'
        hudColor="rgba(31, 147, 255, 1)"
    }
    if(props.percentage >= 25 && props.percentage < 50){
        className = 'danger'
        hudColor="rgba(255, 0, 0, 1)"

    }
    if(props.percentage >= 50 && props.percentage < 75){
        className = 'warning'
        hudColor="rgba(244, 255, 31, 1)"

    }
    if(props.percentage >= 75 && props.percentage < 100){
        className = "success"
        hudColor="rgba(98, 255, 31, 1)"

    }
    // var formatUtil = echarts.format;
    const option = {
        series: [{
            type: 'treemap',
            // roam: false,
            // nodeClick: false,
            breadcrumb: { show: false },
            levels:[
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'},
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'},
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'}],
            data: [{
                name: "Output \n" + calculateWork(props.name, thisMonth),          // First tree
                value: 15,
                label:{
                    fontSize:20
                },
                
            }, {
                name: "Engagement \n" + `${props.percentage}%`,            // Second tree
                value: 20,
                label:{
                    fontSize:20
                },
                itemStyle:{
                    color:hudColor
                }
                        }]
    }]
    }

    return(
       
            <div className= "col card text-center"
                            style={{
                                marginTop:"50px",
                                marginBottom:"50px",
                                marginRight:"10px",
                                boxShadow:"2px 2px 4px", 
                                height:"300px", 
                                width:"300px",
                                textOverflow:'elipsis',
                                }}>
            <Link to={"/hud/" + props.name}>  
                    <h4 className={className}>{props.name}</h4>
                    <h3>{engagement(props.name, thisMonth)}</h3>
            </Link>
            <ReactEcharts 
            option={option} 
            style={{height: '100%', width: '100%'}}  
            className="align-text-bottom" />
            </div>
        
    
    )
    
}

export default User