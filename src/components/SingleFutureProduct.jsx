import { FaStar } from "react-icons/fa"
import DiscountBadge from "./DiscountBadge"


const SingleFutureProduct = ({ Src, className,saleTxt,productName, productPrice, discountTxt, badgeClass }) => {
    return (
        <>
            <div className={`${className} relative max-w-[234px] p-4 shadow border border-[#E4E7E9]`}>
                <img src={Src} alt="phone" className={"mb-6"} />
                <div className="flex items-center gap-x-1 mb-2">
                <div className="flex items-center text-[#FA8232]">
                    <FaStar size={16} />
                    <FaStar size={16} />
                    <FaStar size={16} />
                    <FaStar size={16} />
                    <FaStar size={16} />
                </div>
                <p className="text-[#77878F]">{saleTxt}</p>
            </div>
            <h3 className="text-sm leading-5 text-[#191C1F] mb-2">{productName}</h3>
            <h4 className="text-sm leading-5 font-semibold text-[#2DA5F3]">{productPrice}</h4>
            <div className="absolute top-3 left-3">
                <DiscountBadge DiscountNum={discountTxt} className={badgeClass}/>
            </div>
        </div>
    </>
  )
}

export default SingleFutureProduct