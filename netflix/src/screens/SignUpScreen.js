import "./SignUpScreen.css";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="signupScreen">
      <form onSubmit={signUp}>
         <h1>Sign Up</h1>
         <input  placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button type="submit" >Sign up</button>         
      </form>
    </div>
  );
}

export default SignUpScreen;
