/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const { login, googleLogIn, gitHubLogIn } = useContext(AuthContext);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccessMessage('Successful login')
                // reset form
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setErrorMessage('Email address or password does not match')
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setErrorMessage('Wrong password')
                } else {
                    setErrorMessage('Access to this account has been temporarily disabled due to many failed login attempts.')
                }
            })
    };
    // google login
    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            }).catch((error) => {
                console.log(error);
            });
    }
    // github login
    const handleGitHubLogin = () => {
        gitHubLogIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            }).catch((error) => {
                console.log(error);
            });
    }

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
                            required
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
                            required
                        />
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
                        <div className='mb-2'>
                            <p className='text-red-600'>
                                <small>{errorMessage}</small>
                            </p>
                            <p className='text-green-600'>
                                <small>{successMessage}</small>
                            </p>
                        </div>

                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                        <button
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleGoogleLogin}
                        >
                            Sign in with Google
                        </button>
                        <br />
                        <span className="mx-2 text-gray-500">or</span>
                        <br />

                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleGitHubLogin}
                        >
                            Sign in with GitHub
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;