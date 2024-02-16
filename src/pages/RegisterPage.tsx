import React from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

  const navigate = useNavigate();


  return (
    <div className='fixed w-full h-screen z-1'>
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold text-black'>Home Page</h1>
        <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-yellow-500'
            onClick={() => navigate("/singin")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;