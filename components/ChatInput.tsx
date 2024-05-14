'use client';
import React, { useState } from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import { Button } from './ui/button'
import EmojiPopover from './EmojiPopover'
import { sendMessage } from '@/lib/serveractions';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoaing] = useState(false);
  const params = useParams<{id: string}>();
  const receiverId = params.id;
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //module level
    try {
      setLoaing(true);
      //send snap here using server action 
      await sendMessage(inputText, 
        receiverId, 
        "text"
      );

      setInputText("");
    } catch (error) {
      console.log(error);
      throw error;
    }finally {
      setLoaing(false);
    }
  }
  return (
    <div className='flex justify-between items-center gap-2'>
      <div className='p-2 cursor-pointer bg-gray-200 rounded-full'>
        <MdPhotoCamera size={24}/>
      </div>
      <form onSubmit={submitHandler} className='w-full'>
        <div className='flex items-center gap-4'>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type='text'
            placeholder='send doubts here...'
            className='rounded-full w-full border-gray-400 p-2 outline-none font-medium'
          />
          {
            loading ? 
            (
              <Button>
                <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                Please wait
              </Button>
            ) : 
            (
              <Button type='submit'>Send</Button>
            )
          }
        </div>
      </form>
      <div>
        {/* <EmojiPopover/> */}
      </div>
    </div>
  )
}

export default ChatInput
