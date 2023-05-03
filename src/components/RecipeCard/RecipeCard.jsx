/* eslint-disable react/jsx-key */
/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const { name, imageUrl, ingredients,
        instructions, rating } = recipe;

    return (
        <div className='border rounded-lg drop-shadow-xl bg-white pb-8'>
            <img src={imageUrl} alt="" className='rounded-md' />
            <div className='px-10'>
                <p className='text-xl font-bold text-center my-6'>{name}</p>
                <ul className="list-disc ml-20 mb-6">
                    {
                        ingredients.map(ingredient => <li>{ingredient}</li>)
                    }
                </ul>
                <ol className="list-decimal ml-5 text-justify">
                    {
                        instructions.map(instruction => <li>{instruction}</li>)
                    }
                </ol>
                <div className='flex justify-between items-center'>
                    <p className='font-bold mt-6'>Ratings: {rating}</p>
                    <button className='btn'>Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;