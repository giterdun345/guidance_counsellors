import React from 'react'
// import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

const Chart1 = (props) => {
    const tallyServices = (service, column, month) => {
        let total = 0
        for(let index in service){
            if(moment(service[index].mon).month() === month){
                total += parseInt(service[index][column],  10)
            }
        }
        return total
    }

    // console.log(tallyServices(props.visits, "visits", moment().month()))

   let option = {
        dataset: {
            source: [
                ['Amount', 'Service'],
                [89, 'Check-in'],
                [57, 'Classroom Presentation'],
                [74, 'Session'],
                [50, 'Group Session'],
                [89, 'Crisis Intervention'],
                [68, 'Home Visit'],
                [19, 'Meeting'],
                [10, 'Parent Contact'],
                [32, 'CP Referral'],
                [32, 'Referral'],
                [32, 'Discharge']
            ]
            // source:[
            //     ['Amount', 'Service'],
            //     // [tallyServices(props.checks, "checks", moment().month()), 'Check-in'],
            //     // [tallyServices(props.presentations, "presentations", moment().month()), 'Classroom Presentation'],
            //     // [tallyServices(props.sessions, "sessions", moment().month()), 'Session'],
            //     // [tallyServices(props.groups, "groups", moment().month()), 'Group Session'],
            //     // [tallyServices(props.interventions, "interventions", moment().month()), 'Crisis Intervention'],
            //     // [tallyServices(props.agencies, "agencies", moment().month()), 'Other Methods'],
            //     // [tallyServices(props.visits, "visits", moment().month()), 'Home Visit'],
            //     // [tallyServices(props.meeting, "meets", moment().month()), 'Meeting'],
            //     [tallyServices(props.parent, "parents", moment().month()), 'Parent Contact'],
            //     [tallyServices(props.cpref, "cps", moment().month()), 'CP Referral'],
            //     [tallyServices(props.referrals, "referrals", moment().month()), 'Referral'],
            //     [tallyServices(props.discharges, "discharges", moment().month()), 'Discharge']
            // ]
        },
        grid: {containLabel: true},
        xAxis: {name: 'amt'},
        yAxis: {type: 'category'},
        textStyle:{
            // fontStyle:
            color:"white"
        },
        // visualMap: {
        //     orient: 'horizontal',
        //     left: 'center',
        //     min: 10,
        //     max: 100,
        //     text: ['High Score', 'Low Score'],
        //     // Map the score column to color
        //     dimension: 0,
        //     inRange: {
        //         color: ['#D7DA8B', '#E15457']
        //     }
        // },
        title:{
            text: "This Month's Tally:",
            textStyle:{
                color:"white",
                x: "center"
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'Amount',
                    // Map the "product" column to Y axis
                    y: 'Service'
                }
            }
        ]
    };
    
    return(
            <ReactEcharts 
            option={option} 
            style={{height: '100%', width: '100%'}}  
            className='center' />
    )
}


export default Chart1



