import React from 'react'
import './AnimationObjects.css'

function AnimationObjects() {
  return (
    <div>
        <img style={{left:'20%',top:'10%'}} className='animation-object' src="images/social-icons/bell.svg" alt="" />
        <img style={{left:'10%',top:'50%'}} className='animation-object' src="images/social-icons/like.svg" alt="" />
        <img style={{right:'10%',top:'60%'}} className='animation-object' src="images/social-icons/play.svg" alt="" />
        <img style={{left:'50%',top:'40%'}} className='animation-object' src="images/social-icons/sms.svg" alt="" />
        <img style={{left:'50%',top:'80%'}} className='animation-object' src="images/social-icons/star.svg" alt="" />
        <img style={{right:'10%',top:'100%'}} className='animation-object' src="images/social-icons/wa.svg" alt="" />
        <img style={{right:'20%',top:'10%'}} className='animation-object' src="images/social-icons/yt.svg" alt="" />
        <img style={{left:'20%',top:'100%'}} className='animation-object' src="images/social-icons/messenger.svg" alt="" />
        {/* <img style={{left:'10%',top:'60%'}} className='animation-object-group' src="images/social-icons/group2.svg" alt="" /> */}
    </div>
  )
}

export default AnimationObjects