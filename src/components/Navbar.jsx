import logo from "../assets/vanLifeLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setIsOpen(false);
    }
  };
  return (
    <nav className="flex items-center p-3 drop-shadow-lg shadow-black h-28">
      <Link to="/" className="mr-auto">
        <img src={logo} className="w-60" />
      </Link>
      <button
        className="text-center lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="2" x="2" y="6" fill="black" />
            <rect width="16" height="2" x="2" y="11" fill="black" />
            <rect width="16" height="2" x="2" y="16" fill="black" />
          </svg>
        )}
      </button>
      <div className={`${
      isOpen ? 'fixed top-20 left-0  w-full h-full bg-white' : 'fixed top-0 right-[-100%] w-[80%] h-full'
    } transition-all duration-300 ease-in-out z-10 lg:hidden md:hidden`}>
      <ul className={`text-lg flex flex-col md:hidden lg:hidden px-6`}>
        <NavLink
          to="host"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>Host</li>
        </NavLink>
        <NavLink
          to="about"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="vans"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>Vans</li>
        </NavLink>
        {!currentUser ? (
          <NavLink to="signIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M12 14c-5 0-8 3-8 6v2h16v-2c0-3-3-6-8-6z" />
            </svg>
          </NavLink>
        ) : (
          <NavLink to="signOut">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </NavLink>
        )}
      </ul>
      </div>
      <ul className={`text-lg gap-6 items-center px-6 hidden md:flex lg:flex `}>
        <NavLink
          to="host"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>Host</li>
        </NavLink>
        <NavLink
          to="about"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="vans"
          onClick={closeMenuOnMobile}
          className={({ isActive }) => (isActive ? "active-nav-link" : "")}
        >
          <li>Vans</li>
        </NavLink>
        {!currentUser ? (
          <NavLink to="signIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M12 14c-5 0-8 3-8 6v2h16v-2c0-3-3-6-8-6z" />
            </svg>
          </NavLink>
        ) : (
          <NavLink to="signOut">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
