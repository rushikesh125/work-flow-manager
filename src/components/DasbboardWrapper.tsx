import React, { ReactNode } from 'react'



const DashboardWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex w-full bg-gray-50 min-h-screen text-gray-900'>
        <div className=''>Siderbar</div>
        <main className='dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64'>Navbar</main>
        <div>{children}</div>
    </div>

  )
}

export default DashboardWrapper