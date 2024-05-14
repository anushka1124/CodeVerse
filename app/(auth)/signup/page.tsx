import React from 'react'
import Signup from '@/components/Signup'
import { signIn } from '@/auth'

const SignupPage = () => {

  const signupHandler = async () => {
    'use server'
    await signIn('github');
  }

  return (
    <form action={signupHandler}>
      <Signup/>
    </form>
  )
}

export default SignupPage
