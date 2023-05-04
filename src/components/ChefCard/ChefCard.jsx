/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { picture, name, yearsOfExperience, recipes, id, likes } = chef
    return (
        <div className=' w-full bg-gray-50 drop-shadow-2xl hover:bg-gray-100 border hover:border-gray-200 rounded-lg p-6'>
            <img src={picture} alt="" width="100%" className='rounded-lg' />
            <p className='text-xl font-semibold mt-4'>Name: {name}</p>
            <p className='font-semibold'>Experience: {yearsOfExperience} years</p>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Recipes: {recipes.length}</p>
                <p className='font-bold mb-4'>Likes: {likes}</p>
            </div>
            <Link to={`/chef-recipes/${id}`}><button className='btn' >View Recipes</button></Link>
        </div>
    );
};

export default ChefCard;