import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Update = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-400 py-8">
      {/* <div className='w-full bg-violet-600 text-white py-8 rounded-t-sm shadow-2xl gap-4'> */}
      <div className='flex flex-col md:flex md:flex-row justify-around mb-10 pl-6 gap-4'>
        <div>
          <h1 className='text-2xl pb-4'>Kenny</h1>
          <p className='hover:text-red-300'>Frontend Developer crafting beautiful web experiences</p>
          
        </div>

        <div>
          <h1 className='hover:text-red-300 py-2'>Quick links</h1>
          <ul className='leading-loose'>
            <li className='hover:text-red-300'>Home</li>
            <li className='hover:text-red-300'>Product</li>
            <li className='hover:text-red-300'>About Us</li>
          </ul>
        </div>

        <div className=''>
          <h1 className='hover:text-red-300 py-2'>Follow Me</h1>
          <div className='text-white text-4xl'>
            <div className='flex md:justify-center space-x-4'>
              <a
                href="https://x.com/ADEDEJI75478695"
                className='flex items-center text-[22px]'
              >
                <FontAwesomeIcon icon={faX} className="rounded-md bg-[#38BDF8] hover:bg-[#38BDF8] hover:text-white p-2" />
              </a>
              <a
                href="https://github.com/daramolakenny"
                className='flex items-center text-[22px]'
              >
                <FontAwesomeIcon icon={faGithub} className="rounded-md bg-[#38BDF8] hover:bg-[#38BDF8] hover:text-white p-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/daramola-kehinde-14028b292/"
                className='flex items-center text-[22px]'
              >
                <FontAwesomeIcon icon={faLinkedin} className="rounded-md bg-[#38BDF8] hover:bg-[#38BDF8] hover:text-white p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mx-6.5 md:mx-20 text-center pt-4">
        <p className="md:pl-20">© {new Date().getFullYear()} Daramola Kehinde. Alrights Reserved </p>
      </div>
    {/* </div> */}
    </footer>
  );
}

export default Update;