import React from 'react'
import Flag from './Flag'
import TeamMember from './TeamMember'

export default function SalesTeam() {
  return (
    <>
      <div className='row'>
        <div className='col-7 flex justify-end'>
            <div className='w-56 rounded bg-purple-400 h-8 my-3 flex items-center mb-5'>
                  <h5 className='text-white font-medium text-large mx-auto'>Sales & Marketing Team</h5>
              </div>
        </div>
        <div className='col-5'>
          <Flag rotationDirection={"right"} />
        </div>
      </div>
      <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Employee Name]</h5>
              <i className='text-gray-300'>Team Lead</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Employee Name]</h5>
              <i className='text-gray-300'>Sales Officer</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Employee Name]</h5>
              <i className='text-gray-300'>Sales Officer</i>
              </center>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="p-4 w-full">
              <center>
              <TeamMember />
              <h5 className='font-medium text-sm mt-3'>[Employee Name]</h5>
              <i className='text-gray-300'>Sales Officer</i>
              </center>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6'>
          <div className="p-4 w-full flex justify-end">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Founder Name]</h5>
            <i className='text-gray-300'>Marketing Officer</i>
            </center>
          </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6'>
          <div className="p-4 w-full">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Founder Name]</h5>
            <i className='text-gray-300'>Marketing Officer</i>
            </center>
          </div>
          </div>
          <div className='col-4 '>
          <div className="p-4 w-full flex justify-left">
            <center>
            <TeamMember />
            <h5 className='font-medium text-sm mt-3'>[Founder Name]</h5>
            <i className='text-gray-300'>Marketing Officer</i>
            </center>
          </div>
          </div>
        </div>
    </>
  )
}
