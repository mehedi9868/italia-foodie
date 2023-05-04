/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Testimonial = ({ testimonial }) => {

    const { id, image, name, review } = testimonial;
    console.log(testimonial);
    return (
        <div className='text-center bg-orange-50 px-6 pb-5'>
            <hr />
            <div className='w-1/2 mx-auto my-5'>
                <img src={image} alt="" className='rounded-full w-[200px] h-[200px]' />
            </div>
            <p className='text-justify italic'>{`"${review}"`}</p>
            <p className='text-center font-bold text-xl mt-5'>{name}</p>
        </div>
    );
};

export default Testimonial;