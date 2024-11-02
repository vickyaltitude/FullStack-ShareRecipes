import React from 'react'
import {Link} from 'react-router-dom'
import './styles/signup.css'

const Signup = () => {



  return (
    <div className='signup'>
        <form className='signupForm'>
            <div className='signuphead'> 
            <h1>
            Sign-Up
            </h1>
            <h4>
            Create an account or <Link className='signuptologin' to='/login'>login</Link> if existing user...
            </h4>
            </div>
           
            <p>
            <label>
              Name:
            </label>
            <input type='text' id='userName' placeholder='enter name' required/>
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
                <button type='submit'>Confirm Sign-up</button>
                <p style={{textAlign:'center'}}>Your journey starts here!</p>
             </p>

        </form>
    </div>
  )
}

export default Signup