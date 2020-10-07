import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'
import BigChart from './BigChart'

const Counsellor = (props) => {
    let thisMonth = moment().month()
    let textMonth = moment().format('MMMM')
  function workBreakdown(userName, month){
    // month must be (month - 1) due to indexing with moment/
        let breakdown = {
                            totalSession:0,
                            totalPresentation:0,
                            totalGroups:0,
                            totalChecks:0,
                            totalInterventions:0,
                            totalVisits:0,
                            totalParents:0,
                            totalCPRef:0,
                            totalMeets:0, 
                            totalSBT:0, 
                            totalOutside:0
                        } 

        for(let index in props.allConnections){
            console.log("MMT", moment(props.allConnections[index].connection_date, 'YYYY-MM-DD').format('MMMM'), "given", month)

                if((props.allConnections[index].user_name === userName) && (moment(props.allConnections[index].connection_date, 'YYYY-MM-DD').format('MMMM') === month)){
                    if (props.allConnections[index].contact_method === 'session'){breakdown.totalSession = breakdown.totalSession+1}
                    if (props.allConnections[index].contact_method === 'classroom presentation'){breakdown.totalPresentation = breakdown.totalPresentation+1}
                    if (props.allConnections[index].contact_method === 'group session'){breakdown.totalGroups= breakdown.totalGroups+1}
                    if (props.allConnections[index].contact_method === 'check in'){breakdown.totalChecks=breakdown.totalChecks+1}
                    if (props.allConnections[index].contact_method === 'crisis intervention'){breakdown.totalInterventions=breakdown.totalInterventions+1}
                    if (props.allConnections[index].contact_method === 'home visit'){breakdown.totalVisits=breakdown.totalVisits+1}
                    if (props.allConnections[index].contact_method === 'sbst, mdt, case conference'){breakdown.totalSBT=breakdown.totalSBT+1}
                    if (props.allConnections[index].contact_method === 'outside agency meeting'){breakdown.totalOutside=breakdown.totalOutside+1}
                    if (props.allConnections[index].contact_method === 'other meeting'){breakdown.totalMeets=breakdown.totalMeets+1}
                    if (props.allConnections[index].contact_type === 'parent'){breakdown.totalParents=breakdown.totalParents+1}
                    if (props.allConnections[index].cp_referral === 'Yes'){breakdown.totalCPRef=breakdown.totalCPRef+1}
            }
        }
        return breakdown
    }
    const sumAll = (obj) => {
            let sum = 0;
            for (let key in obj) {
                sum += parseInt(obj[key], 10)
            } 
        return sum
    }

    const components = workBreakdown(props.name, textMonth)
    const all = sumAll(workBreakdown(props.name, textMonth))
    let first = (all - components.totalParents)
    let second = (first-components.totalSession)
    let third = (second-components.totalGroups)
    let fourth = (third-components.totalMeets) 
    let fifth = (fourth-components.totalPresentation) 
    let sixth = (fifth-components.totalCPRef)
    let seventh = (sixth-components.totalChecks)
    let eighth = (seventh-components.totalVisits)
    let ninth = (eighth -components.totalSBT)
    let tenth = (ninth - components.totalOutside)

const option = {
    title: {
      text: `${textMonth} Output`,
      subtext: 'breakdown of components',
      textAlign:"left"
        },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
        type: 'shadow'        
      },
    formatter: function (params) {
        var tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: {show: false},
      data: [
        'Output',
        'Parents',
        'Sessions', 
        'Group Sessions', 
        'Other Meetings', 
        'Classroom Presentations', 
        'CP Referrals', 
        'Check-ins', 
        'Home Visits', 
        'SBST, MDT, Case Conf',
        'Outside Meetings',
        'Crisis Interventions'
        ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
        {
            name: 'Component',
            type: 'bar',
            stack: 'total',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                0, 
                first,
                second, 
                third, 
                fourth, 
                fifth,
                sixth,
                seventh, 
                eighth, 
                ninth, 
                tenth,
                0
                  ]
        },
        {
            name: 'Amount',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'inside'
            },
            data: [
                all,
                components.totalParents, 
                components.totalSession,
                components.totalGroups, 
                components.totalMeets,
                components.totalPresentation,
                components.totalCPRef, 
                components.totalChecks,
                components.totalVisits,
                components.totalSBT, 
                components.totalOutside,
                components.totalInterventions
            ]
        }
    ]
};


// ??????????????????????????????????????????????????  BIG CHART ??????????????????????????????????????????????????????
const [retreivingData, setRetreivingData] = useState(true)
// const [distinctStudents, setDistinctStudents] = useState([])
const [studentSessions, setStudentSessions] = useState([])
const [outsideAgencies, setOutsideAgencies] = useState([])
const [cpReferrals, setCPRefferrals] = useState([])
const [amountReferrals, setAmountReferrals] = useState([])
const [amountContinuations, setAmountContinuations] = useState([])
const [amountDischarges, setAmountDischarges] = useState([])
const [classroomPresentations, setClassroomPresentations] = useState([])
const [groupSessions, setGroupSession] = useState([])
const [checkins, setCheckins] = useState([])
const [crisisInterventions, setCrisisIntervention] = useState([])
const [homeVisits, setHomeVisits] = useState([])
const [parentContacts, setParentContacts] = useState([])
const [meetings, setMeetings] =useState([])
const [sbstCase, setSbstCase] = useState([])

const schoolPop = {
    'lighthouse' : 200,
    'cornerstones' : 4,
    'earlyInterventions' : 10,
    'littleStars' : 5,
    'steppingStones' : 5,
    'tlMccoy' : 276,
    'jacumber' : 504,
    'emmoyle' : 100,
    'georgetown': 279, 
    'eastEnd' : 79,
    'prospect': 357,
    'redBay' : 439,
    'savannah' : 438,
    'johnGray' : 1102,
    'cliftonHunter' : 792,
    'cifec' : 215,
    'creek' : 76,
    'westEnd' : 63,
    'leScott' : 153,
} 

    useEffect(()=>{
        const aggData = async () => {
            if(retreivingData){
                try {
                    const response = await fetch("/dashboard/", {
                        method:"GET", 
                        headers:{ token: localStorage.token }
                    })
                    const parseData = await response.json()
                    // setDistinctStudents(parseData.distinctStudents)
                    setStudentSessions(parseData.studentSessions)
                    setOutsideAgencies(parseData.outsideAgencies)
                    setCPRefferrals(parseData.cpReferrals)
                    setAmountReferrals(parseData.amountReferrals)
                    setAmountContinuations(parseData.amountContinuations)
                    setAmountDischarges(parseData.amountDischarges)
                    setClassroomPresentations(parseData.classroomPresentations)
                    setGroupSession(parseData.groupSessions)
                    setCheckins(parseData.checkins)
                    setCrisisIntervention(parseData.crisisInterventions)
                    setParentContacts(parseData.parentContacts)
                    setHomeVisits(parseData.homeVisits)
                    setMeetings(parseData.meetings)
                    setSbstCase(parseData.sbstCase)
                    // console.log(parseData)
                } catch (error){
                    console.log(error.message)
                    }
            }
        }
        aggData()
        setRetreivingData(false)
    }, [retreivingData])
   
    const sumMonth = (obj) => {
        let sum = 0;
        for (let key in obj) {
          sum += parseInt(obj[key]["monthcount"], 10)
        } 
        return sum
    }

    // const sumEngaged = (month) => {
    //     let engaged = 0
    //     for(var i =0; i < studentsEngaged.length; i++){
    //         if(moment(studentsEngaged[i].connection_date).month() === month){
    //             engaged += parseInt(studentsEngaged[i].students, 10)
    //         }
    //     }
    //     return engaged
    // }

    return(
        <div>
            <h1 className="text-center mt-3" style={{textShadow: "2px 2px #eff5f5"}}>{props.name}</h1>
            <div>
                <ReactEcharts 
                    option={option} 
                    style={{height: '500px', width: '100%'}}  
                    className="align-text-bottom"     
                />
            </div>
            
            <div style={{background:"rgb(137,155,156)",
                         background:"radial-gradient(circle, rgba(137,155,156,1) 0%, rgba(94,94,103,0.835171568627451) 28%, rgba(242,242,242,1) 100%)"}} >
                <BigChart 
                        allConnections={props.allConnections}
                        name = {props.name}
                        thisMonth = {thisMonth}
                        sessions ={studentSessions}
                        agencies={outsideAgencies}
                        referrals={amountReferrals}
                        continuations={amountContinuations}
                        discharges={amountDischarges}
                        presentations={classroomPresentations}
                        groups={groupSessions}
                        checks={checkins}
                        interventions={crisisInterventions}
                        visits={homeVisits}
                        parent={parentContacts}
                        meets={meetings}
                        sbst={sbstCase}
                        cpref = {cpReferrals}
                    />
            </div>
        </div>
        
    )
}

export default Counsellor