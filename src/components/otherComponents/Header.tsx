import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    return (
        <>


            <div className='w-full hidden md:flex justify-between px-28 pt-5 items-center text-white'>
                <div><Image src={'/logo.png'} alt='logo' height={70} width={100} /></div>
                <div className='flex space-x-6 text-[20px] items-center'>
                    <div>
                        Search
                    </div>
                    <div>
                        All Chains
                    </div>
                </div>
                <div className='flex space-x-6 text-[20px] items-center'>
                    <div className=''>
                        <Switch />

                    </div>
                    <div>devnet</div>
                    <div >
                        <Button className='text-[20px] bg-gradient-to-r from-[#FF00EA] via-[#842A7C] to-[#1E1629] border-[#FF00EA] border-1'>Join Waitlist</Button>

                    </div>
                </div>
            </div>



            <div className="flex justify-between items-center md:hidden pt-5">
                <div className="pl-6 pt-4 w-[100px] h-[100px]">
                    <Image src={"/logo.png"} alt="logo" width={100} height={100} />
                </div>

                <div className="grid grid-cols-2 gap-2  pt-0">

                    <Sheet key={"left"}>
                        <SheetTrigger asChild>
                            <GiHamburgerMenu size={30} color='white'/>

                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>    <Image src={"/logo.png"} alt="logo" width={200} height={200} />
                                </SheetTitle>
                                <SheetDescription>
                                    Unlock Unique NFTs
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4 px-4">
                                <div className="grid grid-cols-4 items-center gap-4 text-xl">

                                    Search


                                </div>
                                <div className="grid grid-cols-4 items-center gap-4 text-xl">

                                    AllChains


                                </div>
                                <div className="flex items-center gap-4 text-xl ">
                                <div className='space-x-2'>
                                    <span>
                                        devnet
                                    </span>
                                    <span>
                                        <Switch />
                                    </span>
                                    
                                    </div>
                                <div></div>

                                

                                </div>

                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button className='text-[20px] bg-gradient-to-r from-[#FF00EA] via-[#842A7C] to-[#1E1629] border-[#FF00EA] border-1'>Join Waitlist</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </>


    )
}

export default Header
