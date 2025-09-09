import React, { ReactNode } from 'react'



const DashboardWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex'>
        <div>Siderbar</div>
        <div>Navbar</div>
        <div>{children}</div>
    </div>

  )
}

export default DashboardWrapper