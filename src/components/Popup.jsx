import React from 'react'
import PopupLogo1 from '/PopupLogo1.png'
import PopupLogo2 from '/PopupLogo2.png'
import { ArrowBigRight, ArrowRight } from 'lucide-react'

const Popup = () => {
    return (
        <>
            <section className='bg-[#191C1F]'>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex items-center justify-between py-[19px]">
                        <div className="flex items-center gap-x-3">
                            <img src={PopupLogo1} alt="" />
                            <img src={PopupLogo2} alt="" />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <h6 className='font-medium leading-5 text-sm text-[#FFFFFF]'>Up to</h6>
                            <h5 className='font-semibold leading-12 text-[40px] text-[#EBC80C]'>59%</h5>
                            <span className='font-semibold leading-[28px] text-xl text-[#FFFFFF]'>OFF</span>
                        </div>
                        <div className="flex items-center gap-x-2 bg-[#EBC80C] px-6 py-1.5 rounded-lg cursor-pointer">
                            <button className='font-bold leading-12 text-sm cursor-pointer'>SHOP NOW</button>
                            <ArrowRight size={20}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popup