import React from 'react'
import Popup from './Popup'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import LanguageCurrencySelector from './LanguageCurrencySelector'

const Header = () => {
    return (
        <>
            <header>
                <Popup />
                <div className="bg-[#1B6392]">
                    <div className="max-w-[1320px] mx-auto">
                        <div className="flex items-center justify-between">
                            <h5 className='text-sm leading-5 text-white'>Welcome to Clicon online eCommerce store. </h5>
                            <div className="flex items-center gap-x-6">
                                <div className="flex items-center gap-x-3">
                                    <span className='text-sm leading-5 text-white'>Follow us:</span>
                                    <FaTwitter color='white' size={16} />
                                    <FaFacebook color='white' size={16} />
                                    <FaPinterest color='white' size={16} />
                                    <FaLinkedin color='white' size={16} />
                                    <FaYoutube color='white' size={16} />
                                    <FaInstagramSquare color='white' size={16} />
                                </div>
                                <div className="">
                                    <LanguageCurrencySelector />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header