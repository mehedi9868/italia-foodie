/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const TodaysRecipe = () => {
    const [recipe, setRecipe] = useState({});
    useEffect(() => {
        fetch("https://italia-foodie-server.vercel.app/1")
            .then(res => res.json())
            .then(data => setRecipe(data.recipes[0]))
    }, [])

    const { imageUrl, likes, name, rating, description } = recipe;
    return (
        <section>
            <h2 className='text-2xl font-bold text-center mt-10'>Today's Recipe</h2>
            <p className='text-center italic mt-2 mb-10'><small>(Recipe of the day)</small></p>

            <div className='flex bg-orange-50 mt-10'>
                <img src={imageUrl} alt="" className='w-1/4' />
                <div className='p-10'>
                    <p className='text-xl font-semibold mb-10'>{name}</p>
                    <p className='font-bold'>likes: {likes}</p>
                    <p className='font-bold'>ratings: {rating}</p>
                    <p className='text-lg font-normal mt-10'>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default TodaysRecipe;