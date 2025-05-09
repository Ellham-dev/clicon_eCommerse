import { ArrowRight } from 'lucide-react'
import GamePress from '/GamePress.png'
import GooglePixel5 from '/GooglePixel5.png'
import AirBuds1 from '/Airbuds1.png'

const Hero = () => {
    return (
        <>
            <section>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex items-center gap-x-6">
                    {/* slider_part */}
                    <div className="bg-[#F2F4F5] flex items-center gap-x-9 p-[56px] max-w-[872px]">
                        {/* text_part */}
                        <div className="max-w-[356px]">
                            <span className='text-[#2484C2] text-sm leading-5 font-semibold mb-1'>--- THE BEST PLACE TO PLAY</span>
                            <h1 className='text-5xl leading-14 font-semibold text-[#191C1F] mb-4'>Xbox Consoles</h1>
                            <p className=' text-[#475156] text-lg leading-5 font-semibold mb-6'>Save up to 50% on select Xbox games.<br /> Get 3 months of PC Game Pass for $2 <br />USD.</p>
                            <div className="flex items-center justify-center gap-x-2 bg-[#FA8232] px-6 py-1.5 rounded-lg max-w-[192px] text-white">
                                <button className='font-bold leading-12 text-sm '>SHOP NOW</button>
                                <ArrowRight size={20} />
                            </div>
                        </div>
                        {/* img_part */}
                        <div className="relative">
                            <img src={GamePress} alt="" />
                            <p className='bg-[#2DA5F3] text-[22px] leading-[100px] font-semibold text-white rounded-full h-[100px] w-[100px] flex items-center justify-center absolute right-0 top-0'>$299</p>
                        </div>
                    </div>
                    {/* Hero_second_par */}
                    <div className="max-w-[424px]">
                        <div className="bg-[#191C1F] flex items-center justify-between relative mb-6">
                            <div className="pl-10 py-[46px]  ">
                                <span className='text-[#EBC80C] text-sm leading-5 font-medium mb-1'>Summer Sales</span>
                                <h1 className='max-w-[160px] text-2xl leading-8 font-semibold text-white mb-[18px]'>New Google Pixel 6 Pro</h1>
                                <div className="flex items-center justify-center gap-x-1 bg-[#FA8232] px-6 rounded-lg  text-white max-w-[156px]">
                                    <button className='font-bold leading-12 text-sm '>SHOP NOW</button>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0">
                                <img src={GooglePixel5} alt="" />
                            </div>
                        </div>
                        <div className="bg-[#F2F4F5] flex items-center justify-between py-10 pr-10 pl-8 gap-x-5 ">
                            <div className=" ">
                                <img src={AirBuds1} alt="" />
                            </div>
                            <div className=" ">
                                <h1 className='max-w-[172px] text-2xl leading-8 font-semibold text-[#191C1F] mb-3'>Xiaomi FlipBuds Pro</h1>
                                <p className='text-[#2DA5F3] font-semibold leading-[22px] text-lg mb-5'>$299 USD</p>
                                <div className="flex items-center justify-center gap-x-1 bg-[#FA8232] px-6 rounded-lg  text-white max-w-[156px]">
                                    <button className='font-bold leading-12 text-sm '>SHOP NOW</button>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Hero