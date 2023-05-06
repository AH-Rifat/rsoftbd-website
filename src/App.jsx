import { useState } from 'react'
import './App.css'
import HeaderNav from './componants/HeaderNav'
import landingImage from './assets/vector-img/landing.png'
import whoWeArwImage from './assets/vector-img/who-we-are.png'
import OurServices from './componants/OurServices'

function App() {

  return (
    <>
      <HeaderNav />
      {/* hero section */}
      <div>
        <div className='font-serif text-center my-12'>
          <h1 className='text-lg mb-3 text-emerald-800 font-extrabold'>Transform Your Business With Our Software</h1>
          <p className='text-sm mb-8 text-emerald-800'>Need a customize software or website</p>
          <button className='uppercase bg-emerald-400 py-2 px-4 rounded-xl text-white'>Get Started</button>
        </div>
        <img src={landingImage} alt="image" className="w-68 mx-auto" />
      </div>
      {/* who we are - section */}
      <h1 className='text-4xl text-center my-16 font-serif font-bold text-emerald-900'>Who We Are</h1>
      <div>
        <img src={whoWeArwImage} alt="image" className="w-64 mx-auto" />
        <div>
          <h5 className='text-xl text-center font-serif font-bold text-emerald-900'>Scale Your Business with Confidence</h5>
          <p className='text-center p-4 text-emerald-700 font-serif'>
            RSOFT is a software development company. <br /> We aims to collaborate with the clients to achieve
            their
            strategic objectives while creating long-term business value through  the delivery and
            management of
            their marketing  process to become an integral part of their success.
          </p>
        </div>
      </div>

      {/* our service section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900'>Our Service</h1>

      <OurServices />
    </>
  )
}

export default App
