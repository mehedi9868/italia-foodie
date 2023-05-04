/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [terms, setTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (password.length < 6) {
            return setErrorMessage('Password must be 6 charecters long.');
        } else if (password !== confirm) {
            return setErrorMessage('Password do not match.');
        } else {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    setSuccessMessage('User has been created')
                    // reset form
                    setName('');
                    setEmail('');
                    setPassword('');
                    setConfirm('');
                    setPhotoUrl('');
                    setTerms(false);
                    console.log(createdUser);
                    navigate('/login')
                })
                .catch(error => {
                    if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                        setErrorMessage('Email already exists. Please login.')
                    }
                    console.log(error.message);
                })
        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
            <h2 className='text-2xl font-bold mb-10'>Please Register</h2>
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm">Confirm Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            id="confirm"
                            placeholder="Confirm your password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">Photo URL</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="photoUrl"
                            placeholder="Your photo url"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                checked={terms}
                                onChange={(e) => setTerms(e.target.checked)}
                                required
                            />
                            <span className="text-sm">I agree to the terms and conditions</span>
                        </label>
                    </div>

                    <div className="mb-6">
                        <p className='mb-2'>
                            <small>
                                Already have an account? <Link to="/login">
                                    <span className="underline text-blue-600">Please login</span></Link>
                            </small>
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">Register</button>

                        <div className='mb-2'>
                            <p className='text-red-600'>
                                <small>{errorMessage}</small>
                            </p>
                            <p className='text-green-600'>
                                <small>{successMessage}</small>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;