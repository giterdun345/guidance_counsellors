import React, { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify'

const InputTodo = ({ defaultSchool, setConnectionsChange }) => {

  const today = new Date()
  var formattedDate = today.toISOString().substr(0,10);

  const [contact_type, setContactType] = useState("");
  const [contact_method, setContactMethod] = useState("");
  const [provision, setProvision] = useState("");
  const [connection_date, setDate] = useState(formattedDate);
  const [student_id, setStudentID] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");
  const [yearGroup, setYearGroup] = useState("");
  const [referral_discharge, setReferralDischarge] = useState("");
  const [cp_referral, setCPReferral] = useState("");
  const [school, setSchool] = useState(defaultSchool);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { 
                      contact_type, 
                      contact_method, 
                      provision,
                      connection_date,
                      student_id,
                      purpose,
                      gender,
                      yearGroup,
                      school, 
                      referral_discharge, 
                      cp_referral
                    };
      const response = await fetch("/dashboard/connections", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      console.count(parseResponse);

      setConnectionsChange(true);
      setContactType("")
      setContactMethod("")
      setProvision("")
      setDate(formattedDate)
      setStudentID("")
      setPurpose("")
      setGender("")
      setYearGroup("")
      setSchool(defaultSchool)
      setReferralDischarge("")
      setCPReferral("")
    
      toast.success('Contact has been added', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true, 
        draggable: true,
        });

    } catch (error) {
      console.error(error.message);
    }
  };
  
  const hookComponent=()=>{
    console.log('componentWillMount')
    return setSchool(defaultSchool)
}

if(school !== defaultSchool){
  setSchool(defaultSchool)
}

  console.log(school)
  return (
    <Fragment>
      <h1 className="text-center my-5 input-title">Communication Log</h1>
      <form className="mt-5" onSubmit={onSubmitForm}>
        {/* DATE  */}
        <input type="date"  name="connection_date" placeholder="Date of Contact" className="form-control" value={connection_date} onChange={e => setDate(e.target.value)}/>
        {/* SCHOOL  */}
        <select  type="text" name="school" placeholder="School" className="form-control mt-3" defaultValue={defaultSchool} value={defaultSchool} onChange={e => setSchool(e.target.value)}>
            <option value="NADA" disabled>Choose your school</option>
          <optgroup label= "Grand Cayman SEN">
              <option value="Lighthouse">Lighthouse</option>
              <option value= "Cornerstones">Cornerstones</option>
              <option value= "Early Intervention">Early Intervention</option>
              <option value= "Little Stars">Little Stars</option>
              <option value= "Stepping Stones">Stepping Stones</option>
          </optgroup>
          <optgroup label="Grand Cayman Primary">
            <option value="Theoline L. McCoy">Theoline L. McCoy</option>
            <option value="Sir John A. Cumber">Sir John A. Cumber </option>
            <option value="Edna M. Moyle">Edna M. Moyle</option>
            <option value="Georgetown">Georgetown</option>
            <option value="East End">East End</option>
            <option value="Prospect">Prospect </option>
            <option value="Red Bay">Red Bay</option>
            <option value="Savannah">Savannah</option>
          </optgroup>
          <optgroup label="Grand Cayman Secondary">
            <option value="John Gray">John Gray</option>
            <option value="Clifton Hunter">Clifton Hunter</option>
            <option value="CIFEC">CIFEC</option>
          </optgroup>
          <optgroup label="Cayman Brac Primary">
            <option value="Creek &amp; Spot">Creek &amp; Spot</option>
            <option value="West End">West End</option>
          </optgroup>
          <optgroup label="Cayman Brac Secondary">
            <option value="Layman E. Scott">Layman E. Scott</option>
          </optgroup>
          <optgroup label= "Default School">
            <option value= {defaultSchool}>{defaultSchool}</option>
          </optgroup>
        </select>
        {/* SCHOOL ID */}
        <input type="text" name="student_id" placeholder="Student ID" className="form-control mt-3" value={student_id} onChange={e => setStudentID(e.target.value)}/>
        {/* YEAR / GROUP  */}
        <select type="text" name="yeargroup" placeholder="year/group" className="form-control mt-3" value={yearGroup} onChange={e => setYearGroup(e.target.value)}>
          <option value="DEFAULT">Choose the Year/ Group</option>
          <option value="yr01">yr01</option>
          <option value="yr02">yr02</option>
          <option value="yr03">yr03</option>
          <option value="yr04">yr04</option>
          <option value="yr05">yr05</option>
          <option value="yr06">yr06</option>
          <option value="yr07">yr07</option>
          <option value="yr08">yr08</option>
          <option value="yr09">yr09</option>
          <option value="yr10">yr10</option>
          <option value="yr11">yr11</option>
          <option value="yr12">yr12</option>
        </select>
        {/* GENDER  */}
        <select type="text" name="gender" placeholder="gender" className="form-control mt-3" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="DEFAULT">Gender</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
        {/* REFERRAL OR DISCHARGE */}
        <select type="text" name="referral_discharge" placeholder="referral_discharge" className="form-control mt-3" value={referral_discharge} onChange={e => setReferralDischarge(e.target.value)}>
          <option value="DEFAULT">Was this a referral, continuation or discharge?</option>
          <option value="referral">Referral</option>
          <option value="discharge">Discharge</option>
          <option value="continuation">Continuation</option>
        </select>
      
        {/* CONTACT TYPE  */}
        <select type="text" name="contact_type" placeholder="contact_type" className="form-control mt-3" value={contact_type} onChange={e => setContactType(e.target.value)}>
          <option value="DEFAULT">Type of Contact</option>
          <option value="student">student</option>
          <option value="parent">parent</option>
          <option value="emergeny contact">emergeny contact</option>
          <option value="staff">staff</option>
          <option value="social worker">social worker</option>
          <option value="support staff">support staff</option>
          <option value="SENCO">SENCO</option>
          <option value="other">other</option>
        </select>

        {/* CONTACT METHOD  */}
        <select type="text" name="contact_method" placeholder="contact_method" className="form-control mt-3" value={contact_method} onChange={e => setContactMethod(e.target.value)}>
        <option value ="DEFAULT">Contact Mode/ Method</option>
          <option value="in-person">in-person</option>
          <option value="text">text</option>
          <option value="whatsapp">whatsapp</option>
          <option value="phone call">phone call</option>
          <option value="email">email</option>
          <option value="check-in">check-in</option>
          <option value="classroom presentation">classroom presentation</option>
          <option value="session">session</option>
          <option value="video chat">video chat</option>
          <option value="group">group session</option>
          <option value="crisis intervention">crisis intervention</option>
          <option value="home visit">home visit</option>
          <option value="sbst, mdt, case conference">sbst, mdt, case conference</option> 
          <option value="outside agency meeting">outside agency meeting</option>
          <option value="other meeting">other meeting</option>
          
        </select>
        {/* CP_REFERRAL  */}
        <select type="text" name="cp_referral" placeholder="cp_referral" className="form-control mt-3" value={cp_referral} onChange={e => setCPReferral(e.target.value)}>
          <option value="DEFAULT">Was this a CP Referral?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {/* <div className='mt-3'>
          <p>Is this a CP REFERRAL?</p>
          <div className="form-check-inline">
              <input className="form-check-input" type="radio" name="cp_referral" id="y" value={cp_referral} onClick={(e)=> setCp_referral(e.target.value)}/>
              <label className="form-check-label">Yes</label>
          </div>

          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="cp_referral" id="n" value={cp_referral} onClick={(e)=> setCp_referral(e.target.value)}/>
            <label className="form-check-label">No</label>
          </div>
        </div> */}
        {/* PURPOSE  */}
        <textarea className="form-control mt-3" name="purpose" placeholder="What was the purpose of the connection?" value={purpose} onChange={e => setPurpose(e.target.value)}></textarea>
        {/* PROVISION  */}
        <textarea className="form-control mt-3" name="provision" placeholder="Provision/Support Agreed Upon/ Plan Forward (When Necessary) / Any Additional Notes" value={provision} onChange={e => setProvision(e.target.value)}></textarea>
        {/* BUTTON  */}
        <button className="btn btn-success btn-block mt-3 mb-5">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;