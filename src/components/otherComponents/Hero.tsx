"use client"
import React from 'react'
import Image from 'next/image'
import { useState , useEffect , useCallback , useMemo } from 'react';
interface HeroProps {
    targetDate?: Date | string; // ✅ Specify proper types
  }
  
  const Hero: React.FC<HeroProps> = ({ targetDate }) => {
    // ✅ Ensure `targetDate` is a valid Date object
    const validTargetDate = useMemo(() => {
      if (targetDate instanceof Date) return targetDate;
      if (typeof targetDate === "string") return new Date(targetDate);
      return new Date();
    }, [targetDate]);
  
    const calculateTimeLeft = useCallback(() => {
      const difference = validTargetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        return { day: 0, hrs: 0, min: 0, sec: 0 };
      }
      return {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / (1000 * 60)) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }, [validTargetDate]);
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    
  return (
    <div className='bg-gradient-to-r gap-24 from-[#1E1629] w-full via-[#FF00EA] px-2 md:px-16 to-[#1E1629] md:mx-28 md:max-w-[1120px] border-[#FF00EA] border-1 rounded-4xl backdrop-blur-2xl  shadow-[#1E1629] shadow-2xl mt-10 flex flex-col md:flex-row'>
      <div className='md:pt-28 md:pb-20 pt-10 '>
        <div className='text-white text-3xl md:text-[45px] font-bold'>Unlock Unique NFTs - </div>
        <div className='text-black text-3xl md:text-5xl font-bold pt-3'>Exclusive <span className='pl-3'>Rewards</span></div>
        <div className='text-white pb-5 pt-4'>We create exclusive, next-gen NFTs powered by <br />
        cutting-edge blockchain technology.</div>
        <div className='text-white pl-5 font-semibold'><Image src={"/tick.svg"} alt={"tick"} width={30} height={30} priority={true} /> Rare & Exclusive NFTs</div>
        <div className='text-white pl-5 font-semibold'><Image src={"/tick.svg"} alt={"tick"} width={30} height={30} priority={true} /> Secure & Transparent</div>
        <div className='text-white pl-5 font-semibold'><Image src={"/tick.svg"} alt={"tick"} width={30} height={30} priority={true}  /> Early Access Benefits</div>
      </div>


      <div className=' pb-20 flex flex-col text-center items-center md:w-auto w-full'>
        <div>
        <Image src={"/heroimage.svg"} alt={"tick"} width={400} height={200} priority={true}  />
        </div>
        <div className='bg-[#1E1629] rounded-2xl text-center pt-5 pb-10 mt-5 flex flex-col w-full'>
        
        <div className='flex flex-col gap-y-5 items-center justify-between px-7'>
            <div>
        <div className=''>
        <Image src={"/comingsoon.svg"} alt={"tick"} width={300} height={200} priority={true} />
        </div>
        </div>
        <div className="flex gap-5 w-full justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-gradient-to-b from-[#FF00EA] via-[#FF00EA] to-[#1E1629] text-white p-2  w-16 h-20  md:w-[77px] md:h-[80px] font-bold border-[#FF00EA] border-1 flex flex-col items-center justify-center"
        >
          <div className="text-3xl">{value}</div>
          <div className="text-2xl capitalize">{unit}</div>
        </div>
      ))}
    </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
