import React from 'react'
import {ShoppingCart,BadgeCheck,Tag,ShieldCheck  } from "lucide-react"


function Highlights() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
        <div className='flex items-start mt-5 gap-4  max-w-md w-full mx-auto'>

        < ShoppingCart className="text-[#F86D72] text-[24px]"/>
        <div>
            <h4 className="font-semibold">Free Delivery</h4>

           <p>Enjoy fast and free shipping on all your orders with no extra cost.
      </p>
        </div>
        </div>

        <div className='flex items-start mt-5 gap-4  max-w-md w-full mx-auto'>
           < BadgeCheck className="text-[#F86D72] text-[24px]"/>
           <div>
            <h4 className="font-semibold">Quality Guarantee</h4>
           <p>Enjoy fast and free shipping on all your orders with no extra cost.      </p>

           </div>
        </div>

        <div className='flex items-start mt-5 gap-4  max-w-md w-full mx-auto'>
           < Tag className="text-[#F86D72] text-[24px]"/>
            <div>
                <h4 className="font-semibold">Daily Offers</h4>
           <p>Enjoy fast and free shipping on all your orders with no extra cost.</p>
      
            </div>
        </div>

        <div className='flex items-start mt-5 gap-4  max-w-md w-full mx-auto'>
           < ShieldCheck className="text-[#F86D72] text-[24px]"/>
           <div>
            <h4 className="font-semibold">100% Secure Payment</h4>
           <p>Enjoy fast and free shipping on all your orders with no extra cost.</p>
           </div>
      
        </div>
        
        
       
        </div>
  )
}

export default Highlights