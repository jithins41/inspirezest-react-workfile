import React from 'react'
import './AnimationObjects.css'

function AnimationObjects() {
  return (
    <div>
        <img style={{left:'20%',top:'10%'}} className='animation-rotateY' src="images/abstract-vectors/circle_dark.svg" alt="" />
        <img style={{left:'10%',top:'50%'}} className='animation-rotateY animation-object' src="images/abstract-vectors/circle_hole.svg" alt="" />
        <img style={{right:'10%',top:'60%'}} className='animation-rotateY' src="images/abstract-vectors/circle_light.svg" alt="" />
        <img style={{left:'50%',top:'40%'}} className='animation-rotateY' src="images/abstract-vectors/circle_lined.svg" alt="" />
        <img style={{left:'50%',top:'80%'}} className='animation-object' src="images/abstract-vectors/duel_triangle.svg" alt="" />
        <img style={{right:'10%',top:'100%'}} className='animation-object' src="images/abstract-vectors/Square_light.svg" alt="" />
        <img style={{right:'20%',top:'10%'}} className='animation-object' src="images/abstract-vectors/triangle_dark.svg" alt="" />
        <img style={{left:'20%',top:'100%'}} className='animation-object' src="images/abstract-vectors/rod.svg" alt="" />
        {/* <img style={{left:'10%',top:'60%'}} className='animation-object-group' src="images/social-icons/group2.svg" alt="" /> */}
    </div>
  )
}

export default AnimationObjects