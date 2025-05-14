import React from 'react'
import CategorySlider from './CategorySlider'

const ShopCategory = () => {
  return (
    <>
      <section>
        <div className="max-w-[1320px] mx-auto mb-[72px]">
          <div className="">
            <div className="text-center mb-10">
              <h4 className='text-[32px] leading-10 font-semibold text-[#141414]'>Shop with Categorys</h4>
            </div>
            <div className="">
              <CategorySlider/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopCategory