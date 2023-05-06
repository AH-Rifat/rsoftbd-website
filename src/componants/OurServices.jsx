import React from 'react';
import { useEffect } from 'react';
import image1 from '../assets/vector-img/MOBILE-APPLICATION.png'
import image2 from '../assets/vector-img/website.png'
import image3 from '../assets/vector-img/software.png'
import image4 from '../assets/vector-img/graphic-design.png'
import image5 from '../assets/vector-img/animation.png'

const a = [
    { id: 1, image: image1, name: 'Mobile Application' },
    { id: 2, image: image2, name: 'Web Application' },
    { id: 3, image: image3, name: 'Custom Software' },
    { id: 4, image: image4, name: 'Graphics Design' },
    { id: 5, image: image5, name: '3D & 2D Animation' },
]
const OurServices = () => {

    useEffect(() => {

    }, [])

    return (
        <div className='grid gap-10'>
            {
                a.map(({ id, image, name }) => {
                    return <div key={id} className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 p-5'>
                        <img src={image} alt="image" className="" />
                        <h1 className='font-mono font-semibold text-center text-lg my-4'>{name}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default OurServices;