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

import Main from "./Main";
import { Route, Routes } from 'react-router-dom';
import Singin from "./pages/singin&singoutPage/Singin";
import Singup from "./pages/singin&singoutPage/Singup";
import NavBar from "./components/navbar/NavBar";
import Account from "./pages/account/AccountPage"

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;