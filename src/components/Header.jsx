import React from 'react'
import Popup from './Popup'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import LanguageCurrencySelector from './LanguageCurrencySelector'
import CliconLogo from '/CliconLogo.png'
import { ChevronDown, Headphones, Heart, Info, MapPin, Phone, Search, ShoppingCart, UserRound } from 'lucide-react'
import { IoIosGitCompare } from 'react-icons/io'

const Header = () => {
    return (
        <>
            <header>
                <Popup />

                <div className="bg-[#1B6392]">
                    <div className="max-w-[1320px] mx-auto">
                        {/* heading_first_Part */}
                        <div className="flex items-center justify-between">
                            <h5 className='text-sm leading-5 text-white'>Welcome to Clicon online eCommerce store. </h5>
                            <div className="flex items-center gap-x-6 ">
                                <div className="flex items-center gap-x-3 border-r border-[#FFFFFF] pr-6">
                                    <span className='text-sm leading-5 text-white'>Follow us:</span>
                                    <FaTwitter color='white' size={16} className='cursor-pointer' />
                                    <FaFacebook color='white' size={16} className='cursor-pointer' />
                                    <FaPinterest color='white' size={16} className='cursor-pointer' />
                                    <FaLinkedin color='white' size={16} className='cursor-pointer' />
                                    <FaYoutube color='white' size={16} className='cursor-pointer' />
                                    <FaInstagramSquare color='white' size={16} className='cursor-pointer' />
                                </div>
                                <div className="">
                                    <LanguageCurrencySelector />
                                </div>
                            </div>
                        </div>
                        {/* heading_second_Part */}

                    </div>
                </div>
            </header>
            <header className='bg-[#1B6392] border-t border-[#F2F4F5]'>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex items-center justify-between py-5  ">
                        <div className="">
                            <img src={CliconLogo} alt="" className='cursor-pointer' />
                        </div>
                        <div className="flex items-center justify-between bg-white w-[653.5px] px-5 py-3.5">
                            <input type="text" placeholder='Search for anything...' className='text-[#77878F] text-sm leading-5 w-full outline-none' />
                            <Search size={20} color='#191C1F' className='cursor-pointer' />
                        </div>
                        <div className="flex items-center gap-x-6 text-white">
                            <ShoppingCart size={32} className='cursor-pointer' />
                            <Heart size={32} className='cursor-pointer' />
                            <UserRound size={32} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </header>
            <section className='flex items-center justify-between max-w-[1320px] mx-auto py-4'>
                <div className="flex items-center gap-x-6">
                    <div className="flex items-center gap-x-1.5 bg-[#F2F4F5] px-6 py-3.5 text-[#191C1F] cursor-pointer">
                        <span className='text-sm leading-5 font-medium'>All Category</span>
                        <ChevronDown size={16} />
                    </div>
                    <div className="flex items-center gap-x-1.5 text-[#5F6C72] cursor-pointer">
                        <MapPin size={24} />
                        <span className='text-sm leading-5 '>Track Order </span>

                    </div>
                    <div className="flex items-center gap-x-1.5 text-[#5F6C72] cursor-pointer">
                        <IoIosGitCompare size={24} />
                        <span className='text-sm leading-5 '>
                            Compare</span>
                    </div>
                    <div className="flex items-center gap-x-1.5 text-[#5F6C72] cursor-pointer">
                        <Headphones size={24} />
                        <span className='text-sm leading-5 '>Customer Support</span>
                    </div>
                    <div className="flex items-center gap-x-1.5 text-[#5F6C72] cursor-pointer">
                        <Info size={24} />
                        <span className='text-sm leading-5 '>Need Help</span>
                    </div>

                </div>
                <div className="flex items-center gap-x-2 text-[#191C1F] cursor-pointer">
                <Phone />
                <span className='text-lg leading-6'>+1-202-555-0104</span>
                </div>
            </section>
        </>
    )
}

export default Header