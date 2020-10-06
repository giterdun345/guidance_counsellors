const router = require("express").Router()
const pool = require("../db")
const authorization = require("../middleware/authorization")

// all connections and name
router.get("/", authorization, async (req, res) => {
    try {
        if(req.user.name === 'lead'){
          const lead = await pool.query("SELECT * FROM connections LEFT JOIN users ON users.user_id = connections.user_id")                                                                                                      
          const studentsEngaged = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(distinct student_id) as students, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id GROUP BY mon, connections.school")
          const gender = await pool.query("SELECT count(case when gender='M' then 1 end) as male_count, count(case when gender='F' then 1 end) as female_count FROM connections")
          const amountSep = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, Count(*) as monthCount, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE EXTRACT(month from date_trunc('month',connections.connection_date)) = 9 GROUP BY mon, connections.school")
          const amountOct = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, Count(*) as monthCount, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE EXTRACT(month from date_trunc('month',connections.connection_date)) = 10 GROUP BY mon, connections.school")
          const amountNov = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, Count(*) as monthCount, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE EXTRACT(month from date_trunc('month',connections.connection_date)) = 11 GROUP BY mon, connections.school")
          const amountDec = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, Count(*) as monthCount, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE EXTRACT(month from date_trunc('month',connections.connection_date)) = 12 GROUP BY mon, connections.school")
          const studentSessions = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as sessions, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'session' GROUP BY mon, connections.school, users.user_name")
          const outsideAgencies = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as agencies, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'outside agency meeting' GROUP BY mon, connections.school, users.user_name")
          const sbstCase = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as sbsts, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'sbst, mdt, case conference' GROUP BY mon, connections.school, users.user_name")
          const cpReferrals= await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as cps, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.cp_referral = 'Yes' GROUP BY mon, connections.school, users.user_name")
          const amountReferrals = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as referrals, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'referral' GROUP BY mon, connections.school, users.user_name")
          const amountContinuations = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as continuations, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'continuation' GROUP BY mon, connections.school, users.user_name")
          const amountDischarges = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as discharges, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'discharge' GROUP BY mon, connections.school, users.user_name")
          const classroomPresentations = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as presentations, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'classroom presentation' GROUP BY mon, connections.school, users.user_name")
          const groupSessions = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as groups, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'group' GROUP BY mon, connections.school, users.user_name")
          const checkins = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as checks, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'check-in' GROUP BY mon, connections.school, users.user_name")
          const crisisInterventions = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as interventions, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'crisis intervention' GROUP BY mon, connections.school, users.user_name")
          const homeVisits = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as visits, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'home visit' GROUP BY mon, connections.school, users.user_name")
          const parentContacts = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as parents, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_type = 'parent' GROUP BY mon, connections.school, users.user_name")
          const meetings = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as meets, connections.school, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'other meeting' GROUP BY mon, connections.school, users.user_name")
          const distinctStudents = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(distinct student_id) as students, users.user_name, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id GROUP BY mon, users.user_name, connections.school")

          res.json({
            admin: req.user.name,
            results: lead.rows,
            // aggregated queries
            studentsEngaged: studentsEngaged.rows,
            gender:gender.rows,
            distinctStudents: distinctStudents.rows,
            amountSep: amountSep.rows,
            amountOct:amountOct.rows,
            amountNov: amountNov.rows,
            amountDec: amountDec.rows,
            studentSessions:studentSessions.rows,
            homeVisits: homeVisits.rows,
            outsideAgencies: outsideAgencies.rows,
            sbstCase: sbstCase.rows,
            cpReferrals: cpReferrals.rows,
            amountReferrals:amountReferrals.rows,
            amountContinuations: amountContinuations.rows,
            amountDischarges: amountDischarges.rows,
            classroomPresentations: classroomPresentations.rows,
            groupSessions: groupSessions.rows,
            checkins: checkins.rows,
            crisisInterventions: crisisInterventions.rows,
            parentContacts: parentContacts.rows,
            meetings : meetings.rows
          })
        }else{
          const user = await pool.query("SELECT u.user_name, c.connection_id, c.contact_type, c.contact_method, c.provision, c.connection_date, c.student_id, c.purpose, c.gender, c.yearGroup, c.school, c.referral_discharge, c.cp_referral FROM users AS u LEFT JOIN connections AS c ON u.user_id = c.user_id WHERE u.user_id= $1", [req.user.id])                                                                                                      
          res.json(user.rows)
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error (dashboard catch)")
    }
})

// create connection
router.post("/connections", authorization, async (req, res) => {
    try {
      // console.log(req.body);
      const { student_id, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date, referral_discharge, cp_referral} = req.body;
      const newConnection = await pool.query(
        "INSERT INTO connections (user_id, student_id, user_name, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date, referral_discharge, cp_referral) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
        [req.user.id, student_id, req.user.name, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date, referral_discharge, cp_referral]
      );
      res.json(newConnection.rows[0]);
      // console.log(newConnection.rows[0])
    } catch (err) {
      console.error(err.message)
  }
  });

// update connection 
router.put("/connections/:id", authorization, async (req, res) => {
    try {
      const { id } = req.params;
      const { student_id, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date, referral_discharge, cp_referral } = req.body;
      const updateConneciton = await pool.query(
        "UPDATE connections SET student_id=$1, contact_type=$2, yearGroup=$3, school=$4, contact_method=$5, gender=$6, purpose=$7, provision=$8, connection_date=$9, referral_discharge=$10, cp_referral=$11 WHERE connection_id = $12 AND user_id = $13 RETURNING *",
        [student_id, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date, referral_discharge, cp_referral, id, req.user.id]
      );     
  
      if (updateConneciton.rows.length === 0) {
        return res.json("This connection is not yours");
      }
  
      res.json("Connection was updated");
    } catch (err) {
      console.error(err.message);
    }
  });

// delete connection
router.delete("/connections/:id", authorization, async (req, res) => {
    try {
      const { id } = req.params;
      const deleteConnection = await pool.query(
        "DELETE FROM connections WHERE connection_id = $1 AND user_id = $2 RETURNING *",
        [id, req.user.id]
      );
  
      if (deleteConnection.rows.length === 0) {
        return res.json("This connection is not yours");
      }
  
      res.json("Connection was deleted");
    } catch (err) {
      console.error(err.message);
    }
  });

  // router.get("/hud/:user_name", authorization, async (req, res) => {
  //   try {
  //     const user_all = await pool.query("SELECT u.user_name, c.connection_id, c.contact_type, c.contact_method, c.provision, c.connection_date, c.student_id, c.purpose, c.gender, c.yearGroup, c.school, c.referral_discharge, c.cp_referral FROM users AS u LEFT JOIN connections AS c ON u.user_id = c.user_id WHERE u.user_name= $1", [req.params.user_name])                                                                                                      
  //     const studentsEngaged = await pool.query("SELECT COUNT(distinct student_id) as students, CONNECTIONS.SCHOOL FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE users.user_name= $1 GROUP BY connections.school", [req.params.user_name])
  //     const studentSessions = await pool.query("SELECT COUNT(*) as sessions, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'session' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const outsideAgencies = await pool.query("SELECT COUNT(*) as agencies, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE (connections.contact_method = 'text' OR connections.contact_method = 'whatsapp' OR connections.contact_method = 'phone call' OR connections.contact_method = 'email') AND users.user_name= $1  GROUP BY users.user_name", [req.params.user_name])
  //     const cpReferrals= await pool.query("SELECT COUNT(*) as cps, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.cp_referral = 'Yes' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const amountReferrals = await pool.query("SELECT COUNT(*) as referrals, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'referral' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const amountDischarges = await pool.query("SELECT COUNT(*) as discharges, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'discharge' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const classroomPresentations = await pool.query("SELECT COUNT(*) as presentations, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'classroom presentation' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const groupSessions = await pool.query("SELECT COUNT(*) as groups, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method LIKE '%group' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const checkins = await pool.query("SELECT COUNT(*) as checks, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'check-in' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const crisisInterventions = await pool.query("SELECT COUNT(*) as interventions, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'crisis intervention' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const homeVisits = await pool.query("SELECT COUNT(*) as visits, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'home visit' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const parentContacts = await pool.query("SELECT COUNT(*) as parents, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_type = 'parent' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     const meetings = await pool.query("SELECT COUNT(*) as meets, users.user_name FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'meeting' AND users.user_name= $1 GROUP BY users.user_name", [req.params.user_name])
  //     return(
  //       res.json({
  //         all: user_all.rows,

  //           // aggregated queries
  //         studentsEngaged: studentsEngaged.rows,
  //         studentSessions:studentSessions.rows,
  //         homeVisits: homeVisits.rows,
  //         outsideAgencies: outsideAgencies.rows,
  //         cpReferrals: cpReferrals.rows,
  //         amountReferrals:amountReferrals.rows,
  //         amountDischarges: amountDischarges.rows,
  //         classroomPresentations: classroomPresentations.rows,
  //         groupSessions: groupSessions.rows,
  //         checkins: checkins.rows,
  //         crisisInterventions: crisisInterventions.rows,
  //         parentContacts: parentContacts.rows,
  //         meetings : meetings.rows
  //         })

  //     )     
  //   } catch (error) {
  //     console.error(error)
      
  //   }
  // })

  // router.get("/hud/:user_name/ :month", authorization, async (req, res) => {
  //   console.log(req.params)
  //   try {
  //     const user_all = await pool.query("SELECT u.user_name, c.connection_id, c.contact_type, c.contact_method, c.provision, c.connection_date, c.student_id, c.purpose, c.gender, c.yearGroup, c.school, c.referral_discharge, c.cp_referral FROM users AS u LEFT JOIN connections AS c ON u.user_id = c.user_id WHERE u.user_name= $1", [req.params.user_name])                                                                                                      
  //     // const nameEngaged = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(distinct student_id) as students, CONNECTIONS.SCHOOL FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameSessions = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as sessions, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'session' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameAgencies = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as agencies, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE (connections.contact_method = 'text' OR connections.contact_method = 'whatsapp' OR connections.contact_method = 'phone call' OR connections.contact_method = 'email') AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2  GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameCps= await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as cps, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.cp_referral = 'yes' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameReferrals = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as referrals, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'referral' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameDischarges = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as discharges, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.referral_discharge = 'discharge' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const namePresentations = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as presentations, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'class presentation' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameGroups = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as groups, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'group' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameChecks = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as checks, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'check-in' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameInterventions = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as interventions, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'crisis intervention' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameVisits = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as visits, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'home visits' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameContacts = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as parents, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_type = 'parent' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     // const nameMeets = await pool.query("SELECT date_trunc('month',connections.connection_date) as mon, COUNT(*) as meets, connections.school FROM connections LEFT JOIN users ON users.user_id = connections.user_id WHERE connections.contact_method = 'meeting' AND users.user_name= $1 AND EXTRACT(MONTH FROM connections.connection_date) = $2 GROUP BY mon, connections.school", [req.params.user_name, req.params.month])
  //     return(
  //       res.json({
  //         all: user_all.rows,

  //           // aggregated queries
  //         studentsEngaged: studentsEngaged.rows,
  //         studentSessions:studentSessions.rows,
  //         homeVisits: homeVisits.rows,
  //         outsideAgencies: outsideAgencies.rows,
  //         cpReferrals: cpReferrals.rows,
  //         amountReferrals:amountReferrals.rows,
  //         amountDischarges: amountDischarges.rows,
  //         classroomPresentations: classroomPresentations.rows,
  //         groupSessions: groupSessions.rows,
  //         checkins: checkins.rows,
  //         crisisInterventions: crisisInterventions.rows,
  //         parentContacts: parentContacts.rows,
  //         meetings : meetings.rows
  //         })
  //     )     
  //   } catch (error) {
  //     console.error(error)
      
  //   }
  // })
module.exports = router;