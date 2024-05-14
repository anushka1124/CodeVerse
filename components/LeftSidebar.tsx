import React from 'react'
import LogoutButton from "./shared/LogoutButton"
import Searchbar from './Searchbar'
import Friends from './Friends'
import { auth } from '../auth'
import {
    Avatar,
    AvatarImage,
  } from "@/components/ui/avatar"

const leftSidebar = async () => {
    const authUser = await auth();
  return (
    <div className='w-[25%] m-2 border-2 border-gray-300 rounded-lg'>
      <div className='flex p-4 item-center justify-between border-b border-gray-300 pb-3'>
        <div className='flex items-center gap-2'>
            {
                authUser && (
                    <>
                        <Avatar>
                            <AvatarImage src={authUser.user?.image!} alt="@shadcn" />
                        </Avatar>
                        <p className='font-medium'>{authUser.user?.name}</p>
                    </>
                )
            }
        </div>
        <div>
            <LogoutButton />
        </div>
      </div>
      <div className='p-2'>
        <Searchbar />
        <Friends/>
      </div>
    </div>
  )
}

export default leftSidebar
