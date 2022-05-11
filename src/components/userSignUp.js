import {  Grid } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { FacebookOutlined, Google } from '@mui/icons-material';
import { Link , useNavigate } from 'react-router-dom';


export default function UserSignUp() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [cellNum, setCellNum] = useState("")
  const [city, setCity] = useState("")
  const [error, setError] = useState("")

  const submitHandler = async() => {
    if(confirmPassword !== password){
      setError("Passwords donot match")
      console.log(error)
    }
    if(confirmPassword === password){

    }
    navigate("/sellerHome")
  }


  return (
    <>
      <Grid className='background bg-customer'>
        <Grid item xs={10} sm={10} md={8} lg={6} >
          <div className="form-container">
            <div className="form">
              <h1 className='title'>Create your account and browse your favourite food.</h1>
              <div className='inp-container'>
                <label htmlFor='name'>Full name :</label>
                <br />
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" className="inp" />
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Email Address :</label>
                <br />
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="inp" />
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Password :</label>
                <br />
                <div className="pass-div">
                  <input type={showPass ? "text" : "password"} onPaste={(e) => { e.preventDefault(); return false; }} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="inp pass" />
                  {showPass ? <Visibility className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} /> :
                    <VisibilityOff className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} />
                  }
                </div>
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Confirm Password :</label>
                <br />
                <div className="pass-div">
                  <input type={showPass ? "text" : "password"} onPaste={(e) => { e.preventDefault(); return false; }} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="inp pass" />
                  {showPass ? <Visibility className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} /> :
                    <VisibilityOff className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} />
                  }
                </div>
              </div>
              <div className='inp-container'>
                <label htmlFor='cell'>Mobile no. :</label>
                <br />
                <input type="number" id="cell" value={cellNum} onChange={(event) => setCellNum(event.target.value)} placeholder="Mobile number" className="inp" />
              </div>
              <div className='inp-container'>
                <label htmlFor='city'>City :</label>
                <br />
                <input type="text" id="city" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" className="inp" />
              </div>
              

              

              <button className="form-btn auth">
                <span>Continue with Google</span>
                <Google sx={{fontSize:"25px"}}/>
              </button>

              <button className="form-btn auth">
                <span>Continue with Facebook </span> 
                <FacebookOutlined sx={{fontSize:"25px"}}/>
              </button>
              <div className='acc-link'><span>Already have an account? </span> <Link to="/customerLogin">Login</Link></div>
              
              {/* <p className="account">Don't have an account ? <Link to="/signup" className="account-link">Create one</Link></p> */}
              <button className="form-btn signup"
                onClick={() => { submitHandler() }}
              >Create account</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

