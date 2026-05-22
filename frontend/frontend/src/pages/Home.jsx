import React from 'react'
import Hero from '../components/Hero'
import Highlights from "../components/Highlights";
import FeaturedProducts from '../components/FeaturedProducts';
import OnSaleProducts from '../components/admin/OnSaleProducts';

function Home() {
  return (
    <div >
      <Hero/>
       <div className='p-10 lg:px-52'>

      <Highlights/>
      <FeaturedProducts/>
      <OnSaleProductsts/>
      </div>
      </div>
  )
}

export default Home