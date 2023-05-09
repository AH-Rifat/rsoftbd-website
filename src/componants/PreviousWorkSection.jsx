import React from 'react';
import websiteIcon from '../assets/vector-img/coding-icon.png'
import softwareIcon from '../assets/vector-img/coding2-icon.png'
import graphicDesignIcon from '../assets/vector-img/graphic-design-icon.png'
import animationIcon from '../assets/vector-img/animate-icon.png'
import { Link } from 'react-router-dom'

const data = [
    { id: 1, image: websiteIcon, title: 'Website', link: '' },
    { id: 2, image: softwareIcon, title: 'Software', link: '' },
    { id: 3, image: graphicDesignIcon, title: 'Design', link: '' },
    { id: 4, image: animationIcon, title: 'Animation', link: '' }
]
const PreviousWorkSection = () => {
    return (
        <div className='grid gap-6 md:grid-cols-2 md:gap-0'>
            {
                data.map(({ id, image, title, link }) => {
                    return <div className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 hover:text-white hover:bg-emerald-400 duration-200 md:w-[22rem] md:mb-8'>
                        <div className='flex justify-between items-center'>
                            <img src={image} alt="image" className="w-14 md:w-16" />
                            <div className='text-center'>
                                <h1 className='text-3xl font-serif uppercase md:text-4xl md:mb-2'>{title}</h1>
                                <Link className='text-sm md:text-xl' to={link}>Click Here to see our work</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default PreviousWorkSection;