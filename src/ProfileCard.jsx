import React from "react";
import { Link } from "react-router-dom";
export default function ProfileCard(mydata){
    return(
        <>
        <div className="container">
            <div className="row py-2">
                
                <div className="col-sm-12">
                    <div className="row">
                        {mydata.mydata.map((item)=>{
                        return(
                            <>
                            <div className="col-sm-4 my-2">
                            <div class="card">
                        <img src={item.pic} class="card-img-top"  alt="..."/>
                        <div class="card-body">
                            <b>Name : </b>{item.name} <br />
                            <b>email : </b>{item.email} <br />
                            <b>phone : </b>{item.phone} <br /> 
                            <b>address : </b>{item.address} <br />
                            <b>bio : </b>{item.bio} <br />
                        </div>
                        </div>
                        </div>
                            
                            </>
                        )
                    })}
                    </div>
                    
                    <br />
                    <center>
                    <Link to='/'><div className="btn btn-outline-danger me-2">Go Back</div></Link>
        <Link to='/attendance'><div className="btn btn-outline-primary ms-2">Attendance</div></Link>
                    </center>
                </div>
                
            </div>
        </div>
        </>
    )
}