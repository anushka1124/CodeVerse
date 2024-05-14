import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo.png'

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='bg-gray-300 h-screen'>
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='bg-white p-10 flex flex-col items-center text-center shadow-lg rounded-md'>
                <Image
                    src={Logo}
                    alt='Logo'
                    width={100}
                    height={100}
                />
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout
