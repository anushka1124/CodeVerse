import React from 'react'
import Link from 'next/link'
import { ArrowBigLeft } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

const ChatTopBar = ({userProfile}:{userProfile:any}) => {
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
      <form>
        <SubmitButton/>
      </form>
    </div>
  )
}

export default ChatTopBar

const SubmitButton = () => {
  return (
    <Button>
      submit
    </Button>
  )
}