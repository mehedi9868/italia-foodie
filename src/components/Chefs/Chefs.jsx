/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chefsList, setChefsList] = useState([]);
    useEffect(() => {
        fetch('https://italia-foodie-server.vercel.app/')
            .then(res => res.json())
            .then(data => setChefsList(data))
    }, [])
    return (
        <div className='bg-orange-50'>
            <h2 className='text-2xl font-bold text-center py-10'>Chefs</h2>
            <div className='w-[90%] lg:w-3/4  grid lg:grid-cols-3 gap-6 mx-auto pb-10'>
                {
                    chefsList.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;