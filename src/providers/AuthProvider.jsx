/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google 
    const googleLogIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    // gitHub 
    const gitHubLogIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        createUser,
        login,
        googleLogIn,
        gitHubLogIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;