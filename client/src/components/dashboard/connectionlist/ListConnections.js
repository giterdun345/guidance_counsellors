import React, { Fragment, useState, useEffect } from "react";
import EditConnections from "./EditConnections";
import { toast } from 'react-toastify'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from 'react-bootstrap'
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';  
import moment from 'moment'

const ListConnections = ({ allConnections, setConnectionsChange }) => {
  // console.log(allConnections);
  const [connections, setConnections] = useState([allConnections]); 
  const [loading, setLoading] =useState(false)

  // delete todo function
  async function deleteConnection(id) {
    try {
      await fetch(`/dashboard/connections/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.getItem("token") }
      });

      setConnections(connections.filter(connection => connection.connection_id !== id));
      toast.success('The row has been deleted', 
            {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
    } catch (err) {
      console.error(err.message);
    }
  }

  
  useEffect(() => {
     setConnections(allConnections);
     setLoading(true)
  }, [allConnections]);

  function editFormatter(cell, row){
    return <EditConnections connection={row} setConnectionsChange={setConnectionsChange} />

  }

  function deleteFormatter(cell, row){
    return <button className="btn btn-danger" onClick={() => deleteConnection(row.connection_id)}>Delete</button>
  }

  const expandRow = {
    renderer: row => (
     <div>
        <div>
          <pre>{`Referral/Discharge: ${row.referral_discharge}          CP_Referral: ${row.cp_referral}`}</pre>
        </div>
          <p>{ `Purpose of Contact: ${row.purpose}` }</p>
          <p>{ `Provisions/ Notes etc: ${row.provision}` }</p>
      </div>
    )
  };
  

  const columns = [
            {dataField:"connection_id", text:"Contact ID", sort:true},
            {dataField: "connection_date", text:"Date", sort:true,  filter: dateFilter(), formatter: (cell, row) => {
                                                                                                        // console.log(typeof moment(cell).format('DD, MMMM YYYY'))
                                                                                                        return moment(cell, 'YYYY-MM-DD').format('DD, MMMM YYYY')                                                                                                      }},
            {dataField: "school", text:"School", filter: textFilter() },
            {dataField: "student_id", text:"StudentID", sort:true, filter: textFilter() },
            {dataField: "yeargroup", text:"Year"},
            {dataField: "gender", text:"Gender"},
            {dataField: "contact_type", text:"Type"},
            {dataField: "contact_method", text:"Method"},
            {dataField: "purpose", text:"Purpose", style:{'width' : '900px'}, hidden:true},
            {dataField: "provision", text:"Provisions/ Notes etc", style:{'width' : '900px'}, hidden:true},
            {dataField: "referral_discharge", text:"Referral/Discharge", hidden:true},
            {dataField: "cp_referral", text:"CP_Referral", hidden:true},
            {dataField: "edit", text:"Edit", isDummyField: true, csvExport: false, 
            formatter:editFormatter
          },
            {dataField:"delete", text:"Delete", isDummyField: true, csvExport: false, 
            formatter:deleteFormatter
          }
        ]
            
const options = {
  sizePerPage: 5,
  sizePerPageList: 
  [
    {text:'5', value: 5}, 
    {text:'10', value:10}, 
    {text:'30', value:30},
    {text:'All', value:connections.length}
  ],
  pageStartIndex:1, 
  paginationSize:3, 
  prePage:"Prev",
  nextPage: 'Next',   
  firstPage: 'First',   
  lastPage: 'Last',   
  paginationPosition: 'top' 
}

const defaultSorted = [{
  dataField: 'connection_id', // if dataField is not match to any column you defined, it will be ignored.
  order: 'desc' // desc or asc
}];

  return (
    <Fragment>
      {loading ? (<BootstrapTable 
                        bootstrap4
                        striped
                        hover
                        defaultSorted = {defaultSorted}
                        keyField= "connection_id"
                        data= {connections}
                        columns={columns}
                        headerWrapperClasses= 'thead-dark'
                        headerClasses= "align-text-top"
                        classes="table table-bordered mt-5 table-hover table-responsive table_custom"
                        filter={filterFactory()}
                        filterPosition="bottom" 
                        pagination={paginationFactory(options)}
                        expandRow={ expandRow }
                        />) : (<ReactBootStrap.Spinner animation="border"/>)}
    </Fragment>
  );
};

export default ListConnections;