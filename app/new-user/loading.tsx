import React from 'react'
import { Loader2Icon } from 'lucide-react'
const Loading = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <Loader2Icon className='size-8 animate-spin' />
    </div>
  )
}

export default Loading