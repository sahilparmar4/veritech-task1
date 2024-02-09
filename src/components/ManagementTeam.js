import React from 'react'
import TeamMember from "./TeamMember"

export default function ManagementTeam() {
  return (
    <>
        <center>
            <h3 className='font-medium my-5'>Meet Our Team</h3>
            <div className='w-56 rounded bg-purple-400 h-8 flex items-center mb-5'>
                <h5 className='text-white font-medium text-sm mx-auto'> Leadership/Management Team</h5>
            </div>
        </center>
        <div className="grid lg:grid-cols-2 gap-4 w-1/2 mx-auto py-4">
          <div className="p-4 w-full items-center">
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Founder Name]</h5>
            <i className='text-gray-300'>Founder/CEO</i>
          </div>
          <div className="p-4 w-full items-center">
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Founder Name]</h5>
            <i className='text-gray-300'>Founder/CEO</i>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[VP Name]</h5>
            <i className='text-gray-300'>VP, Development & Growth</i>
            </center>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[VP Name]</h5>
            <i className='text-gray-300'>VP, Sales & Marketing</i>
            </center>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[VP Name]</h5>
            <i className='text-gray-300'>VP, Finance & Operation</i>
            </center>
          </div>
          </div>
        </div>

    </>
  )
}
