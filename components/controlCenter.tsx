import React from 'react'
import { Heart, Share, Download } from 'lucide-react'

const ControlCenter = () => {
  return (
    <div className='flex justify-center items-center gap-5 hover:cursor-pointer'>
      <Heart className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
      <Share className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
      <Download className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
    </div>
  )
}

export default ControlCenter
{/* <Heart className='fill-white'/> */ }