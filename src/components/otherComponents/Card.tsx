import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-20'>
      <div className='pb-16'>
        <div className='text-white text-center text-sm md:text-xl'>
        Soon to be launched

        </div>
        <div className='text-white text-4xl md:text-6xl font-bold'>
        Trending NFTs Collection
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div><Image src={"/c6.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
        <div><Image src={"/c5.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
        <div><Image src={"/c4.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
        <div><Image src={"/c3.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
        <div><Image src={"/c2.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
        <div><Image src={"/c1.svg"} alt='card_image' width={500} height={609} loading="lazy" /></div>
      </div>
    </div>
  )
}

export default Card
