import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200'>
      <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
        <p>© All Rights Reserved 2024.</p>
        <div className='flex items-center gap-4 justify-center text-2xl'>
          <a href='https://facebook.com/yourprofile' target="_blank" rel="noopener noreferrer" aria-label='Facebook' className='hover:text-primary-100'>
            <FaFacebook />
          </a>
          <a href='https://instagram.com/yourprofile' target="_blank" rel="noopener noreferrer" aria-label='Instagram' className='hover:text-primary-100'>
            <FaInstagram />
          </a>
          <a href='https://linkedin.com/in/yourprofile' target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' className='hover:text-primary-100'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
