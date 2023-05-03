/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const { name, imageUrl, ingredients, instructions, rating } = recipe;

    const handleFavorite = () => {
        toast("Added recipe to your favorite list");
        setIsDisabled(true);
    }
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
                <div className='flex justify-between items-center mt-6'>
                    <p className='font-bold'>Ratings: {rating}</p>
                    <button onClick={handleFavorite} disabled={isDisabled} className='btn'>Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;