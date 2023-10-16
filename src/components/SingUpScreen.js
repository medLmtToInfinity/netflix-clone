import { useState } from "react"
import "./SingUpScreen.css"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

function SingUpScreen( {inputValue} ) {

    const [emailVal, setEmailVal] = useState(inputValue);
    const [passwordVal, setPasswordVal] = useState("");
    let signInError = null;

    const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then(authUser => console.log(authUser))
      .catch((error) => {
        signInError = <div className="signupScreen__error">{error.message}</div>
      } )
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
      .then(authUser => console.log(authUser))
      .catch((error) => {
        signInError = <div className="signupScreen__error">{error.message}</div>
      } );
    }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
        <h1>Sign Up</h1>
        {signInError}
        <input autoFocus onChange={(event) => setEmailVal(event.target.value)}  type="email" value={emailVal} placeholder="Enter your Email..." />
        <input onChange={(event) => setPasswordVal(event.target.value)} type="password" placeholder="Enter your Password..." value={passwordVal} />
      <button type="submit">Sign In</button>
      <h4><span className="signUpScreen__gray">New to Netflix?</span> <span onClick={handleSignUp} className="signUpScreen__link">Sing Up Now!</span></h4>
    </form>
  )
}

export default SingUpScreen