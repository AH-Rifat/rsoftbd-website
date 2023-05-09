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
      <div className='lg:flex lg:ms-8 lg:my-28'>
        <div className='font-serif text-center my-12'>
          <h1 className='text-lg md:text-5xl md:leading-snug mb-3 text-emerald-800 font-extrabold lg:text-2xl xl:text-3xl'>Transform Your Business With Our Software</h1>
          <p className='text-sm md:text-2xl mb-8 text-emerald-800 xl:text-xl'>Need a customize software or website</p>
          <button className='uppercase bg-emerald-400 hover:bg-emerald-500 py-2 px-4 rounded-xl text-white md:text-3xl md:py-4 md:px-6 lg:text-xl xl:p-2'>Get Started</button>
        </div>
        <img src={landingImage} alt="image" className="w-68 mx-auto lg:w-96 xl:w-[40%]" />
      </div>

      {/* who we are - section */}
      <h1 className='text-4xl text-center my-16 font-serif font-bold text-emerald-900 md:text-6xl'>Who We Are</h1>
      <div className='lg:flex lg:items-center xl:mx-24'>
        <img src={whoWeArwImage} alt="image" className="w-64 mx-auto md:w-[70%] lg:w-96 lg:ms-6 xl:w-1/3 xl:ms-24" />
        <div className='xl:w-1/2'>
          <h5 className='text-xl text-center font-serif font-bold text-emerald-900 md:text-4xl lg:text-2xl xl:text-3xl'>Scale Your Business with Confidence</h5>
          <p className='text-center p-4 text-emerald-700 font-serif md:text-2xl lg:text-xl'>
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
      <div className='flex flex-col mx-16 md:mx-36 lg:flex-row lg:gap-10 lg:mx-12 xl:ms-40 2xl:ms-80'>
        <div className='border-2 w-72 mb-14 rounded-3xl bg-violet-200 md:w-[30rem] shadow-xl shadow-violet-400 lg:w-96 xl:w-80 2xl:w-96'>
          <img src={sohidulTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
          <div className='text-center leading-8 font-serif mt-4'>
            <h1 className='text-2xl md:text-4xl lg:text-2xl'>Sohidul Islam</h1>
            <p className='text-slate-700 md:text-2xl md:mb-5 lg:text-lg lg:mt-2'>Lead Desiner</p>
          </div>
        </div>

        <div className='border-2 w-72 mb-14 rounded-3xl bg-pink-200 md:w-[30rem] shadow-xl shadow-pink-400 lg:w-96 xl:w-80 2xl:w-96'>
          <img src={rifatTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
          <div className='text-center leading-8 font-serif mt-4'>
            <h1 className='text-2xl md:text-4xl lg:text-2xl'>Ahsanul Haque Rifat</h1>
            <p className='text-slate-700 md:text-2xl md:mb-5 lg:text-lg lg:mt-2'>Founder & Software Engineer</p>
          </div>
        </div>

        <div className='border-2 w-72 mb-14 rounded-3xl bg-blue-200 md:w-[30rem] shadow-xl shadow-blue-400 lg:w-96 xl:w-80 2xl:w-96'>
          <img src={shovoTeamImg} alt="image" className="w-72 p-1 md:w-full rounded-3xl" />
          <div className='text-center leading-8 font-serif mt-4'>
            <h1 className='text-2xl md:text-4xl lg:text-2xl'>Syed Noman Shovo</h1>
            <p className='text-slate-700 md:text-2xl md:mb-5 lg:text-lg lg:mt-2'>Sells & Marketing</p>
          </div>
        </div>
      </div>

      {/* contact section */}
      <h1 className='text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24 xl:mb-2'>Contact</h1>
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
