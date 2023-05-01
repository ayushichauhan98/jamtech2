import React from "react";
import { Link } from "react-router-dom";
export default function Avatar(mydata){
    return(
        <>
        <center>
            
        {mydata.mydata.map((item)=>{
            return(
                <>
                <img src={item.pic} height="200px" width="200px" className="me-3" />
                </>
            )
        })}
        <br />
        <br />
        <Link to='/profile-card'><div className="btn btn-outline-warning me-2">Profile Card</div></Link>
        <Link to='/attendance'><div className="btn btn-outline-primary ms-2">Attendance</div></Link>
        </center>
        </>
    )
}