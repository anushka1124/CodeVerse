import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";

const Signup = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-medium my-2'>Sign up to CodeVerse</h1>
      <Button className='w-full my-4 gap-2'>Signup with Github <IoLogoGithub size="20px" /></Button>
      <p>Already have an account? <Link href={'/login'} className='underline'>Login</Link></p>
    </div>
  )
}

export default Signup
