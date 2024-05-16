import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import {formatDate } from '@/lib/utils';
import { IoSend, IoSendOutline } from 'react-icons/io5';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { MdCheckCircleOutline } from 'react-icons/md';

const Friend = ({user}: {user:any}) => {
  const lastMessage = user.lastMessage;
  const lastMessageType = lastMessage?.messageType

  const formattedDate = lastMessage ? formatDate(lastMessage?.createdAt) : formatDate(new Date());
  const amIsender = lastMessage && lastMessage?.senderId?._id !== user.participants[0]._id;
  const isMessageOpened = lastMessage?.opened;

  let messageStatus: string;
  let icon: JSX.Element;
  if(amIsender) {
    messageStatus = isMessageOpened ? 'Opened': 'Sent';
    icon = lastMessageType === 'text' ? 
    isMessageOpened ? <IoSend size={'16px'}/> : <IoSendOutline size={'16px'}/>
    :
    isMessageOpened ? <RiCheckboxBlankFill size={'16px'}/> : <MdCheckCircleOutline size={'16px'}/>
  }else {
    if(!lastMessage) {
      icon = <RiCheckboxBlankFill/>
      messageStatus = 'New Code'
    }
  }
  return (
    <Link href={`/chat/${user._id}`} className=' gap-2 flex items-center border-b-2 border-[#e3e6e8] my-2 p-3'>
      <div className='flex gap-2'>
        <Avatar>
          <AvatarImage src={user.participants[0].profilePhoto} alt={'profilePhoto'}/>
        </Avatar>
      </div>
      <div>
        <p className='font-medium'>{user.participants[0].fullname}</p>
        <p className={`${messageStatus === 'New Code' ? 'text-purple-500' : 'null'} text-xs font-bold text-gray-500 gap-1 flex`}>
          <span className={`${messageStatus === 'New Code' ? 'hidden' : 'null'}`}>{icon}</span>
          {
            messageStatus === 'New Code' ? <span>{messageStatus}</span> : <span>{messageStatus} - {formattedDate}</span>
          }
        </p>
      </div>
    </Link>
  )
}

export default Friend
