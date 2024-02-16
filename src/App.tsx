// import HomePage from "./pages/HomePage";
// import NavBar from "./components/navbar/NavBar";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <HomePage />
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ErrorPage from './components/errors/ErrorPage';
// import Singin from './pages/singin&singoutPage/Singin';
// // import Navbar from './components/navbar/NavBar';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <>
//       <Router>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/singin" element={<Singin />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ErrorPage from './components/errors/ErrorPage';
// import Singin from './pages/singin&singoutPage/Singin';
// import Navbar from './components/navbar/NavBar';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>

//         <Route path="/" element={<HomePage />} />
//         <Route path="/singin" element={<Singin />} />
//         <Route path="*" element={<ErrorPage />} /> 

//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { useState } from 'react';
// import Main from "./Main";
// import {  Route, Routes } from 'react-router-dom';
// import Singin from "./pages/singin&singoutPage/Singin";
// import Singup from "./pages/singin&singoutPage/Singup";
// import NavBar from "./components/navbar/NavBar";
// import Account from "./pages/account/AccountPage"
// import Movie from "./pages/Movie"
// import RegisPage from "./pages/RegisterPage";

// function App() {

//   const [jwtToken, setJwtToken] = useState<string>("");

//   return (
//     <>
//       {/* <NavBar /> */}
//       <div className="container">
//         <NavBar jwtToken={jwtToken} setJwtToken={setJwtToken} />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/singin" element={<Singin />} />
//           <Route path="/singup" element={<Singup />} />
//           <Route path="/account" element={<Account />} />
//           <Route path="/movies/:id" element={<Movie />} />
//           <Route path="/register" element={<RegisPage />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import { AuthProvider } from './components/Auth/AuthContex';
// import Main from "./Main";
// import {  Route, Routes } from 'react-router-dom';
// import Singin from "./pages/singin&singoutPage/Singin";
// import Singup from "./pages/singin&singoutPage/Singup";
// import NavBar from "./components/navbar/NavBar";
// import Account from "./pages/account/AccountPage"
// import Movie from "./pages/Movie"
// import RegisPage from "./pages/RegisterPage";

// function App() {
//   return (
//     <AuthProvider>
//       <div className="container">
//         <NavBar jwtToken="" setJwtToken={() => {}} />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/singin" element={<Singin />} />
//           <Route path="/singup" element={<Singup />} />
//           <Route path="/account" element={<Account />} />
//           <Route path="/movies/:id" element={<Movie />} />
//           <Route path="/register" element={<RegisPage />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContex';
import Main from './Main';
// import { Route, Routes } from 'react-router-dom';
import Singin from './pages/singin&singoutPage/Singin';
import Singup from './pages/singin&singoutPage/Singup';
import NavBar from './components/navbar/NavBar';
import Account from './pages/account/AccountPage';
import Movie from './pages/Movie';
import RegisPage from './pages/RegisterPage';

function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/register" element={<RegisPage />} />
          </Routes>
        </div>
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;



