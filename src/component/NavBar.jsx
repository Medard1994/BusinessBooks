import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { AuthContext } from "../context/AuthProvider"; 
import { FaBlog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; 
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext); 
  const location = useLocation();  // Get the current location

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll handler
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 bg-blue-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" /> BussinessBooks
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-base text-black uppercase cursor-pointer hover:text-blue-700 ${location.pathname === path ? "text-blue-700 font-bold" : ""}`}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* User Profile / Login Button (Large Screens) */}
          <div className="space-x-12 hidden lg:flex items-center">
            {user ? (
              <span className="text-black flex items-center gap-2">
                {user.email}
                <FaSignOutAlt className="text-red-500 cursor-pointer" />
              </span>
            ) : (
              <Link to="/login" className="text-blue-700 flex items-center gap-2">
                <FaSignInAlt /> Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Show login/logout icons for small screens */}
            {user ? (
              <FaSignOutAlt className="text-red-500 h-6 w-6 cursor-pointer" />
            ) : (
              <Link to="/login">
                <FaSignInAlt className="text-blue-700 h-6 w-6 cursor-pointer" />
              </Link>
            )}

            {/* Mobile menu toggle button */}
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`bg-blue-700 mt-16 py-7 px-4 space-y-4`}>
            {navItems.map(({ link, path }) => (
              <Link 
                key={path} 
                to={path} 
                className={`block text-white text-lg uppercase ${location.pathname === path ? "font-bold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
