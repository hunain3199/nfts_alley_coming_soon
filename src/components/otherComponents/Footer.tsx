import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#842A7C] justify-between to-[#1E1629]  md:max-w-[1120px]  flex flex-col md:flex-row px-10 md:px-28 pt-20 pb-20 text-white mx-6 md:mx-28 " >
      <div className='flex flex-col'>
        <div className='pb-10 '>
            <Image src={'/logo.png'} alt='' height={70} width={100}/>
        </div>
        <div className='pb-5 text-xl'>
        BRD is the world&apos;s leading NFTs marketplace where <br />
        you can discover, sell and bid NFTs and get rich.
        </div>
        <div className='flex gap-4 pb-5'>
            <div><Image src={'/youtube.png'} alt='' height={30} width={30}/></div>
            <div><Image src={'/twitter.png'} alt='' height={30} width={30}/></div>
            <div><Image src={'/facebook.png'} alt='' height={30} width={30}/></div>
            <div><Image src={'/google.png'} alt='' height={30} width={30}/></div>
        </div>
        <div className='pb-5 text-xl'>
        <span>All rights reserved<Link href="https://brdigitech.com" > Brdigitech</Link></span>

        </div>
      </div>

      <div className='flex flex-col'>
        <div className='font-bold text-3xl pb-10'>About</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>About NFT</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Live Auctions</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>NFT Blog</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Activity</div>
      </div>

      <div className='flex flex-col'>
        <div className='font-bold text-3xl pb-10'>Support</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Help & Support</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Items Details</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Author Profile</div>
        <div className='pb-5 text-xl text-[#9B9B9B]'>Collection</div>
      </div>
    </div>
  )
}

export default Footer
