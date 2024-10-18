import React from 'react'

const Footer = () => {
  return (
    <>
       <div className=' w-[100%] h-[50px] bg-sky-900 strict bottom-0'>
           <p className='absolute m-[13px] text-white'>Taklu copyright@2024</p>
            <p className='text-[30px] text-white ml-[40vw]'>Moye Moye.....</p>
            <div className='flex mt-[-45px] float-right mr-[50px] '>
              <img src='../images/firstmonkey.jpg' alt='img' className='border w-[40px] h-[40px] rounded-[50%] mt-[5px] mr-[10px]' />
              <img src='../images/secondmonkey.jpg' alt='img' className='border w-[40px] h-[40px] rounded-[50%] mt-[5px] mr-[10px]' />
              <img src='../images/thirdmonkey.jpg' alt='img' className='border w-[40px] h-[40px] rounded-[50%] mt-[5px] ' />
            </div>
       </div>
    </>
  )
}

export default Footer
