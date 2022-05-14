import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { FacebookOutlined, Google } from '@mui/icons-material';
import { Link , useNavigate } from 'react-router-dom';

function LoginForm(props) {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const submitHandler = () => {
      localStorage.setItem("Role",`${props.role}`)
      navigate(`/${props.landing}Home`)
  
    }
  return (
    <div className="form-container">
            <div className="form">
              <h1 className='title'>{props.title}</h1>
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
              <div className='acc-link'><span>Don't have an account?</span> <Link to={`/${props.link}`}>Create one</Link></div>
              
              
              <button className="form-btn"
                onClick={() => { submitHandler() }}
              >Login</button>
            </div>
          </div>
  )
}

export default LoginForm