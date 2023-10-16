import { useEffect, useState } from 'react'
import "./Nav.css";
import { useNavigate } from "react-router-dom"
function Nav() {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const transitionHandler = () => {
      if(window.scrollY > 100) setShowNav(true);
      else setShowNav(false);
    }

    window.addEventListener("scroll", transitionHandler);

    return () => window.removeEventListener("scroll", transitionHandler);
  }, [])

  return (<>
    <div className={`nav ${showNav && "nav__black"}`}>
      <div className='nav__content'>
        <img onClick={() => navigate("/")} className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix-logo' />
        <img onClick={() => navigate("/profile")} className='nav__avatar' src='https://i.pinimg.com/564x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg' alt='nav__avatar' />
      </div>
    </div>
    
  </>
  )
}

export default Nav