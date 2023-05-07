import { useState } from 'react'
import './App.css'
import HeaderNav from './componants/HeaderNav'
import landingImage from './assets/vector-img/landing.png'
import whoWeArwImage from './assets/vector-img/who-we-are.png'
import OurServices from './componants/OurServices'
import websiteIcon from './assets/vector-img/coding-icon.png'
import softwareIcon from './assets/vector-img/coding2-icon.png'
import graphicDesignIcon from './assets/vector-img/graphic-design-icon.png'
import animationIcon from './assets/vector-img/animate-icon.png'
import rifatTeamImg from './assets/rifat.jpg'
import sohidulTeamImg from './assets/shohidul.jpg'
import shovoTeamImg from './assets/shovo.jpeg'
import contactPageImage from './assets/vector-img/contact-us-page.png'
import footerLogo from './assets/logo.png'
import { Link } from 'react-router-dom'

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

      {/* our previous work section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900'>Our Privious Work</h1>
      <div className='grid gap-6'>
        <div className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 hover:text-white hover:bg-emerald-400 duration-200'>
          <div className='flex justify-around items-center'>
            <img src={websiteIcon} alt="image" className="w-14" />
            <div className='text-center'>
              <h1 className='text-3xl font-serif uppercase'>Website</h1>
              <Link className='text-sm'>Click Here to see our work</Link>
            </div>
          </div>
        </div>

        <div className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 hover:text-white hover:bg-emerald-400 duration-200'>
          <div className='flex justify-around items-center'>
            <img src={softwareIcon} alt="image" className="w-14" />
            <div className='text-center'>
              <h1 className='text-3xl font-serif uppercase'>Software</h1>
              <Link className='text-sm'>Click Here to see our work</Link>
            </div>
          </div>
        </div>

        <div className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 hover:text-white hover:bg-emerald-400 duration-200'>
          <div className='flex justify-around items-center'>
            <img src={graphicDesignIcon} alt="image" className="w-14" />
            <div className='text-center'>
              <h1 className='text-3xl font-serif uppercase'>Design</h1>
              <Link className='text-sm'>Click Here to see our work</Link>
            </div>
          </div>
        </div>

        <div className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 hover:text-white hover:bg-emerald-400 duration-200'>
          <div className='flex justify-around items-center'>
            <img src={animationIcon} alt="image" className="w-14" />
            <div className='text-center'>
              <h1 className='text-3xl font-serif uppercase'>Animation</h1>
              <Link className='text-sm'>Click Here to see our work</Link>
            </div>
          </div>
        </div>
      </div>

      {/* our team section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900'>Our Team</h1>
      <div className='grid gap-6 justify-center'>
        <div className='border-2 w-72 rounded-lg bg-violet-200'>
          <img src={sohidulTeamImg} alt="image" className="w-72 p-1" />
          <div className='text-center leading-8 font-serif mt-4'>
            <h1 className='text-2xl'>Sohidul Islam</h1>
            <p className='text-slate-700'>Lead Desiner</p>
          </div>
        </div>

        <div className='grid justify-center'>
          <div className='border-2 w-72 rounded-lg bg-pink-200'>
            <img src={rifatTeamImg} alt="image" className="w-72 p-1" />
            <div className='text-center leading-8 font-serif mt-4'>
              <h1 className='text-2xl'>Ahsanul Haque Rifat</h1>
              <p className='text-slate-700'>Founder & Software Engineer</p>
            </div>
          </div>
        </div>

        <div className='grid justify-center'>
          <div className='border-2 w-72 rounded-lg bg-blue-200'>
            <img src={shovoTeamImg} alt="image" className="w-72 p-1" />
            <div className='text-center leading-8 font-serif mt-4'>
              <h1 className='text-2xl'>Syed Noman Shovo</h1>
              <p className='text-slate-700'>Sells & Marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900'>Contact</h1>
      <div>
        <div>
          <form action="">
            <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
              <label className='font-serif text-slate-500'>Your Name</label>
              <input type="text" name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600" />
            </div>

            <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
              <label className='font-serif text-slate-500'>Your Email</label>
              <input type="email" name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600" />
            </div>

            <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
              <label className='font-serif text-slate-500'>Your Email</label>
              <textarea name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600" cols="30" rows="6"></textarea>
            </div>
            <div className='w-72 mx-auto'>
              <button type="submit" className='uppercase w-28 bg-emerald-400 py-2 px-4 rounded-xl text-white'>Submit</button>
            </div>
          </form>
          <img src={contactPageImage} alt="image" className="w-72 mx-auto" />
        </div>
      </div>

      {/* footer section */}
      <footer className='text-center bg-green-100 p-6'>
        <img src={footerLogo} alt="logo" className="w-20 mx-auto" />
        <div className='font-semibold'>
          <h1>R-Soft-BD</h1>
          <h1>
            <span className='underline'>Address:</span> Jurain, Dhaka: 1204.
            <span className='underline ms-2'>Mobile:</span> 01920770880
          </h1>
          <p className='mt-6'>Copyright @ 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
