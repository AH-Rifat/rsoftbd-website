import React, { useState } from 'react';
import logo from '../assets/vector-img/nav-logo.png'
import { Link } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

const HeaderNav = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
            <div className='relative shadow-lg shadow-emerald-300'>
                <div className=' flex justify-between items-center mx-5'>
                    <div><img src={logo} alt="image" className='w-20 2xl:w-[5.5rem]' /></div>
                    <div className={show ? "absolute top-28 right-0 left-0 text-center bg-white max-w-full transition" : "absolute  bottom-24 md:top-7 md:left-52 lg:left-[29rem] xl:left-[45rem] 2xl:left-[84rem] transition"}>
                        <ul className='md:flex'>
                            <li className='mb-6'><Link to={'/'} className='uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Home</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Who we are</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Product</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Service</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={() => setShow(!show)}>
                            {
                                !show ? <HiBars3 className='text-4xl font-bold text-emerald-500'></HiBars3> : <HiOutlineXMark className='text-4xl font-bold text-emerald-500'></HiOutlineXMark>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;