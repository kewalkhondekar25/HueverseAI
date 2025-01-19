import ControlCenter from '@/components/controlCenter';
import { dallE } from '@/lib/const';
import React from 'react'

const page = async ({ params }: any) => {

  const { id } = await params;
  const image = dallE.data.data.find(item => item.id === parseInt(id))?.url;

  return (
    <div className='relative flex justify-center items-center'>
      <img
        src={image}
        alt="pic"
        className='h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] object-cover'
      />
      <div className='absolute right-0 top-0 p-3'>
        <ControlCenter/>
      </div>
    </div>
  )
}

export default page