import React from 'react';

function AdminPage() {
    return (
      <div className="container mx-auto absolute inset-[9rem] grid-flow-col ">
        {/* <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"> */}
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal justify-center items-center">
          <div className="relative z-0 flex content-center py-20 lg:py-40">
            <div className="container mx-auto my-auto px-4 lg:pt-24 ">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="text-center">
                    <h2 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                        Welcome to Admin Panel
                    </h2>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Say Hi Form Developer.
                    </p>
                    <div className="mt-[2rem]">
                      <button  className=" text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-800 
                      hover:bg-gray-800 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                          Get Started
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

export default AdminPage;
