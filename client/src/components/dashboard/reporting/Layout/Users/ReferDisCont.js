import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Cards from '../Hud/Cards'



const ReferDisCont = (props) =>{
    let today = moment()
    let textMonth = moment().format('MMMM')

    function breakdown (item, list, month){
        let count = 0
        for(let element in list){
            // console.log(list[element])
            // console.log(moment(list[element].mon, 'YYYY-MM-DD').format('MMMM'))
            if(moment(list[element].mon, 'YYYY-MM-DD').format('MMMM') === month){
                count += parseInt(list[element][item])
            }
            }
        return count
    }

    return(
        <div className='row justify-content-around ml-5'>
            <Cards title={`${today.format('MMMM')} Referrals`} content={breakdown("referrals", props.referrals, textMonth)}  />
            <Cards title={`${today.format('MMMM')} Discharges`} content={breakdown("discharges", props.discharges, textMonth)}  />
            <Cards title={`${today.format('MMMM')} Continuations`} content={breakdown("continuations", props.continuations, textMonth)}  />
        </div>
        )
}

export default ReferDisCont