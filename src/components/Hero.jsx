import { ArrowRight } from 'lucide-react'
import GamePress from '/GamePress.png'

const Hero = () => {
    return (
        <>
            <section>
                <div className="max-w-[1320px] mx-auto">
                    {/* slider_part */}
                    <div className="bg-[#F2F4F5] flex items-center gap-x-9 p-[56px] max-w-[872px]">
                        {/* text_part */}
                        <div className="max-w-[356px]">
                            <span className='text-[#2484C2] text-sm leading-5 font-semibold mb-1'>--- THE BEST PLACE TO PLAY</span>
                            <h1 className='text-5xl leading-14 font-semibold text-[#191C1F] mb-4'>Xbox Consoles</h1>
                            <p className=' text-[#475156] text-lg leading-5 font-semibold mb-6'>Save up to 50% on select Xbox games.<br/> Get 3 months of PC Game Pass for $2 <br/>USD.</p>
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
                    <div className="">
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero