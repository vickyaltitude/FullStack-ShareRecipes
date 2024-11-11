import React from 'react'
import {Link} from 'react-router-dom'
import './styles/login.css'

const Login = ({handleLogin,loginEmail,setLoginEmail,loginPasswrd,setLoginPasswrd,loginErrorMsg,loginSuccessMsg}) => {
  return (
    <div className='login'>
        <form className='loginForm' onSubmit={(e)=> handleLogin(e)}>
            <p className='loginhead'>
            <h1>
            Login
            </h1>
            <h4>
            Login or <Link className='logintosignup' style={{color:'white'}} to='/signup'>signup</Link> if new user...
            </h4>
            {loginErrorMsg ? <h3 style={{color:'red'}}>{loginErrorMsg}</h3> : ''}
            {loginSuccessMsg ? <h3 style={{color:'#90EE90'}}>{loginSuccessMsg}</h3> : ''}
            </p>
            <p>
            <label>
             Email:
            </label>
            <input type='email' 
            value={loginEmail}
            onChange={(e)=> setLoginEmail(e.target.value)}
             id='userEmail' 
             placeholder='enter email' 
             required />
            </p>
            <p>
            <label>
             Password:
            </label>
            <input 
            type='password' 
            value={loginPasswrd}
            onChange={(e)=> setLoginPasswrd(e.target.value)}
            id='userPassword' 
            placeholder='enter password' 
            required/>
            </p>
           
             <p>
                <button type='submit'>Confirm Login</button>
             </p>

        </form>
    </div>
  )
}

export default Login