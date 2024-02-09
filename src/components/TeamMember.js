import React from 'react'

export default function TeamMember() {
  return (
    <>
        <div className='rounded-full bg-gray-200 size-40 flex items-center justify-center border-4'>
            <img className='block' src={process.env.PUBLIC_URL+'/professional-profile-photo.png'} alt="" />
        </div>
    </>

  )
}
