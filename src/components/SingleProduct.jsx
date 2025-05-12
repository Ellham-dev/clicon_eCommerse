
import Drone1 from '/Drone1.png'

import DiscountBadge from "./DiscountBadge"

const SingleProduct = ({Src,className,ImgclassName,ProductName,ProductPrice}) => {
  return (
    <>
     <div className={`${className} p-4 relative`}>
        <img src={Src} alt="" ImgclassName={`mb-2 ${ImgclassName}`}/>
        <h3 className='text-sm leading-5 text-[#191C1F] mb-2'>{ProductName}</h3>
        <p className="text-sm leading-5 font-semibold text-[#2DA5F3]">${ProductPrice}</p>
        <div className="absolute top-3 left-3">
            <DiscountBadge DiscountNum={90}/>
        </div>
     </div>
    </>
  )
}

export default SingleProduct