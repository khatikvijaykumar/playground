import React from 'react'

const Explore = () => {
  return (
    <>
        <div className='w-full mt-[40vh] mb-[100px] pl-[30vw]'>
        <h1 className='text-[40px] ml-[5vw] mb-[5vh] font-bold text-sky-900'>Explore and Visualization</h1>
            <div className='flex'>
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/html.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>HTML</p>
                </div>
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/css.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>CSS</p>
                </div>
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/javasript.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>Javascript</p>
                </div>
            </div>
            <div className='flex'>  
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/sql.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>SQL</p>
                </div>
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/oop.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>Oops</p>
                </div>
                <div className='w-[200px] h-[250px]  shadow shadow-md shadow-sky-200  m-[5px] border border-gray-200'>
                    <img src='../images/pp.png' alt='img' className='w-[200px] h-[200px] p-[5px] ' />
                     <p className='text-center text-[21px] font-bold text-sky-900'>PP</p>
                </div>
            </div>
         
        </div>
    </>
  )
}

export default Explore
