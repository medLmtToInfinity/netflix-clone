import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "./app/store";

function App() {
  let user = useSelector(state => state.user.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        console.log("I am logged in");
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))}
        else dispatch(logout());
      });
      return unsubscribe;
    }, []);

  return (
    <div className="app">

      {!user ? <LoginScreen /> : (
      <Router>
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Router>
      )}
    </div>
  );
}

export default App;
