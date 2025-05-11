import { CreditCard, Headset, Trophy, Truck } from 'lucide-react'

const Service = () => {
    return (
        <>
            <section>
                <div className="max-w-[1320px] mx-auto mb-[72px]">
                    <div className="flex items-center justify-between border border-[#E4E7E9] p-8">
                        <div className="flex items-center gap-x-4">
                            <Truck color='#191C1F'size={40} />
                            <div className="">
                                <h6 className='text-sm leading-5 font-medium text-[#191C1F] mb-1'>Fasted Delivery</h6>
                                <p className='text-sm leading-5 text-[#5F6C72]'>Delivery in 24/H</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <Trophy  color='#191C1F'size={40} />
                            <div className="">
                                <h6 className='text-sm leading-5 font-medium text-[#191C1F] mb-1'>24 Hours Return</h6>
                                <p className='text-sm leading-5 text-[#5F6C72]'>100% money-back guarantee</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <CreditCard color='#191C1F'size={40} />
                            <div className="">
                                <h6 className='text-sm leading-5 font-medium text-[#191C1F] mb-1'>Secure Payment</h6>
                                <p className='text-sm leading-5 text-[#5F6C72]'>Your money is safe</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <Headset color='#191C1F'size={40} />
                            <div className="">
                                <h6 className='text-sm leading-5 font-medium text-[#191C1F] mb-1'>Support 24/7</h6>
                                <p className='text-sm leading-5 text-[#5F6C72]'>Live contact/message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service