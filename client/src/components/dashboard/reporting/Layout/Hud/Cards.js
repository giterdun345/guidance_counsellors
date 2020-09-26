import React from 'react'
const Cards = ({content, moreContent, title, additionalContent}) =>{
  
    if(moreContent){
        var sum = parseInt(content, 10) + parseInt(additionalContent, 10)
        return( 
            <div className='col-2 card flex-nowrap' style={{
                                                marginBottom:"20px",
                                                marginTop:"10px", 
                                                boxShadow:" 5px 5px 8px ", 
                                                height:"100px", 
                                                textOverflow:'ellipsis' 
                                               }}>
                <h4 className="text-center flex-nowrap" style={{marginTop:"10px"}}>{`Females: ${Math.round((content/sum)*100)}%`}</h4>
                <h5> </h5>
                <h4 className="text-center flex-nowrap">{`Males: ${Math.round((additionalContent/sum)*100)}%`}</h4>
            </div>       
        )

    }else{
        return( 
            <div className='col-2 card flex-nowrap' style={{
                                                marginBottom:"20px",
                                                marginTop:"10px", 
                                                boxShadow:" 5px 5px 8px ", 
                                                height:"100px", 
                                                textOverflow:' ellipsis' 
                                               }}>
                <h5 className="card-title text-center flex-nowrap">{title}</h5>
                <h2 className="text-center flex-nowrap">{content}</h2>
            </div>       
        )
    }
}

export default Cards