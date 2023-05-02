/* eslint-disable no-unused-vars */
import React from 'react';
import Chefs from '../Chefs/Chefs';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;