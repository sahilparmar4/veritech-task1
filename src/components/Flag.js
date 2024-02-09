import React from 'react'

export default function Flag(props) {
  return (
    <>
        <div className='h-16 overflow-y-hidden'>
            <img
             className={`${props.rotationDirection === "right" ? "rotate-90" : "-rotate-90"} h-32 ${props.rotationDirection === "right" ? "float-right" : ""} ${props.rotationDirection === "bottom" ? "relative bottom-8" : "-mt-8"}`}
             src={process.env.PUBLIC_URL+'/flag.png'}
             alt=''
        />
        </div>
    </>
  )
}
