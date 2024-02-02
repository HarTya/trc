import Image from 'next/image'

export default function Loading() {
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
