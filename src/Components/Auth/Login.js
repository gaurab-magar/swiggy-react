import React from 'react'
import './Login.css';

export const Login = ({setLoginModel}) => {
  return (
    <div>
      <div className="card bg-light border-0 shadow-lg rounded-3 p-3 login-container">
        <div className="d-flex justify-content-between">
          <h5 className="fs-3 fw-bold text-info">Login</h5>
          <p onClick={()=>{setLoginModel(false)}} className='pointer px-2 fs-4'>&times;</p>
        </div>
        <div className="">
          <label htmlFor='username' className='fst-italic text-muted'>Username:</label>
          <input className='form-control custom-input' id='username' placeholder='Username' /><br/>
          <label htmlFor='password' className='fst-italic text-muted'>Password:</label>
          <input type='password' className='form-control custom-input' id='password' placeholder='Password' /><br/>

        </div>
        <div className="d-flex flex-column my-3 gap-3">
          <button type="button" className="btn btn-outline-info fw-bold">Login</button>
          <p className='text-muted m-0'>Create an  account if you don't have one.</p>
          <button to='/signup' type="button" className="btn btn-outline-dark fw-bold">SignUp</button>
        </div>
      </div>
    </div>
  )
}
