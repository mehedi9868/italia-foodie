/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const HomeBanner = () => {
    return (
        <div className="relative">
            <img
                className="w-full h-auto object-cover brightness-[60%]"
                src="https://img.freepik.com/free-photo/multiethnic-male-cooks-standing-restaurant-professional-kitchen-with-arms-crossed-while-preparing-ingredients-dish-culinary-experts-wearing-chef-hats-while-standing-near-cooking-station_482257-43346.jpg?w=1380&t=st=1683040232~exp=1683040832~hmac=be40e43806d5cd7bf25d5e9c6a7087aa6dccf461c3e07ec6a260e5ef6c8129db"
                alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-white text-4xl lg:text-6xl font-bold  lg:mb-10">
                    Savor the Flavors of the World on Your Plate!
                </p>
                <p className="text-white text-justify lg:text-center italic hidden lg:block text-sm lg:text-xl">
                    Welcome to our culinary oasis, where passion and artistry are at the forefront of every dish we create. Our talented chefs use only the freshest and finest ingredients, carefully selected and expertly prepared to bring out the unique and bold flavors of each dish. Whether you're in the mood for a classic favorite or an innovative new creation, our menu offers a diverse selection of cuisine from around the world, all crafted with the utmost care and attention to detail. Come join us and embark on a culinary journey that will tantalize your taste buds and leave you craving more!
                </p>
            </div>
        </div>
    );
};

export default HomeBanner;
