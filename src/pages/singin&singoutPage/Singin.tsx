// import { useState } from 'react';
// import { Link, useNavigate, useOutletContext } from "react-router-dom";

// interface OutletContext {
//   setJwtToken: (token: string) => void;
// }

// const Singin: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState("");

//   const outletContext = useOutletContext() as OutletContext | null;
//   const { setJwtToken } = outletContext ?? { setJwtToken: () => {} };

//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Singin Form");
//     console.log("email/pass", email, password); //log for testing purposes

//     if (email === "safecs07@test.com") {
//       setJwtToken("abcdefg");
//       console.log("JWT Created token:", "abcdefg"); // log the JWT token
//       navigate('/');
//       setError("");
//     } else {
//       navigate("/singin");
//       setError("Invalid email or password");
//     }
//   }


  // return (
  //   <div className="w-full h-scree">
  //     <img
  //       className='hidden sm:block absolute w-full h-full object-cover'
  //       src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
  //       alt='/'
  //     />
  //     <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
  //       <div className="flex justify-center items-center h-screen">
  //         <div className='fixed w-full px-4 py-24 z-10'>
  //           <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
  //             <div className='max-w-[320px] mx-auto py-16'>
  //               <h1 className='text-3xl font-bold text-center pb-10'>Sign In</h1>
  //               {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
  //               <form className='w-full flex flex-col py-2'>

  //                 <label htmlFor="email">Email Address</label>
  //                 <input type="email" name="email" id="email" placeholder='Enter your email' className='p-3 my-2 bg-gray-700 rounded' />
                  
  //                 <label htmlFor="password">Password</label>
  //                 <input type="password" name="password" id="password" placeholder='Enter your password' className='p-3 my-2 bg-gray-700 rounded' />
                  
  //                 <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-yellow-500' onClick={handleToAcc}>
  //                   Sign In
  //                 </button>
                  
  //                 <div className='flex justify-between items-center text-sm text-gray-600'>
  //                   <p><input type="checkbox" /> Remember Me</p>
  //                   <Link to="/" className='hover:text-yellow-500'>
  //                     <p>Need Help?</p>
  //                   </Link>
  //                 </div>
  //                 <p className='py-8'><span className='text-gray-600'>New to Safeflix?</span>{' '}
  //                   <Link to="/singup" className='hover:text-yellow-500'>Sign Up</Link>
  //                 </p>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../components/Auth/AuthContex';

// const Singin: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const { setJwtToken } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (email === "safecs07@test.com") {
//       setJwtToken("abcdefg");
//       navigate('/');
//       setError("");
//     } else {
//       setError("Invalid email or password");
//     }
//   }

  
//   return (
//     <div className="w-full h-screen">
//       <img
//         className='hidden sm:block absolute w-full h-full object-cover'
//         src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
//         alt='/'
//       />
//       <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
//         <div className="flex justify-center items-center h-screen">
//           <div className='fixed w-full px-4 py-24 z-10'>
//             <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
//               <div className='max-w-[320px] mx-auto py-16'>
//                 {/* {jwtToken ? ( // เช็คว่ามี token ใน localStorage หรือไม่
//                   <>
//                     <h1 className='text-3xl font-bold text-center pb-10'>Welcome Back</h1>
//                     <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-yellow-500' 
//                             onClick={handleToRegister}>
//                       Sign Out
//                     </button>
//                     <Link to="/movies/:id" className='hover:text-yellow-500'>
//                       <p>Go to Movies</p>
//                     </Link>
//                   </>
//                 ) : (
//                   <> */}
//                     <h1 className='text-3xl font-bold text-center pb-10'>Sign In</h1>
//                     {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
//                     <form className='w-full flex flex-col py-2' onSubmit={handleSubmit}>
//                       <label htmlFor="email">Email Address</label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder='Enter your email'
//                         className='p-3 my-2 bg-gray-700 rounded'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                       <label htmlFor="password">Password</label>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder='Enter your password'
//                         className='p-3 my-2 bg-gray-700 rounded'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-yellow-500'>
//                         Sign In
//                       </button>
//                       <div className='flex justify-between items-center text-sm text-gray-600'>
//                         <p>
//                           <input type="checkbox" /> Remember Me</p>
//                         <Link to="/" className='hover:text-yellow-500'>
//                           <p>Need Help?</p>
//                         </Link>
//                       </div>
//                       <p className='py-8'><span className='text-gray-600'>New to Safeflix?</span>{' '}
//                         <Link to="/signup" className='hover:text-yellow-500'>Sign Up</Link>
//                       </p>
//                     </form>
//                   {/* </> */}
//                 {/* )} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default Singin;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContex';

const Singin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { setJwtToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "safecs07@test.com") {
      setJwtToken("abcdefg");
      navigate('/');
      setError("");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="w-full h-screen">
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className="flex justify-center items-center h-screen">
          <div className='fixed w-full px-4 py-24 z-10'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold text-center pb-10'>Sign In</h1>
                {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
                <form className='w-full flex flex-col py-2' onSubmit={handleSubmit}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Enter your email'
                    className='p-3 my-2 bg-gray-700 rounded'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Enter your password'
                    className='p-3 my-2 bg-gray-700 rounded'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-yellow-500'>
                    Sign In
                  </button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p>
                      <input type="checkbox" /> Remember Me</p>
                    <Link to="/" className='hover:text-yellow-500'>
                      <p>Need Help?</p>
                    </Link>
                  </div>
                  <p className='py-8'><span className='text-gray-600'>New to Safeflix?</span>{' '}
                    <Link to="/signup" className='hover:text-yellow-500'>Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
