import React, { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center mx-auto container px-4 h-24">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <ul className="hidden md:flex md:space-x-4">
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Solutions
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-amber-900 hover:text-amber-700 transition-colors px-4 py-3 border-2 border-amber-900 hover:border-amber-700 rounded-lg">
            Sign up now
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 5.5H13" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 12.5H8" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 19.5H3" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul className={nav ? "z-50 space-y-6 px-4 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-amber-100 bg-amber-100 ease-in-out duration-500" : "hidden ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100% "}>
        <div className="logo  flex py-8">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
        <li>
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Solutions
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-2 py-3">
            Login
          </a>
        </li>
        <li className="pt-2">
          <a href="#" className="text-lg text-amber-900 hover:text-amber-700 transition-colors px-4 py-3 border-2 border-amber-900 hover:border-amber-700 rounded-lg">
            Sign up now
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
