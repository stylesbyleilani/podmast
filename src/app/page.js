
import Empower from '@/Components/Empower'
import Hero from '@/Components/Hero'
import Pricing from '@/Components/Pricing'
import Services from '@/Components/Services'
import SystemBenefits from '@/Components/SystemBeneits'
import Work from '@/Components/Work'
// import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <SystemBenefits/>
      <Pricing/>
      <Empower/>
      <Work/>
    </div>
  )
}

export default page