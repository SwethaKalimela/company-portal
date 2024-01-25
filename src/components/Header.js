import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logo =
    <img
      src="logo.png"
      alt="Logo"
      className="text-lg font-bold"
    />;

  const navItems =
    <>
      <a href="#features">Features</a>
      <a href="#partners">Partners</a>
      <a href="#reviews">Reviews</a>
    </>;


  return (
    <header className="p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="hidden md:flex space-x-4">
        {logo}
        {navItems}
      </div>

      <div className="hidden md:block">
        <button className="bg-blue-500  px-4 py-2 rounded">Install Kobodrop</button>
      </div>

      <div className="md:hidden flex w-full justify-between">
        {logo}
        <div>
          <button onClick={toggleMobileMenu}>
            <img
              src="nav.png"
              alt="Logo"
              className="text-lg font-bold"
            />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 p-2 space-y-2  flex flex-col items-start">
              {navItems}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
