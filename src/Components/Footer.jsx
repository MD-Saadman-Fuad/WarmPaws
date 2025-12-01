import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 items-center ">
            
<nav className="flex flex-col items-center">
                <img className='w-20 rounded-full ' src={logo} alt="Logo" />
                <div className="flex gap-3 mt-3">
                    <a href="#" aria-label="Sign in with Google" className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-neutral hover:bg-gray-100 shadow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.35 11.1H12v2.8h5.35c-.23 1.36-.93 2.51-1.99 3.29v2.73h3.22C20.7 18.03 22 15.12 22 12c0-.66-.06-1.31-.18-1.9z" fill="#4285F4"/>
                            <path d="M12 22c2.7 0 4.97-.9 6.63-2.43l-3.22-2.73c-.9.6-2.06.96-3.41.96-2.62 0-4.83-1.77-5.62-4.15H2.99v2.61C4.63 19.9 8.04 22 12 22z" fill="#34A853"/>
                            <path d="M6.38 13.65A6.99 6.99 0 016 12c0-.66.11-1.3.38-1.9V7.49H2.99A10.99 10.99 0 002 12c0 1.77.42 3.45 1.17 4.96l3.21-3.31z" fill="#FBBC05"/>
                            <path d="M12 6.5c1.47 0 2.8.5 3.85 1.49l2.88-2.88C16.96 3.02 14.7 2 12 2 8.04 2 4.63 4.1 2.99 7.49l3.39 2.61C7.17 8.27 9.38 6.5 12 6.5z" fill="#EA4335"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Sign in with Facebook" className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-neutral hover:bg-gray-100 shadow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.84 8 9.8V14.7H7.5v-2.7H10V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.7H13v7.1c4.56-.96 8-4.96 8-9.8z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Sign in with GitHub" className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-neutral hover:bg-gray-100 shadow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.15 7.63 10.63.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.1.68-3.76-1.5-3.76-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.0 1.73 2.65 1.23 3.3.94.1-.74.39-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.14.9-.25 1.86-.38 2.82-.39.96.01 1.92.14 2.82.39 2.17-1.44 3.12-1.14 3.12-1.14.61 1.52.23 2.64.11 2.92.72.78 1.16 1.77 1.16 2.99 0 4.3-2.62 5.25-5.11 5.52.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54C19.05 21.9 22.25 17.7 22.25 12 22.25 5.48 17.27.5 12 .5z"/>
                        </svg>
                    </a>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer >
    );
};

export default Footer;