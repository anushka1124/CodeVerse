import React from 'react'

const ChatBody = async ({message, authUser}: {message: any, authUser: any}) => {
  return (
    <div className='flex-1 my-3 border-2 border-gray-300 overflow-y-auto p-2 rounded-lg'>
      { 
        message.map((messages:any, index: number) => {

          // const me = messages.senderId._id === authUser.user?._id;
          const me = messages.senderId._id !== authUser.user?._id;
          const isMessageType = messages.messageType === 'image';
          const isPrevMessageFromSameUser = index > 0 && message[index-1].senderId._id == messages.senderId._id;
          return (
            <div className='w-full'>
              {
                !isPrevMessageFromSameUser && (
                  <p className= {`font-bold mt-2 text-xs ${me? 'text-[#969696]': 'text-[#000000]'}`}>{me ? "me": "friend"}</p>
                )
              }
              <div className={`border-l-2 ${me? 'border-l-[#969696]' : 'border-l-[#000000]'}`}>
                <div className='flex items-center w-1/2 p-2 rounded-sm'>
                  <p>{messages.content}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatBody
