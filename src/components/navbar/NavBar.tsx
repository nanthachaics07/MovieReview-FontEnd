import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
//   const navigate = useNavigate();

  // const handleToHome = () => {
  //   navigate("/");
  // }

  // const handleToSingIn = () => {
  //   navigate("/singin");
  // }

  return (
    // <nav className="bg-gray-800 fixed w-full z-10">
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-red-600 text-4xl font-bold cursor-pointer mr-8 hover:text-yellow-500">
                SAFEFLIX
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/singin">
              <button className="text-white hover:text-yellow-500">Sign In</button>
            </Link>
            <Link to="/singup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white
                hover:bg-yellow-500 hover:text-red-600">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/singin">Sing In</Nav.Link>
//             <Nav.Link href="/singup">Sing Up</Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
