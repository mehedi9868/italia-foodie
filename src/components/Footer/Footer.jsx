/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 text-base-content">
            <div>
                <span className="footer-title">Explore</span>
                <a className="link link-hover">Recipes</a>
                <a className="link link-hover">Ingredients</a>
                <a className="link link-hover">Cuisines</a>
            </div>
            <div>
                <span className="footer-title">Connect</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Join our Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} Italia Foodie. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;