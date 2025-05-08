import React from 'react'
import Popup from './Popup'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import LanguageCurrencySelector from './LanguageCurrencySelector'
import CliconLogo from '/CliconLogo.png'
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react'

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
        </>
    )
}

export default Header