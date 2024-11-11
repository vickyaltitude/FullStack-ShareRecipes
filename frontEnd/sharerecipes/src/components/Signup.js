import React from 'react'
import {Link} from 'react-router-dom'
import './styles/signup.css'
import { useEffect,useState } from 'react'

const Signup = ({users,signinEmail,setSigninEmail,signinName,setSigninName,handleSignin,setSigninPasswrd,signinPasswrd,successSigninMsg}) => {
    

  const [userNameError, setUserNameError] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);
 
    useEffect(()=>{
      let userNameTaken = false;
      let userEmailTaken = false;
      
    
    
      users.forEach(user =>{
        console.log(user.userName,signinName)
        if(user.userName.toLowerCase() === signinName.toLowerCase()){
          userNameTaken = true;
        }
        if(user.userEmail.toLowerCase() === signinEmail.toLowerCase()){
          userEmailTaken = true;
        }
    })

    setUserNameError(userNameTaken)
    setUserEmailError(userEmailTaken)

    },[signinEmail,signinName])

  return (
    <div className='signup'>
        <form className='signupForm' onSubmit={(e) => handleSignin(e)}>
            <div className='signuphead'> 
            <h1>
            Sign-Up
            </h1>
            <h4>
            Create an account or <Link className='signuptologin' style={{color:'white'}} to='/login'>login</Link> if existing user...
            </h4>
            </div>
           
            <p>
              {userNameError ?  <p style={{color:'red' ,paddingBottom:'8px'}}>
                  User Name already taken!  Try different name
              </p> : ''}

              {successSigninMsg ? <p style={{color:'#90EE90' ,paddingBottom:'8px'}}>
                  {successSigninMsg}
              </p> : ''}
             
            <label>
              Name: <span>(This will be your username)</span>
            </label>
            <input type='text' value={signinName} onChange={(e)=> {

              setSigninName(e.target.value)}
             
            } 
              id='userName' 
              placeholder='enter name' 
              required/>
            </p>
            <p>
              {userEmailError ? <p style={{color:'red',paddingBottom:'8px'}}>
                  User already exists!
              </p> : ''}
            
            <label>
             Email:
            </label>
            <input type='email' 
            value={signinEmail} 
            onChange={(e)=> {
              setSigninEmail(e.target.value)}

              } 
              id='userEmail' 
              placeholder='enter email' 
              required />
            </p>
            <p>
            <label>
             Password:
            </label>
            <input type='password' value={signinPasswrd} id='userPassword' placeholder='enter password'  onChange={(e)=> {
              setSigninPasswrd(e.target.value)}

              }  required/>
            </p>
           
             <p>
                <button type='submit' disabled={(userNameError || userEmailError)}>Confirm Sign-up</button>
                <p style={{textAlign:'center'}}>Your journey starts here!</p>
             </p>

        </form>
    </div>
  )
}

export default Signup