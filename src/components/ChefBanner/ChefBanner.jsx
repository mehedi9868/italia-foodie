/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ChefBanner = ({ data }) => {
    const { picture, name, shortBio
        , likes, recipes, yearsOfExperience } = data;
    return (
        <div className='flex justify-center items-center gap-10 bg-orange-50'>
            < div className='w-1/3' >
                <img src={picture} alt="" />
            </div >
            <div className=''>
                <p className='text-2xl font-semibold mb-6'>Name: {name}</p>
                <p className='text-xl mb-20'>{shortBio}</p>
                <p className='font-bold'>Likes: 199</p>
                <p className='font-bold'>Recipes: {recipes.length}</p>
                <p className='font-bold'>Experiences: {yearsOfExperience} years.</p>
            </div>
        </div >
    );
};

export default ChefBanner;