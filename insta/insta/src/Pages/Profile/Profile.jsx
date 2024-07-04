import React from 'react'
import ProfileUserDetails from '../../Component/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Component/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
      <div className='px-20'>
        <ProfileUserDetails/>
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
    </div>
  )
}

export default Profile
