import './App.css'
import HeaderNav from './componants/HeaderNav'
import landingImage from './assets/vector-img/landing.png'
import whoWeArwImage from './assets/vector-img/who-we-are.png'
import OurServices from './componants/OurServices'
import rifatTeamImg from './assets/rifat.jpg'
import sohidulTeamImg from './assets/shohidul.jpg'
import shovoTeamImg from './assets/shovo.jpeg'
import footerLogo from './assets/logo.png'
import PreviousWorkSection from './componants/PreviousWorkSection'
import ContactSection from './componants/ContactSection'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <HeaderNav />
      {/* hero section */}
      <div>
        <div className='font-serif text-center my-12'>
          <h1 className='text-lg md:text-5xl md:leading-snug mb-3 text-emerald-800 font-extrabold'>Transform Your Business With Our Software</h1>
          <p className='text-sm md:text-2xl mb-8 text-emerald-800'>Need a customize software or website</p>
          <button className='uppercase bg-emerald-400 py-2 px-4 rounded-xl text-white md:text-3xl md:py-4 md:px-6'>Get Started</button>
        </div>
        <img src={landingImage} alt="image" className="w-68 mx-auto" />
      </div>

      {/* who we are - section */}
      <h1 className='text-4xl text-center my-16 font-serif font-bold text-emerald-900 md:text-6xl'>Who We Are</h1>
      <div>
        <img src={whoWeArwImage} alt="image" className="w-64 mx-auto md:w-[70%]" />
        <div>
          <h5 className='text-xl text-center font-serif font-bold text-emerald-900 md:text-4xl'>Scale Your Business with Confidence</h5>
          <p className='text-center p-4 text-emerald-700 font-serif md:text-2xl'>
            RSOFT is a software development company. <br /> We aims to collaborate with the clients to achieve
            their
            strategic objectives while creating long-term business value through  the delivery and
            management of
            their marketing  process to become an integral part of their success.
          </p>
        </div>
      </div>

      {/* our service section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24'>Our Service</h1>
      <OurServices />

      {/* our previous work section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24'>Our Privious Work</h1>
      <PreviousWorkSection />

      {/* our team section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24'>Our Team</h1>
      <div className='grid gap-10 justify-center md:gap-16'>
        <div className='border-2 w-72 rounded-3xl bg-violet-200 md:w-[30rem] shadow-xl shadow-violet-400'>
          <img src={sohidulTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
          <div className='text-center leading-8 font-serif mt-4'>
            <h1 className='text-2xl md:text-4xl'>Sohidul Islam</h1>
            <p className='text-slate-700 md:text-2xl md:mb-5'>Lead Desiner</p>
          </div>
        </div>

        <div className='grid justify-center'>
          <div className='border-2 w-72 rounded-3xl bg-pink-200 md:w-[30rem] shadow-xl shadow-pink-400'>
            <img src={rifatTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
            <div className='text-center leading-8 font-serif mt-4'>
              <h1 className='text-2xl md:text-4xl'>Ahsanul Haque Rifat</h1>
              <p className='text-slate-700 md:text-2xl md:mb-5'>Founder & Software Engineer</p>
            </div>
          </div>
        </div>

        <div className='grid justify-center'>
          <div className='border-2 w-72 rounded-3xl bg-blue-200 md:w-[30rem] shadow-xl shadow-blue-400'>
            <img src={shovoTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
            <div className='text-center leading-8 font-serif mt-4'>
              <h1 className='text-2xl md:text-4xl'>Syed Noman Shovo</h1>
              <p className='text-slate-700 md:text-2xl md:mb-5'>Sells & Marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24'>Contact</h1>
      <ContactSection />

      {/* footer section */}
      <footer className='text-center bg-green-100 p-6 mt-10'>
        <img src={footerLogo} alt="logo" className="w-20 mx-auto" />
        <div className='font-semibold'>
          <Link to={'/'}>R-Soft-BD</Link>
          <h1 className='mt-2'>
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
