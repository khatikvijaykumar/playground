import React from 'react'
import '../EonStyle.css'
const Header = () => {
  return (
    <>
     <div className='h-[8vh] '>  {/* ----this don't hide content ------ */}
      {/* ------------------header start----------------------------------- */}
      <div id='head' className='flex shadow-md h-[8vh] '>
         <div id='dsa' className='text-[20px]  text-sky-900'>DSA</div>
         <h1 className='text-[50px] text-sky-300 font-bold  '>PG</h1>
         <div id='menubar' className=' float-right w-[200px] '>
          <div className='text-[20px] text-sky-900'>Home</div>
          <div className='text-[20px] text-sky-900'>Explore</div>
         </div >
       </div>
        {/* ------------------header end----------------------------------- */}
      </div>
    </>
  )
}

export default Header
