import React, { useState } from 'react'
import "./Style.css"
import moment from 'moment'

const Index = () => {
const [loginTime, setloginTime]= useState(null);
const [logoutTime, setlogoutTime]= useState(null);
const [hourLogin, sethourLogin]= useState(null);

  
const punchInTime=()=>{
        setloginTime(moment().format('LT'));  

}
   
const punchOutTime=()=>{
    setlogoutTime(moment().format('LT'));
    
}

// const inMinutes=(time)=>{
//   const date = new Date(`01/01/2000 ${time}`);
//     const hours = date.getHours();  D
//     const minutes = date.getMinutes();
//     return minutes;

// }

    
  return (
    <div className='container'>
       <div className="left" style={{display: 'flex', justifyContent: 'space-around'}}>
       <div>
       <button onClick={()=>{punchInTime()}}>Start</button>
       {loginTime && <p>{loginTime}</p> }
       </div>

       <div>
       <button onClick={()=>{punchOutTime()}}>End</button>
       {logoutTime && <p>{logoutTime}</p> }
       </div>
       </div>

       <div className="right">
        <h5>Total Working Hours</h5>
        {hourLogin && <p>{hourLogin}</p> }
       </div>


    </div>
  )
}

export default Index