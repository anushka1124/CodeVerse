'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowBigLeft } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { useParams } from 'next/navigation'
import { deleteChat } from '@/lib/serveractions'

const ChatTopBar = ({userProfile}:{userProfile:any}) => {
  const {id} = useParams<{id: string}>();
  const deleteChatHandler = deleteChat.bind(null, id);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Link href={'/chat'}>
          <ArrowBigLeft/>
        </Link>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src={userProfile.profilePhoto} alt="user"/>
          </Avatar>
          <p>{userProfile.fullname}</p>
        </div>
      </div>
      <form action={deleteChatHandler}>
        <SubmitButton/>
      </form>
    </div>
  )
}

export default ChatTopBar

const SubmitButton = () => {
  return (
    <Button variant={'destructive'}>
      clear Chat
    </Button>
  )
}