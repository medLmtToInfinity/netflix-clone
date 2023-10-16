import { auth } from "../firebase";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import "./ProfileScreen.css";
import { useNavigate } from "react-router-dom";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
    const {user, currentPackage} = useSelector(state => state.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut();
        navigate("/")
    }

  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
            <img src="https://i.pinimg.com/564x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"  alt="avatar" />
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                    <h3>Plans(current plan: {currentPackage})</h3>
                    <PlansScreen />
                </div>
                <button onClick={handleSignOut} className="porfileScreen__singOut">Sign Out</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen