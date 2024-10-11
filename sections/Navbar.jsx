/* eslint-disable no-unused-vars */
import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import {navLists} from '../constants';

function Navbar() {
  return (
    <header className='w-full flex justify-between items-center py-5 px-5 sm:px-10'>
      <nav className='w-full screen-max-width flex'>
        <img  src={appleImg} alt="Apple" width={20} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <div  key={index} className="px-5 text-sm text-gray cursor-pointer hover:text-white hover:underline transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
