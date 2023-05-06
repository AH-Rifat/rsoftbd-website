import React, { useState } from 'react';
import logo from '../assets/vector-img/nav-logo.png'
import { Link } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

const HeaderNav = () => {
    const [show, setShow] = useState(false)
    console.log(show);
    return (
        <>
            <div className='shadow-lg shadow-emerald-300'>
                <div className='relative flex justify-between items-center mx-5'>
                    <div><img src={logo} alt="image" className='w-20' /></div>
                    <div className={show ? '' : 'hidden'}>
                        <ul className='absolute top-28 right-0 left-0 text-center bg-white max-w-full'>
                            <li className='mb-6'><Link to={'/'} className='uppercase font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Home</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Who we are</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Product</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Service</Link></li>
                            <li className='mb-6'><Link to={'/'} className='uppercase font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150'>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
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