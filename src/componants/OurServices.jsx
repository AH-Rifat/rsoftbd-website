import React from 'react';
import image1 from '../assets/vector-img/MOBILE-APPLICATION.png'
import image2 from '../assets/vector-img/website.png'
import image3 from '../assets/vector-img/software.png'
import image4 from '../assets/vector-img/graphic-design.png'
import image5 from '../assets/vector-img/animation.png'

const ourServiceData = [
    { id: 1, image: image1, name: 'Mobile Application' },
    { id: 2, image: image2, name: 'Web Application' },
    { id: 3, image: image3, name: 'Custom Software' },
    { id: 4, image: image4, name: 'Graphics Design' },
    { id: 5, image: image5, name: '3D & 2D Animation' }
]
const OurServices = () => {

    return (
        <div className='grid gap-10'>
            {
                ourServiceData.map(({ id, image, name }) => {
                    return <div key={id} className='border-2 w-72 mx-auto shadow-lg shadow-emerald-400 rounded-2xl p-5 md:w-3/4'>
                        <img src={image} alt="image" className="" />
                        <h1 className='font-mono font-semibold text-center text-lg my-4 text-teal-900 md:text-4xl'>{name}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default OurServices;