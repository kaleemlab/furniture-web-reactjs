import React from 'react';

// import logo

// import data
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className='section bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0' href='#'>
            <h1 className='text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]'>
          CODIEST STORE
        </h1>
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'
                  key={index}
                >
                  <a href='#'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-center'>
          &copy; CODIEST 2022 - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
