import React from 'react'
import "./Plan.css"
import { useDispatch, useSelector } from 'react-redux'
import { setPackage } from '../app/store';

function Plan( {plan, quality} ) {
    const { currentPackage } = useSelector(state => state.user);

    const dispatch = useDispatch();

    
    
    const changePlan = () => {
        dispatch(setPackage(plan))
    }
    
    let newClass = "";
    if (currentPackage === plan) {
        newClass = "current";
    }



  return (
    <div className='plansScreen__plan'>
            <div className='planScreen__info'>
                <h5>{plan}</h5>
                <h6>{quality}</h6>
            </div>
            <button disabled={!!newClass} className={newClass} onClick={changePlan}>{currentPackage === plan ? "Current Plan" : "Subscribe"}</button>
        </div>
  )
}

export default Plan