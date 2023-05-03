/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleTerms = (event) => setTerms(event.target.checked);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}, Terms: ${terms}`);
    };

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
            <div className="w-full max-w-md">
                <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                checked={terms}
                                onChange={handleTerms}
                            />
                            <span className="text-sm">I agree to the terms and conditions</span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <p className='mb-2'>
                            <small>
                                Do not have an account? <Link to="/register">
                                    <span className="underline text-blue-600">Please register</span></Link>
                            </small>
                        </p>
                        <p className='mb-2'>
                            <small>
                                Forget password? <Link to="/login">
                                    <span className="underline text-blue-600">Reset</span></Link>
                            </small>
                        </p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                        <button
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign in with Google
                        </button>
                        <br />
                        <span className="mx-2 text-gray-500">or</span>
                        <br />

                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign in with GitHub
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;