import { ArrowRight } from 'lucide-react'
import FutureProductPromoImage from '/FutureProductPromoImage.png'
import SingleFutureProduct from './SingleFutureProduct'
import TozoT6Phone from '/TozoT6Phone.png'
import VivoPhone from '/VivoPhone.png'
import Gemmer from '/Gemmer.png'
import Drone2 from '/Drone2.png'
import PC from '/PC.png'
import Mobail1 from '/Mobail1.png'
import CCTV from '/CCTV.png'

const FeaturesProducts = () => {
  return (
    <>
      <section>
        <div className="max-w-[1320px] mx-auto mb-[72px]">
          <div className="flex gap-x-6 justify-between items-center">
            <div className="cursor-pointer max-w-[312px]">
              <img src={FutureProductPromoImage} alt="" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h5 className='text-2xl leading-8 font-semibold text-[#191C1F]'>Featured Products</h5>
                <div className="flex items-center gap-x-4">
                  <ul className='flex items-center gap-x-6 text-sm leading-5 text-[#5F6C72] cursor-pointer'>
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
              <div className="flex flex-wrap gap-4">
                <SingleFutureProduct
                Src={TozoT6Phone} 
                saleTxt={"(345)"}
                productName={"TOZO T6 True Wireless Earbuds Bluetooth Headphon..."}
                productPrice={"$70"}
                discountTxt={"HOT SALES"}
                badgeClass={"bg-[#2DA5F3] text-white" }
                />
                <SingleFutureProduct
                Src={VivoPhone} 
                saleTxt={"(35)"}
                productName={"Samsung Electronics Samsung Galexy S21 5G"}
                productPrice={"$290"}
                discountTxt={"HOT"}
                badgeClass={"bg-[#191C1F] text-white" }
                />
                <SingleFutureProduct
                Src={Gemmer} 
                saleTxt={"(122)"}
                productName={"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."}
                productPrice={"$2,300"}
                discountTxt={"SOLD"}
                badgeClass={"bg-[#929FA5] text-white" }
                />
                <SingleFutureProduct
                Src={Drone2} 
                saleTxt={"(245)"}
                productName={"TOZO T6 True Wireless Earbuds Bluetooth Headphon..."}
                productPrice={"$290"}
                discountTxt={""}
                badgeClass={"" }
                />
                <SingleFutureProduct
                Src={PC} 
                saleTxt={"(145)"}
                productName={"TOZO T6 True Wireless Earbuds Bluetooth Headphon..."}
                productPrice={"$70"}
                discountTxt={""}
                badgeClass={"" }
                />
                <SingleFutureProduct
                Src={CCTV} 
                saleTxt={"(315)"}
                productName={"JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black"}
                productPrice={"$250"}
                discountTxt={"15% OFF"}
                badgeClass={"bg-[#EFD33D]" }
                />
                <SingleFutureProduct
                Src={Mobail1} 
                saleTxt={"(134)"}
                productName={"Simple Mobile 4G LTE Prepaid Smartphone"}
                productPrice={"$290"}
                discountTxt={""}
                badgeClass={"" }
                />
                <SingleFutureProduct
                Src={TozoT6Phone} 
                saleTxt={"(241)"}
                productName={"TOZO T6 True Wireless Earbuds Bluetooth Headphon..."}
                productPrice={"$70"}
                discountTxt={"HOT SALES"}
                badgeClass={"bg-[#2DA5F3] text-white" }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesProducts