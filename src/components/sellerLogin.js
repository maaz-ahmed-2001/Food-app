import {Grid } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { FacebookOutlined, Google } from '@mui/icons-material';


export default function SellerLogin() {
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")




  return (
    <>
      <Grid className='background'>
        <Grid item xs={10} sm={10} md={8} lg={6} >
          <div className="form-container">
            <div className="form">
              <h1 className='title'>Hungry ? Login and Order now</h1>
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
              <div className='forgot-pass'><p>Forgot password?</p></div>

              

              <button className="form-btn auth">
                <span>Login with Google</span>
                <Google sx={{fontSize:"25px"}}/>
              </button>

              <button className="form-btn auth">
                <span>Login with Facebook </span> 
                <FacebookOutlined sx={{fontSize:"25px"}}/>
              </button>
              <div className='acc-link'>Don't have an account? <b>Create one</b></div>
              
              {/* <p className="account">Don't have an account ? <Link to="/signup" className="account-link">Create one</Link></p> */}
              <button className="form-btn"
                onClick={() => { }}
              >Login</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

