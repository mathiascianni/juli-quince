import { navLinks } from "../constants"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShowing, setIsShowing] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    if (isOpen) return; // Prevent hiding when the menu is open

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setIsShowing(false);
    } else {
      // Scrolling up
      setIsShowing(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsShowing(true); // Ensure navbar stays visible when menu toggles
  };

  return (
    <nav className={`z-40 fixed flex items-center gap-4 xl:px-desk bg-indigo-700 px-4 py-4 w-full transition-all duration-500 ${isShowing ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center w-full">
        <a href="#incio">July</a>
        <button
          onClick={toggleMenu}
          className="block xl:hidden"
        >
          <img src="icons/menu.svg" alt="" />
        </button>
        <ul className="xl:flex justify-center items-center gap-4 hidden">
          {
            navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={`block xl:hidden h-screen bg-indigo-800 absolute w-full top-0 right-0 transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100 blur-none" : "translate-x-full opacity-0 blur-lg"}`}>
        <button
          className="block top-2 right-0 absolute w-10 font-bold text-xl aspect-square"
          onClick={toggleMenu}
        >
          <img src="icons/close.svg" alt="" />
        </button>
        <ul className="flex flex-col justify-center items-center gap-4 h-full text-2xl">
          {
            navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} onClick={toggleMenu}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar