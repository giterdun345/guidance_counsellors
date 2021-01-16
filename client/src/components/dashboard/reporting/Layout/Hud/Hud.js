import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Cards from'./Cards'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import User from '../Users/User'


const Hud = (props) =>{
    const [retreivingData, setRetreivingData] = useState(true)
    const [studentsEngaged, setStudentsEngaged] = useState([])
    const [gender, setGender] = useState([])
    const [distinctStudents, setDistinctStudents] = useState([])
    const [amountOct, setAmountOct] = useState('')
    const [amountNov, setAmountNov] = useState('')
    const [amountDec, setAmountDec] = useState('')
    const [amountJan, setAmountJan] = useState('')
    const [amountFeb, setAmountFeb] = useState('')
    const [amountMar, setAmountMar] = useState('')
    // const [amountSep, setAmountSep] = useState('')
    // const [studentSessions, setStudentSessions] = useState([])
    // const [outsideAgencies, setOutsideAgencies] = useState([])
    // const [cpReferrals, setCPRefferrals] = useState([])
    // const [amountReferrals, setAmountReferrals] = useState([])
    // const [amountContinuations, setAmountContinuations] = useState([])
    // const [amountDischarges, setAmountDischarges] = useState([])
    // const [classroomPresentations, setClassroomPresentations] = useState([])
    // const [groupSessions, setGroupSession] = useState([])
    // const [checkins, setCheckins] = useState([])
    // const [crisisInterventions, setCrisisIntervention] = useState([])
    // const [homeVisits, setHomeVisits] = useState([])
    // const [parentContacts, setParentContacts] = useState([])
    // const [meetings, setMeetings] =useState([])
    // const [sbstCase, setSbstCase] = useState([])

    const today = moment()
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
    const SCHOOL_POPULATION = Object.values(schoolPop).reduce((a,b) => a+b, 0)





        useEffect(()=>{
            const aggData = async () => {
                if(retreivingData){
                    try {
                        const response = await fetch("/dashboard/", {
                            method:"GET", 
                            headers:{ token: localStorage.token }
                        })
                        const parseData = await response.json()
                        setStudentsEngaged(parseData.studentsEngaged)
                        setGender(parseData.gender[0])
                        setDistinctStudents(parseData.distinctStudents)
                        // setAmountSep(parseData.amountSep)
                        setAmountOct(parseData.amountOct)
                        setAmountNov(parseData.amountNov)
                        setAmountDec(parseData.amountDec)
                        setAmountJan(parseData.amountJan)
                        setAmountFeb(parseData.amountFeb)
                        setAmountMar(parseData.amountMar)
                        // setStudentSessions(parseData.studentSessions)
                        // setOutsideAgencies(parseData.outsideAgencies)
                        // setCPRefferrals(parseData.cpReferrals)
                        // setAmountReferrals(parseData.amountReferrals)
                    //    setAmountContinuations(parseData.amountContinuations)
                        // setAmountDischarges(parseData.amountDischarges)
                        // setClassroomPresentations(parseData.classroomPresentations)
                        // setGroupSession(parseData.groupSessions)
                        // setCheckins(parseData.checkins)
                        // setCrisisIntervention(parseData.crisisInterventions)
                        // setParentContacts(parseData.parentContacts)
                        // setHomeVisits(parseData.homeVisits)
                        // setMeetings(parseData.meetings)
                        // setSbstCase(parseData.sbstCase)
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

        const sumEngaged = (month) => {
            let engaged = 0
            for(var i =0; i < studentsEngaged.length; i++){
                if(moment(studentsEngaged[i].connection_date).month() === month){
                    engaged += parseInt(studentsEngaged[i].students, 10)
                }
            }
            return engaged
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
                <Cards title={`Engaged in ${today.format('MMMM')}`} content={`${Math.round((sumEngaged(today.month())/SCHOOL_POPULATION)*100)}%`}  />
                <Cards title={`Logs in ${today.format('MMMM')}`} content={monthCount} />
                <Cards title={"Total Students"} content={SCHOOL_POPULATION}  />
                <Cards title={"Gender Distribution"} content={gender.female_count} moreContent={true} additionalContent={gender.male_count}  />
            </div>
            <div className='row bg-dark'>
                <div className='col'>
                    <Chart1 allConnections={props.allConnections}/>
                </div>  
                <div className='col border border-danger gradientBG rounded'style={{ height:"30vw"}}>
                    <Chart2 />
                </div>
                 <div className='col'>
                    <Chart3 allConnections={props.allConnections} engaged = {studentsEngaged} schoolPop={schoolPop} totalPop={SCHOOL_POPULATION} />
                </div> 
            </div>
                  
            <div className='row border border-primary gradientBG2'style={{ width:"100vw", height:"110%" }}>
                        <div className="w-100"/>
                    <User name={'Sarah Dewson'} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.cliftonHunter}/>  
                    <User name={"Maren Walker"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.savannah}/>   
                    <User name={"Daryl Pierre-Louis"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.johnGray}/>   
                        <div className="w-100"/>
                    <User name={"Rodeshia Richards-Thomas"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse + schoolPop.earlyInterventions}/>  
                    <User name={"Gina Argenzio-Gayle"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.jacumber}/>   
                    <User name={"Monique Anderson-Coke"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                        <div className="w-100"/>
                    <User name={"Elysia Murray"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>  
                    <User name={"Christopher Murray"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                    <User name={"Conway King"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                        <div className="w-100"/>
                    <User name={"Heather Ketterer"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.cifec}/>  
                    <User name={"Meila Johnson"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                    <User name={"Tanesha Richards"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                        <div className="w-100"/>
                    <User name={"Susan Lees"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>  
                    <User name={"Ian Godet"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse}/>   
                    <User name={"Amy Hunt"} students={distinctStudents} allConnections={props.allConnections} population={schoolPop.lighthouse + schoolPop.earlyInterventions}/>   
            </div> 
        </div>
    )
}

export default Hud