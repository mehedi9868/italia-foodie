/* eslint-disable no-unused-vars */
import React from 'react';
import errorImage from '/error-404.svg';
const ErrorPage = () => {
    return (
        <>
            <div className='w-full h-screen lg:w-1/2 text-center mx-auto'>
                <img src={errorImage} alt="404 error" />
            </div>
            <p>Attribute: <a className='text-blue-600' href="https://storyset.com/web" target='_blank' rel="noreferrer">Web illustrations by Storyset</a></p>
        </>
    );
};

export default ErrorPage;