import React from 'react'
import Flag from './Flag'

export default function About() {
  return (
    <>
        <Flag rotationDirection={"right"} />
        <br />
        <br />
        <br />
        <center>
            <div className='bg-purple-400 w-40 h-12 rounded p-2.5 text-white text-lg font-medium'>
                Company Name
            </div>
            <p className='flex text-center mt-5 mb-3 lg:w-1/2 sm: pl-auto sm: pr-auto'>
                Welcome to my Company, where a dedicated team of professionals works together to bring innovation,
                creativity and expertise to software industry, get to know the individuals who make our company
                thrive.  
            </p>
            <hr className='border-dashed border-purple-500 border-2 w-1/2'/>
        </center>
    </>
  )
}
