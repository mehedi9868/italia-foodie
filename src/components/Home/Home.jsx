/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';
import HomeBanner from '../HomeBanner/HomeBanner';
import Testimonial from '../Testimonial/Testimonial';
import TodaysRecipe from '../TodaysRecipe/TodaysRecipe';

const Home = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://italia-foodie-server.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Chefs></Chefs>
            <TodaysRecipe></TodaysRecipe>

            <div className='pb-10'>
                <h2 className='text-2xl font-bold text-center my-10'>What Customers Are Saying <br /> About Us</h2>
                <p className='text-center mb-2'><small>We pride ourselves what our happy <br /> clients say</small></p>
                <div className='grid grid-cols-3 gap-6 bg-orange-50'>

                    {
                        testimonials.map((testimonial) => <Testimonial
                            key={testimonial.id}
                            testimonial={testimonial}
                        ></Testimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;