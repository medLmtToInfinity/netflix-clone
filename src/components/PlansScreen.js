import React from 'react'
import Plan from './Plan'
import "./PlansScreen.css"

function PlansScreen() {
  return (
    <div className='plansScreen'>
            <Plan plan="Premium" quality="4k + HDR" />
            <Plan plan="Basic" quality="720p" />
            <Plan plan="Standard" quality="1080p" />
        
    </div>
  )
}

export default PlansScreen