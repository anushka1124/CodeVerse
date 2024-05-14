import React from 'react'
import ChatTopBar from './ChatTopBar'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

const ChatPage = ({userProfile, message, authUser}:{userProfile:any, message: any, authUser:any}) => {
  return (
    <div className='m-2 flex flex-col h-[96%]'>
      <ChatTopBar userProfile={userProfile}/>
      <ChatBody message={message} authUser={authUser}/>
      <ChatInput/>
    </div>
  )
}

export default ChatPage
