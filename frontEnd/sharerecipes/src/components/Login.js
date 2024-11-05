import React from 'react'
import {Link} from 'react-router-dom'
import './styles/login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className='loginForm'>
            <p className='loginhead'>
            <h1>
            Login
            </h1>
            <h4>
            Login or <Link className='logintosignup' style={{color:'white'}} to='/signup'>signup</Link> if new user...
            </h4>
            </p>
            <p>
            <label>
             Email:
            </label>
            <input type='email' id='userEmail' placeholder='enter email' required />
            </p>
            <p>
            <label>
             Password:
            </label>
            <input type='password' id='userPassword' placeholder='enter password' required/>
            </p>
           
             <p>
                <button type='submit'>Confirm Login</button>
             </p>

        </form>
    </div>
  )
}

export default Login