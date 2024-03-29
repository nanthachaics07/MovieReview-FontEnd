
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorScheme } from '../components/navbar/Darkmode';

function RegisterPage() {
  const { isChecked } = useColorScheme(); 
  const navigate = useNavigate();

  return (
    <div className={`container mx-auto absolute inset-[9rem] grid-flow-col ${isChecked ? 'whiteText' : ''}`}>
      <div className={`work-sans leading-normal text-base tracking-normal justify-center items-center ${isChecked ? 'whiteText' : ''}`}>
        <div className="relative z-0 flex content-center py-20 lg:py-40">
          <div className="container mx-auto my-auto px-4 lg:pt-24 ">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="text-center">
                  <h2 className={`text-4xl font-semibold leading-normal mb-2 ${isChecked ? 'whiteText' : 'text-gray-800'}`}>
                    Say Hi Form Developer
                  </h2>
                  <p className={`text-lg font-light leading-relaxed mt-4 mb-4 ${isChecked ? 'whiteText' : 'text-gray-700'}`}>
                    Pls Sing In Or Sing Up For Get Access Token.
                  </p>
                  <div className="mt-[2rem]">
                    <button className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-800 
                      hover:bg-gray-800 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                      onClick={() => navigate('/singin')}>
                      Sing In
                    </button>
                    <button className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-800 
                      hover:bg-gray-800 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                      onClick={() => navigate('/singup')}>
                      Sing Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

