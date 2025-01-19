import Composer from '@/components/composer'
import { dallE } from '@/lib/const'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-screen'>
      <div className='grid grid-cols-2 gap-1 w-full h-full justify-center place-items-center'>
        {
          dallE.data.data.map(item => {
            return (
              <Link href={`/txt-to-img/${item.id}`} key={item.url}>
                <img
                  src={item.url}
                  alt='pic'
                  className='hover:cursor-pointer'
                />
              </Link>
            )
          })
        }

      </div>
      <div className='fixed w-full left-1/3 bottom-1'>
        <Composer />
      </div>
    </div>
  )
}

export default page