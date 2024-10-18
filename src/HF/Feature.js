import React from 'react'

const Feature = () => {
  return (
    <>
      <div className=' h-[90vh]'>
          <h1 className='text-[50px] ml-[50px] text-sky-900'>Discover what makes Eon unique and explore our milestones <br />
          in revolutionizing DSA education.</h1>
          <p className='text-[30px]  ml-[50px] mt-[120px] text-sky-900'>Each algorithm and data structure comes with <br />
detailed step-by-step visualizations. <br />
 These visual guides help users follow along <br />
 with each operation, making complex <br />
 concepts easier to grasp.</p>
        
        <div className='w-[600px]  absolute top-[130vh] right-[5vw] float-right'>
            <img src='../images/homecustom.png' alt='img' className='w-[250px] h-[200px] rounded-[5px]  absolute z-1 top-[330px] left-[200px] ' />
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-red-900 absolute bg-white text-center pt-[35px] text-red-900 z-2 top-[] left-[130px]' >Comprehensive <br /> Resource <br /> Library </div>
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-sky-900 absolute bg-white text-center pt-[35px] text-sky-900 z-3 top-[] left-[380px]' >Step-by-Step <br />  Visualizations</div>
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-yellow-500 absolute bg-white text-center pt-[35px] text-yellow-500 z-4 top-[140px] left-[]' >Adaptive <br /> Learning <br /> Paths</div>
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-red-500 absolute bg-white text-center pt-[35px] text-red-500 z-5 top-[140px] left-[260px]' > Interactive <br /> Learning <br /> Environment</div>
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-green-500 absolute bg-white text-center pt-[35px] text-green-500 z-6 top-[280px] left-[130px]' > Custom <br /> Scenario <br /> Builder</div>
            <div className='w-[140px] h-[150px] rounded-[5px] border  shadow shadow-orange-500 absolute bg-white text-center pt-[35px] text-orange-500 z-7 top-[280px] left-[380px]' > Gamified <br />Learning <br /> Experience</div>
        </div>
       
</div>
    </>
  )
}

export default Feature
