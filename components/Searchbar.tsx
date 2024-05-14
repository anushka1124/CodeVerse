import React from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

const Searchbar = () => {
  return (
    <div>
      <div className='flex items-center gap-2 bg-[#e3e6e8] rounded-lg px-2 py-3'>
        <SearchIcon />
        <Input
            type='text'
            placeholder='Start new Chat 💬'
            className='bg-transparent outline-none w-full'
        />
      </div>
    </div>
  )
}

export default Searchbar
