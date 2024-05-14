import { auth } from '@/auth';
import ChatPage from '@/components/ChatPage';
import { getMessage } from '@/lib/messagedata';
import { getProfileUser } from '@/lib/userdata';
import React from 'react'

const page = async ({params}: {params: {id: string}}) => {
    const {id} = params;
    let userProfile = await getProfileUser(id);

    const authUser = await auth();
    const message = authUser ? await getMessage(authUser?.user?._id, id) : [];

    console.log(message);
    
  return (
    <div className='w-[72%]'>
      <ChatPage userProfile={userProfile} message={message} authUser={authUser}/>
    </div>
  )
}

export default page
