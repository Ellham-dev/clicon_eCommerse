import { ArrowRight } from 'lucide-react'
import DiscountBadge from './DiscountBadge'
import Homepod from '/Homepod.png'

const IntroductNewProduct = () => {
  return (
    <>
      <section>
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-[#F2F4F5] flex items-center justify-between max-w-[648px] p-[46px] rounded-sm">
            {/* textpart */}
            <div className="max-w-[280px]">
              <DiscountBadge
                className={"bg-[#2DA5F3] text-white w-[123px] text-sm leading-5 mb-2"}
                DiscountNum={"INTRODUCING"}
              />
              <h3 className='text-[32px] leading-10 font-semibold text-[#191C1F] mb-3'>New Apple Homepod Mini</h3>
              <p className='text-base leading-6 text-[#475156] mb-5'>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
              <div className="flex items-center justify-center gap-x-1 bg-[#FA8232] px-6 rounded-lg  text-white max-w-[156px] cursor-pointer">
                <button className='font-bold leading-12 text-sm '>SHOP NOW</button>
                <ArrowRight size={20} />
              </div>
            </div>
            {/* imgpart */}
            <div className="">
              <img src={Homepod} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IntroductNewProduct