import React from 'react'
import Feature from './Feature'
import Explore from './Explore'

const Homepage = () => {
  return (
    <>
     <div className='  pl-[24vw] pt-[10vh] pb-[250px]'>
         <h1 className='text-[50px] text-sky-900'>Learn Data Structures and Algorithms <br />
         Through Interactive Gameplay</h1>
         <p className='text-[30px] ml-[3vw] m-[4vw] text-sky-900'>Experience the Future of Learning. Engage with Concepts, <br />
         Understand Deeply, and Master DSA with Eon</p>
         <input className='text-[30px] pl-2 ml-[9vw] w-[500px] text-sky-900  outline-none rounded shadow shadow-lg shadow-sky-200  border border-sky-100 ' type="text"  placeholder='search and visualize view ...'/>
     </div>
     {/* ------------- feature and explore--------------------------- */}
      <Feature/>
      <Explore/>
        
    </>
  )
}

export default Homepage
