
// import React from 'react';
// import ReactDOM from 'react-dom'; // แก้การนำเข้า ReactDOM

// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// // แทนด้วยการเรียก ReactDOM.render เหมือนเดิม
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   // document.getElementById('root') // ส่วนนี้คือ element ที่ต้องการให้ React render เข้าไป
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import ErrorPage from './components/errors/ErrorPage';
// import Singin from './pages/singin&singoutPage/Singin';
// import Navbar from './components/navbar/NavBar';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/singin" element={<Singin />} />
//         <Route path="*" element={<ErrorPage />} />
//         {/* เพิ่ม Route สำหรับหน้า ErrorPage */}
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );





