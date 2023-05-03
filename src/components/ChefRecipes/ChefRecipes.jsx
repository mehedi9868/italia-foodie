/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipes = () => {
    const data = useLoaderData();
    const recipes = data.recipes;
    return (
        <div>
            <ChefBanner data={data}></ChefBanner>
            <div>
                <h2 className='text-3xl font-bold py-10 text-center'>Recipes</h2>
                {
                    recipes.map((recipe, index) => <RecipeCard
                        key={index}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;