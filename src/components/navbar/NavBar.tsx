import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/");
  }

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleToHome}>
              <h1 className="text-red-600 text-4xl font-bold cursor-pointer mr-8 hover:text-yellow-500">SAFEFLIX</h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-500">Sign In</button>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
