import { Eye, Heart, ShoppingCart } from 'lucide-react'
import DiscountBadge from './DiscountBadge'
import xBox1 from '/xBox1.png'
import { FaStar } from 'react-icons/fa'

const HotDealsProduct = () => {
    return (
        <>
            <div className="max-w-[330px] border border-[#E4E7E9] p-6 relative">
                <div className=" mb-6">
                    <img src={xBox1} alt="" />
                    <div className="absolute left-4 top-4">
                        <DiscountBadge DiscountNum={32} className={'mb-2'} />
                        <p className='bg-[#EE5858] text-white text-[12px] leading-4 font-semibold max-w-[46px] px-2.5 py-1 rounded-sm'>HOT</p>
                    </div>
                </div>
                <div className="">
                    <div className="text-[#EBC80C] flex items-center gap-x-0.5 mb-1.5">
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <FaStar size={20} />
                        <p className='text-[#77878F] text-sm leading-5'>(52,376)</p>
                    </div>
                    <h3 className='text-lg leading-6 text-[#191C1F] mb-3'>Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</h3>
                    <div className="flex items-center gap-x-1 mb-3">
                        <p className='text-base leading-6 text-[#ADB7BC] line-through'>$865.99</p>
                        <p className='text-lg leading-6 font-semibold text-[#2DA5F3]'>$442.12</p>
                    </div>
                    <p className='text-[#5F6C72] text-sm leading-5 mb-6'>Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
                    <div className="flex items-center gap-x-2 rounded-lg">
                        <div className="bg-[#FFE7D6] p-3">
                            <Heart size={24} color='#191C1F'/>
                        </div>
                        <div className="bg-[#FA8232] p-3 flex items-center text-white space-x-1 rounded-lg">
                            <ShoppingCart size={24}/>
                            <p className='text-sm font-bold tracking-[1.2%]'>ADD TO CARD</p>
                        </div>
                        <div className="bg-[#FFE7D6] p-3 rounded-lg">
                            <Eye size={24} color='#191C1F'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotDealsProduct