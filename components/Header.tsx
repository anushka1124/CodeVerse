import React from 'react'
import code from '@/public/Code.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaLaptopCode } from "react-icons/fa6";
import Link from 'next/link';
import { auth } from '@/auth';
import { MdOutlineMarkChatUnread } from "react-icons/md";

const Header = async () => {
  const authUser = await auth();
  console.log(authUser);

  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
      <div>
        <h1 className='text-7xl font-medium'>CodeVerse is <br /> To connect Coders <br /> 👩🏻‍💻</h1>
        <p className='my-5 text-xl'>Bringing coders together to share their <br /> expertise in a dynamic way</p>
        {
          authUser ? 
          <Link href={"/login"}> <Button className='gap-2'>start chat <MdOutlineMarkChatUnread /></Button> </Link>
           : 
          <Link href={"/login"}> <Button className='gap-2'>Login to chat <FaLaptopCode /></Button> </Link>
        }
      </div>
      <div>
        <Image 
            src={code}
            alt='Coding-picture'
            width={650}
            height={650}
        />
      </div>
    </div>
  )
}

export default Header
