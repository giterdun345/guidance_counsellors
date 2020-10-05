import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Cards from'./Cards'
import BigChart from './BigChart'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import User from './Users/User'


const Hud = (props) =>{
    const [retreivingData, setRetreivingData] = useState(true)
    const [studentsEngaged, setStudentsEngaged] = useState('')
    const [gender, setGender] = useState([])
    const [distinctStudents, setDistinctStudents] = useState([])
    const [amountSep, setAmountSep] = useState('')
    const [amountOct, setAmountOct] = useState('')
    const [amountNov, setAmountNov] = useState('')
    const [amountDec, setAmountDec] = useState('')
    const [studentSessions, setStudentSessions] = useState([])
    const [outsideAgencies, setOutsideAgencies] = useState([])
    const [cpReferrals, setCPRefferrals] = useState([])
    const [amountReferrals, setAmountReferrals] = useState([])
    const [amountDischarges, setAmountDischarges] = useState([])
    const [classroomPresentations, setClassroomPresentations] = useState([])
    const [groupSessions, setGroupSession] = useState([])
    const [checkins, setCheckins] = useState([])
    const [crisisInterventions, setCrisisIntervention] = useState([])
    const [homeVisits, setHomeVisits] = useState([])
    const [parentContacts, setParentContacts] = useState([])
    const [meetings, setMeetings] =useState([])
    const [sbstCase, setSbstCase] = useState([])

    const today = moment()
        
        useEffect(()=>{
            const aggData = async () => {
                if(retreivingData){
                    try {
                        const response = await fetch("/dashboard/", {
                            method:"GET", 
                            headers:{ token: localStorage.token }
                        })
                
                        const parseData = await response.json()
                        // console.log(parseData)
                        setStudentsEngaged(parseData.studentsEngaged[today.month() - 8].students)
                        setGender(parseData.gender[0])
                        setDistinctStudents(parseData.distinctStudents)
                        setAmountSep(parseData.amountSep)
                        setAmountOct(parseData.amountOct)
                        setAmountNov(parseData.amountNov)
                        setAmountDec(parseData.amountDec)
                        setStudentSessions(parseData.studentSessions)
                        setOutsideAgencies(parseData.outsideAgencies)
                        setCPRefferrals(parseData.cpReferrals)
                        setAmountReferrals(parseData.amountReferrals)
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
        }, [retreivingData, today])
       
        const sumMonth = (obj) => {
            let sum = 0;
            for (let key in obj) {
              sum += parseInt(obj[key]["monthcount"], 10)
            } 
            return sum
          }

        let monthCount
        if (today.format('MMMM') === "October"){
            monthCount = sumMonth(amountOct)
        }else if (today.format('MMMM') === "November"){
            monthCount = sumMonth(amountNov)
        }else if(today.format('MMMM') === "December"){
            monthCount = sumMonth(amountDec)
        }
    
    return(
        <div>
            <div className='row justify-content-around ml-5'>
                <Cards title={`Engaged in ${today.format('MMMM')}`} content={`${Math.round((studentsEngaged/30)*100)}%`}  />
                <Cards title={`Logs in ${today.format('MMMM')}`} content={monthCount} />
                <Cards title={"Total Logs"} content={props.allConnections.length}  />
                <Cards title={"Gender Distribution"} content={gender.female_count} moreContent={true} additionalContent={gender.male_count}  />
            </div>

             <div className='row border border-primary gradientBG text-white'style={{width:"100vw", height:"600px"}}>
               <BigChart    amountSep={amountSep}
                            amountOct={amountOct}
                            amountNov={amountNov}
                            amountDec={amountDec}
                            allConnections={props.allConnections}
                            sessions={studentSessions}
                            agencies={outsideAgencies}
                            cpref={cpReferrals}
                            referrals={amountReferrals}
                            discharges={amountDischarges}
                            presentations={classroomPresentations}
                            groups={groupSessions}
                            checks={checkins}
                            interventions={crisisInterventions}
                            visits={homeVisits}
                            parent={parentContacts}
                            meets={meetings}
                            sbst={sbstCase}
                            />
             </div> 

            <div className='row bg-dark'>
                <div className='col'>
                    <Chart1 
                        sessions={studentSessions}
                        agencies={outsideAgencies}
                        cpref={cpReferrals}
                        referrals={amountReferrals}
                        discharges={amountDischarges}
                        presentations={classroomPresentations}
                        groups={groupSessions}
                        checks={checkins}
                        interventions={crisisInterventions}
                        visits={homeVisits}
                        parent={parentContacts}
                        meeting={meetings}
                    />
                </div>  
                <div className='col border border-danger gradientBG rounded'style={{ height:"30vw"}}>
                    <Chart2 />
                </div>
                 <div className='col'>
                    <Chart3 all={props.allConnections}/>
                </div> 
            </div>
                  
            <div className='row border border-primary gradientBG2'style={{ width:"100vw", height:"110%" }}>
                        <div className="w-100"/>
                    <User name={'Sarah Dewson'} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"75"}/>  
                    <User name={"Maren Walker"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"11"}/>   
                    <User name={"Daryl Pierre-Louis"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"13"}/>   
                        <div className="w-100"/>
                    <User name={"Rodeshia Richards-Thomas"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"14"}/>  
                    <User name={"Gina Argenzio"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"64"}/>   
                    <User name={"Monique Anderson-Coke"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"22"}/>   
                        <div className="w-100"/>
                    <User name={"Elysia Murray"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"47"}/>  
                    <User name={"Christopher Murray"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"48"}/>   
                    <User name={"Conway King"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"23"}/>   
                        <div className="w-100"/>
                    <User name={"Heather Ketterer"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"36"}/>  
                    <User name={"Meila Johnson"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"57"}/>   
                    <User name={"Tanesha Richards"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"99"}/>   
                        <div className="w-100"/>
                    <User name={"Susan Lees"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"78"}/>  
                    <User name={"Ian Godet"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"84"}/>   
                    <User name={"Amy Hunt"} month={today.month()} students={distinctStudents} allConnections={props.allConnections} percentage={"71"}/>   
            </div> 
        </div>
    )
}

export default Hud