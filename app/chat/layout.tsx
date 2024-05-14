import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex h-screen'>
        <LeftSidebar/>
        {children}
    </div>
  )
}

export default layout
