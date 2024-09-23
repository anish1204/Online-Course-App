import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 bg-white flex rounded-2xl justify-between '>

      <div className='flex gap-2 border-none round-md p-2'>
        <Search className='h-5 w-5 border border-none' />
        <input className='outline-none border border-1' type='text' placeholder='Search..' />

      </div>

      <div className='flex items-center gap-4'>
        <BellDot/>
        <Button>Get Started</Button>
      </div>
    
    </div>
   
  )
}

export default Header