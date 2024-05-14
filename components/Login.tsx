import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";

const login = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-medium my-2'>Login to CodeVerse</h1>
      <Button className='w-full my-4 gap-2'>Login with Github <IoLogoGithub size="20px"/></Button>
      <p>New to CodeVerse? <Link href={'/signup'} className='underline'>Signup</Link></p>
    </div>
  )
}

export default login
