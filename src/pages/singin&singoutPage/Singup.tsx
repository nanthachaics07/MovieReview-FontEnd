import React from 'react';
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <div className="w-full h-scree">
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className="flex justify-center items-center h-screen">
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-10'>
                <h1 className='text-3xl font-bold text-center pb-5'>Sign Up</h1>
                {/* {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null} */}
                <form className='w-full flex flex-col py-2'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" placeholder='Enter your email' 
                          className='p-3 my-2 bg-gray-700 rounded' />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='Enter your password' 
                          className='p-3 my-2 bg-gray-700 rounded' />
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter your password' 
                          className='p-3 my-2 bg-gray-700 rounded' />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p><input type="checkbox" /> Remember Me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-600'>Already have an account?</span>{' '}
                    <Link to="/singin">Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singin;