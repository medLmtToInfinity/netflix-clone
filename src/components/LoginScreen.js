import { useState } from "react"
import "./LoginScreen.css"
import SingUpScreen from "./SingUpScreen";
function LoginScreen() {

  const [singin, setSignin] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }


  return (
    <div className="loginScreen">
        <div className="loginScreen__background">
            <img className="loginScreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button onClick={() => setSignin(true)} className="loginScreen__button">
                Sign In
            </button>
            <div className="loginScreen__gradient" />
        </div>
        
          {
            (singin && <SingUpScreen inputValue={inputValue} />) || (
              <div className="loginScreen__body">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="loginScreen__input">
            <form>
            <input value={inputValue} onChange={handleChange} type="email" placeholder="Enter your Email..." required autoFocus  />
            <button onClick={() => setSignin(true)} className="loginScreen__getStarted">GET STARTED</button>
            </form>
          </div>
          </div>
            )
          }
        
    </div>
  )
}

export default LoginScreen