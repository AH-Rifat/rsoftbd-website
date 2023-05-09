import React from 'react';
import contactPageImage from '../assets/vector-img/contact-us-page.png'

const ContactSection = () => {
    return (
        <div className='md:flex'>
            <form action="" className='md:ms-16'>
                <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
                    <label className='font-serif text-slate-500 md:text-lg'>Your Name</label>
                    <input type="text" name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600 md:p-2" />
                </div>

                <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
                    <label className='font-serif text-slate-500 md:text-lg'>Your Email</label>
                    <input type="email" name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600 md:p-2" />
                </div>

                <div className='flex flex-col gap-1 mb-3 w-72 mx-auto'>
                    <label className='font-serif text-slate-500 md:text-lg'>Write a massage here</label>
                    <textarea name="" className="rounded-lg border-2 border-slate-400 focus:outline-emerald-600 md:p-2" cols="30" rows="6"></textarea>
                </div>
                <div className='w-72 mx-auto'>
                    <button type="submit" className='uppercase w-28 bg-emerald-400 py-2 px-4 rounded-xl text-white md:text-2xl md:w-32 md:py-3 md:px-6'>Submit</button>
                </div>
            </form>
            <img src={contactPageImage} alt="image" className="w-72 mx-auto md:w-80" />
        </div>
    );
};

export default ContactSection;