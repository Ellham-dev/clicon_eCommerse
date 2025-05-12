
import DiscountBadge from "./DiscountBadge"
import { Eye, Heart, ShoppingCart } from 'lucide-react'

const SingleProduct = ({ Src, className, discountTxt, ProductName, ProductPrice,badgeClass }) => {
    return (
        <>
            <div className={`${className} p-4 relative max-w-[247px] border border-[#E4E7E9]`}>
                <div className="relative group">
                    <img src={Src} alt={""} className={`mb-2 ${className}`} />
                    <div className="absolute top-0 right-0 w-full h-full bg-black/20 hidden group-hover:flex items-center justify-center gap-x-2">
                        <div className="bg-[#FA8232] rounded-full p-3">
                            <Heart size={24} color='#ffff' />
                        </div>
                        <div className="bg-[#ffff] rounded-full p-3">
                            <ShoppingCart size={24} color='#191C1F' />
                        </div>
                        <div className="bg-[#ffff] rounded-full p-3">
                            <Eye size={24} color='#191C1F' />
                        </div>
                    </div>
                </div>
                <h3 className='text-sm leading-5 text-[#191C1F] mb-2'>{ProductName}</h3>
                <p className="text-sm leading-5 font-semibold text-[#2DA5F3]">${ProductPrice}</p>
                <div className="absolute top-3 left-3">
                    <DiscountBadge DiscountNum={discountTxt} className={badgeClass}/>
                </div>
            </div>
        </>
    )
}

export default SingleProduct