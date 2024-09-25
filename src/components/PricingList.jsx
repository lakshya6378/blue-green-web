import React from 'react'
import { pricing } from '../constants'

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
        {pricing.map((item)=>(
       <div>
        </div>
        ))}
    </div>
  )
}

export default PricingList