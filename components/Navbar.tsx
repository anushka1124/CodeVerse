import React from 'react'
import Logo from "@/public/Logo.png"
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BsThreeDotsVertical } from "react-icons/bs";
import LogoutButton from './shared/LogoutButton'
import { auth } from '@/auth'
import Link from 'next/link'

const Navbar = async () => {
  const authUser = await auth();
  return (
    <div className='flex items-center justify-between w-screen px-10 py-4'>
      <div className='flex items-center gap-2'>
        <Image 
            src={Logo} 
            alt='Logo' 
            width={50} 
            height={50}
        />
        <Input placeholder='Search'/>
      </div>
      <div>
        <Button variant={'ghost'}>Stories</Button>
        <Button variant={'ghost'}>Spotlight</Button>
        <Button variant={'ghost'}>Chat</Button>
        <Button variant={'ghost'}>Lenses</Button>
      </div>
      <div className='flex items-center gap-5'>
        <Button variant={'secondary'} className='bg-white text-black'>
          <BsThreeDotsVertical />
        </Button>
        <Button>Ads</Button>
        <Button>Download</Button>
        {
          authUser ? 
          <LogoutButton/> 
            :
          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
