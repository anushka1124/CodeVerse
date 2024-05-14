import React from 'react'
import Login from '@/components/Login'
import { signIn } from '@/auth'

const LoginPage = () => {

  const loginHandler = async () => {
    'use server'
    await signIn('github');
  }

  return (
    <form action={loginHandler}>
      <Login/>
    </form>
  )
}

export default LoginPage
