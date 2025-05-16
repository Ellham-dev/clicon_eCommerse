import { ArrowRight } from 'lucide-react'
import FutureProductPromoImage from '/FutureProductPromoImage.png'

const FeaturesProducts = () => {
  return (
    <>
      <section>
        <div className="max-w-[1320px] mx-auto ">
          <div className="flex gap-x-6 justify-between">
            <div className="cursor-pointer max-w-[312px]">
              <img src={FutureProductPromoImage} alt="" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h5 className='text-2xl leading-8 font-semibold text-[#191C1F]'>Featured Products</h5>
                <div className="flex items-center gap-x-4">
                  <ul className='flex items-center gap-x-2 text-sm leading-5 text-[#5F6C72] cursor-pointer'>
                    <li className='text-[#191C1F] border-b-2 border-[#FA8232] '>All Product</li>
                    <li>Smart Phone</li>
                    <li>Laptop</li>
                    <li>Headphone</li>
                    <li>TV</li>
                  </ul>
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <h6 className='text-[#FA8232] text-sm leading-5 font-semibold'>Browse All Product</h6>
                    <ArrowRight color='#FA8232' />
                  </div>
                </div>
              </div>
              <div className="">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesProducts