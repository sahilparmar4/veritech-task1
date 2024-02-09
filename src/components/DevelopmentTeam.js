import React from 'react'
import TeamMember from './TeamMember'
import Flag from './Flag'

export default function DevelopmentTeam() {
  return (
    <>
      <div className='row'>
        <div className='flex col-lg-5 col-sm-12'>
          <Flag  rotationDirection={"left"} />
        </div>
        <div className='col-lg-7 col-sm-12 d-flex align-items-center mt-3 mt-lg-0'>
              <div className='w-56 rounded bg-purple-400 h-8 my-3 flex items-center mb-5'>
                  <h5 className='text-white font-medium text-large mx-auto'> Development Team</h5>
              </div>
        </div>
      </div>
       
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
              <i className='text-gray-300'>Team Lead, SE</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
              <i className='text-gray-300'>Software Engineer</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
              <i className='text-gray-300'>Software Engineer</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
              <i className='text-gray-300'>Software Engineer</i>
              </center>
            </div>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full flex justify-end">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
            <i className='text-gray-300'>Software Engineer</i>
            </center>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
            <i className='text-gray-300'>Software Engineer</i>
            </center>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="p-4 w-full flex justify-left">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Developer Name]</h5>
            <i className='text-gray-300'>Software Engineer</i>
            </center>
          </div>
          </div>
        </div>
    </>
  )
}
