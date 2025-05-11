import { ArrowRight } from 'lucide-react'
import TimerOnly from './TimerOnly'
import HotDealsProduct from './HotDealsProduct'

const BestDeals = () => {
    return (
        <>
            <section>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-x-6">
                            <h5 className='text-2xl leading-8 font-semibold text-[#191C1F]'>Best Deals</h5>
                            <span className="text-sm leading-5 text-black">Deals ends in</span>
                            <TimerOnly targetDate="2025-05-31T23:59:59" />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <h6 className='text-[#2DA5F3] text-sm leading-5 font-semibold'>Browse All Product</h6>
                            <ArrowRight color='#2DA5F3'/>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <HotDealsProduct/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestDeals