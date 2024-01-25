import React from 'react';

const Footer = () => {
    return (
        <footer className="footer md:flex-between">
            <div className="mb-4">
                <img
                    src="logo2.png"
                    alt="Logo"
                />
                <span>Start spending the smart way</span>
            </div>
            <div className="mb-4 md:order-2">
                <div>GET IT ON</div>
                <div className="flex-gap">
                    <img
                        src="apple-transparent-badge.png"
                        alt="apple-transparent-badge"
                    />
                    <img
                        src="android-transparent-badge.png"
                        alt="android-transparent-badge"
                    />
                </div>
            </div>
            <div className="mb-4 flex-1 flex-around md:flex-evenly md:order-1">
                <ul>
                    <li>Product</li>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                    <li>Releases</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Newsletter</li>
                    <li>Events</li>
                    <li>Help center</li>
                    <li>Support</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
