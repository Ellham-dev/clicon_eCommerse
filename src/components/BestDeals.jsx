import { ArrowRight } from 'lucide-react'
import TimerOnly from './TimerOnly'
import HotDealsProduct from './HotDealsProduct'
import SingleProduct from './SingleProduct'
import Drone1 from '/Drone1.png'
import Mobail1 from '/Mobail1.png'
import Gemmer from '/Gemmer.png'
import VivoPhone from '/VivoPhone.png'
import Drone2 from '/Drone2.png'
import PC from '/PC.png'
import CCTV from '/CCTV.png'

const BestDeals = () => {
    return (
        <>
            <section>
                <div className="max-w-[1320px] mx-auto mb-[72px]">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-x-6">
                            <h5 className='text-2xl leading-8 font-semibold text-[#191C1F]'>Best Deals</h5>
                            <span className="text-sm leading-5 text-black">Deals ends in</span>
                            <TimerOnly targetDate="2025-05-31T23:59:59" />
                        </div>
                        <div className="flex items-center gap-x-2 cursor-pointer">
                            <h6 className='text-[#2DA5F3] text-sm leading-5 font-semibold'>Browse All Product</h6>
                            <ArrowRight color='#2DA5F3' />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <HotDealsProduct />
                        </div>
                        <div className="flex flex-wrap">
                            <SingleProduct
                                Src={Drone1}
                                ProductName={"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."}
                                ProductPrice={"2,300"}
                            />
                            <SingleProduct
                                Src={Mobail1}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={"30 %OFF"}
                                badgeClass={"bg-[#EFD33D]"}
                            />
                            <SingleProduct
                                Src={Gemmer}
                                ProductName={"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."}
                                ProductPrice={"2,300"}
                                discountTxt={"SOLD"}
                                badgeClass={"bg-[#929FA5] text-white"}
                            />
                            <SingleProduct
                                Src={VivoPhone}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={"10 %OFF"}
                                badgeClass={"bg-[#EFD33D]"}
                            />
                            <SingleProduct
                                Src={Drone2}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={""}
                                badgeClass={""}
                            />
                            <SingleProduct
                                Src={PC}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={"45 %OFF"}
                                badgeClass={"bg-[#EFD33D]"}
                            />
                            <SingleProduct
                                Src={CCTV}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={""}
                                badgeClass={""}
                            />
                            <SingleProduct
                                Src={Mobail1}
                                ProductName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                                ProductPrice={"290"}
                                discountTxt={""}
                                badgeClass={""}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestDeals