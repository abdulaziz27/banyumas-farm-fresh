import React from 'react'
import { useParams } from 'react-router-dom'
import SingleBanner from '../../components/UserProfile/SingleBanner'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import YourOrders from '../../components/UserProfile/YourOrders'
import UserAddress from '../../components/UserProfile/UserAddress'
import LegalNotice from '../../components/UserProfile/LegalNotice'
import Header from '../../common/header/Header'
import Wrapper from '../../components/wrapper/Wrapper'

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
        <Header/>
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        />
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'yourorders' && <YourOrders/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
        <Wrapper/>
        </div>
  )
}

export default UserProfile