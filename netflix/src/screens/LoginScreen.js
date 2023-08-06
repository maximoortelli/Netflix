import React from 'react';
import { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

const [signUp, setSignUp] = useState(false);

  return (
       <div className='loginScreen'>
         <div className='loginScreen_background'>
            <img className='loginScreen_logo' src='https://es.logodownload.org/wp-content/uploads/2018/11/netflix-logo-51.png' alt=''></img>
            <button  
                onClick={() => setSignUp(true)} 
                className='loginScreen_button'>Sign Up</button>  
            <div className='loginScreen_gradient' />
         </div>

         <div className='loginScreen_body'>
                {signUp ? (
                    <SignUpScreen /> 
                ) : (
                 <>
                     <h1>Unlimited films, TV programmes and more.</h1>
                     <h2>Watch anywhere. Cancel at any time.</h2>
                     <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                     
                     <div className='loginScreen_input'>
                     
                         <form>
                             <input type='email' placeholder='Email Adress'/>
                             <button onClick={() => setSignUp(true)} 
                             className='loginScreen_getStarted'>GET STARTED</button>
                         </form>
                     
                     </div>
                 </>
                 )}
         </div>
                
      </div>
  )
}

export default LoginScreen;
