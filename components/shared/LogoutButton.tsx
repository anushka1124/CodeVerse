import React from 'react'
import { Button } from '../ui/button';
import { IoIosLogOut } from "react-icons/io";
import {logoutHandler} from '@/lib/serveractions'

const LogoutButton = () => {
    //inline server action
    // const logoutHandler = async() => {
    //     'use server'
    //     try {
    //         await signOut();
    //     } catch (error) {
    //         console.log("error in logout",error)
    //         throw error;
    //     }

    //     redirect("/login");
    // }

  return (
    <form action={logoutHandler}>
        <Button><IoIosLogOut /></Button>
    </form>
  )
}

export default LogoutButton
