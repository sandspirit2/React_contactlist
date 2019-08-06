import React from "react"


const Form = (props)=>{

    return <React.Fragment>

<div className="form-group mt-5">
    <label >Name</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter Name" />
  </div>
  <div className="form-group">
    <label >Username</label>
    <input type="text" className="form-control" id="username"  placeholder="Enter Username" />
  </div>
         <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <button  className=" my-3 btn btn-primary" onClick = {props.add}>add</button>
  
 
  </React.Fragment>
}

export default Form;