'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const { replace } = useRouter()

  useEffect(() => {
    replace('/', { scroll: false })
  }, [])

  return (
    <div className='loader'>
      <Image
        src='/loader.svg'
        alt=''
        width={100}
        height={100}
        draggable={false}
        quality={100}
      />
    </div>
  )
}
