
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // ลบ BrowserRouter ออก
import { AuthProvider } from './components/Auth/AuthContex';
import PageNotFound from './components/errors/ErrorPageNotFound';
import Main from './Main';
import Singin from './pages/singin&singoutPage/Singin';
import Singup from './pages/singin&singoutPage/Singup';
import NavBar from './components/navbar/NavBar';
import Account from './pages/account/AccountPage';
import Movie from './pages/Movie';
import RegisPage from './pages/RegisterPage';
import AdminPage from './pages/admin/AdminPage';

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/notfoundpage" element={<PageNotFound />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/register" element={<RegisPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
