

const DiscountBadge = ({DiscountNum,className}) => {
  return (
    <>
    <div className="">
        <p className={`bg-[#EFD33D] text-[#191C1F] text-[12px] leading-[16px] font-semibold max-w-[73px] text-center rounded-sm px-2.5 py-1 ${className}`}>{DiscountNum} %OFF</p>
    </div>
    </>
  )
}

export default DiscountBadge