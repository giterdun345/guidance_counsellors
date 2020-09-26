import React, { Fragment, useState, useEffect } from "react";
// import EditConnections from "../../connectionlist/EditConnections";
import moment from 'moment';

// DATATABLE
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from 'react-bootstrap'
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';  

const ReportConnections = ({allConnections, setConnectionsChange}) => {
  // console.log(allConnections)
  const [connections, setConnections] = useState([allConnections]); 
  const [loading, setLoading] =useState(false)

  useEffect(() => {
     setConnections(allConnections);
     setLoading(true)
  }, [allConnections]);

  // console.log(allConnections)
  // function editFormatter(cell, row){
  //   // console.log(row)
  //   return <EditConnections connection={row} setConnectionsChange={setConnectionsChange} lead={true} />
  // }

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
                  {dataField:"user_name", text:"User Name", filter: textFilter() },
                  {dataField: "connection_date", text:"Date", sort:true, filter:dateFilter(), formatter: (cell, row) => {
                                                                                                              return moment(cell).format('DD, MMMM YYYY')
                                                                                                            }},
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
                  // {dataField: "edit", text:"Edit", isDummyField: true, csvExport: false, formatter:editFormatter}
                ]
            
const options = {
  sizePerPage: 30,
  sizePerPageList: 
  [
    {text:'30', value: 30}, 
    {text:'40', value:40}, 
    {text:'50', value:50},
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
  dataField: 'connection_id', 
  order: 'desc' 
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
                        classes="table table-bordered mt-5  table-hover table-responsive table_custom"
                        filter={filterFactory()}
                        pagination={paginationFactory(options)}
                        expandRow={ expandRow }
                        />) : (<ReactBootStrap.Spinner animation="border"/>)}
    
    </Fragment>
  );
};

export default ReportConnections