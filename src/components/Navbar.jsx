import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center px-6 sm:px-10 py-3 fixed top-0 z-20 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(''); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className="w-[32px] h-[32px] object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] text-gray-900 font-semibold font-poppins">
              Tshivhandekano Onndwela
            </span>
            <span className="text-[10px] text-gray-400 font-poppins">
              Freelance Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-6 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={() => setActive(nav.title)}>
              <a
                href={`#${nav.id}`}
                className={`text-[13px] font-poppins font-medium transition duration-150 ${
                  active === nav.title ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 rounded-full bg-gray-900 text-white text-[12px] font-poppins font-medium hover:bg-blue-600 transition duration-150"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex justify-end items-center">
          {toggle ? (
            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col p-8">
              <div className="flex justify-end mb-10">
                <img
                  src={close}
                  alt="close"
                  className="w-[20px] h-[20px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="flex flex-col gap-8">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      className={`text-[20px] font-poppins font-semibold ${
                        active === nav.title ? 'text-blue-600' : 'text-gray-800'
                      }`}
                      onClick={() => { setToggle(false); setActive(nav.title); }}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-full bg-gray-900 text-white text-[15px] font-poppins font-medium"
                    onClick={() => setToggle(false)}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
