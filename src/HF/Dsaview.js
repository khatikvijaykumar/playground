import React, { useState } from 'react'


const Dsaview = () => {
  const [a,seta] = useState(0);
  const arrbox = [1,2,3,4,5];

  const vj = ()=>{
       seta(a+1);
      
  }
    
  return (
    <>
      <button className='bg-black text-white rounded p-1' onClick={vj}>{"->"}</button>
       <div id='ak' className='flex p-[10px] pb-[0]'>
             
             {arrbox.map((e)=>(
                <div id={e} key={e} className='border border-black w-[100px] h-[50px]'>{e}</div>
             ))}
            
       </div>
       <input value={a} className='w-[500px] ml-[10px] ' type="range"  min={0} max={5} readOnly />
    </>
  )
}

export default Dsaview
