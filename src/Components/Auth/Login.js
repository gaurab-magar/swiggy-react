import React, { useState } from 'react'
import './Login.css';
import PhoneInput from 'react-phone-input-2';
import  'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {auth} from '../../firebase/setUp';
import {useNavigate} from 'react-router-dom';
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = ({setLoginModel}) => {

  const navigate = useNavigate();
  const [phone , setPhone] = useState("");
  const [user , setUser] = useState(null);
  const [otp , setOtp] = useState("");

  const sendOtp = async() =>{
    try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const cofirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
      setUser(cofirmation)
    }catch(error){
      alert(error.message);
    }
  }
  const verifyOtp = async() => {
    try{
      const data = await user.confirm(otp);
      console.log(data)
      data.user.phoneNumber && toast.success('logedIn successfully')
      data.user.phoneNumber &&
      setTimeout(
          ()=>{ 
          navigate("/main")
        },2000
      )

    }catch(error){
      alert(error.message);
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className="card bg-light border-0 shadow-lg rounded-3 p-3 login-container">
        <div className="d-flex justify-content-between">
          <h5 className="fs-3 fw-bold text-info">Login</h5>
          <p onClick={()=>{setLoginModel(false)}} className='pointer px-2 fs-4'>&times;</p>
        </div>
        <div className="recaptcha">
          <PhoneInput 
          value={phone}
          onChange={(phone)=>setPhone("+"+phone)}
          country='ro'
          inputStyle={{height:'50px',}}
          containerStyle={{marginTop:"20px"}}
          />
          <div id='recaptcha' className='m-3'></div>
        </div>
        {user && <input onChange={(e) => setOtp(e.target.value)} className='form-control custom-input py-3 my-3 w-75' placeholder='4 Digit Code...' />}
        <div className="d-flex flex-column my-3 gap-3">
          <button onClick={sendOtp} type="button" className="btn btn-outline-warning fw-bold">Send OTP</button>
          <p className='text-muted m-0'>Create an  account if you don't have one.</p>
          {otp && <button onClick={verifyOtp} type="button" className="btn btn-outline-dark fw-bold">verifyOtp</button> }
        </div>
      </div>
    </div>
  )
}
