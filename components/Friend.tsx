import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

const Friend = ({user}: {user:any}) => {
  return (
    <Link href={`/chat/${user._id}`} className=' gap-2 flex items-center border-b-2 border-[#e3e6e8] my-2 p-3'>
      <div className='flex gap-2'>
        <Avatar>
          <AvatarImage src={user.participants[0].profilePhoto} alt={'profilePhoto'}/>
        </Avatar>
      </div>
      <div>
        <p className='font-medium'>{user.participants[0].fullname}</p>
        <p className='text-xs font-bold text-gray-500 gap-1 flex'>sent</p>
      </div>
    </Link>
  )
}

export default Friend
