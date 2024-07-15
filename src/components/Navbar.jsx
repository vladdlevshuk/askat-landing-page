import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaWhatsapp, FaTelegram } from 'react-icons/fa6';
import Modal from './RequestModal/RequestModal.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close menu when clicking on a menu item
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // open and close modal
  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // nav items array
  const navItems = [
    { link: "О нас", path: "home" },
    { link: "Услуги", path: "services" },
    { link: "Кейсы", path: "cases" },
    { link: "Контакты", path: "contacts" }
  ];

  return (
    <>
      <header className='w-full mx-auto bg-white md:bg-transparent fixed top-0 left-0 right-0' style={{ userSelect: 'none' }}>
        <nav className={`lg:px-14 px-5 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}
          style={{paddingTop: '18px', paddingBottom: '18px'}}
        >
          <div className='flex justify-between mx-auto items-center text-base gap-8' style={{maxWidth: '1440px'}}>
            <a href="/" className='text-3xl font-semibold flex items-center' onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo" className='w-8 inline-block items-center' />
              <span className='text-[#263238] ml-0'>ASKAT</span>
            </a>

            {/* nav items for large devices */}
            <ul className='md:flex space-x-12 hidden'>
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className='block text-lg text-gray900 lg:hover:text-brandPrimary lg:hover:scale-105 cursor-pointer
                  transition-all duration-300 first:font-medium'
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* icons and button for large devices */}
            <div className='hidden lg:flex items-center gap-4'>
              <div className='hidden lg:flex justify-between align-center gap-4'>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className='text-neutralDGrey h-6 w-6 lg:hover:text-brandPrimary transition-all duration-300' />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className='text-neutralDGrey h-6 w-6 lg:hover:text-brandPrimary transition-all duration-300' />
                </a>
              </div>
              <button
                className='bg-brandPrimary text-lg text-white py-2 px-4 transition-all duration-300 lg:hover:bg-neutralDGrey cursor-pointer rounded-3xl'
                onClick={openModal}
              >
                Заказать
              </button>
            </div>

            {/* menu btn for only mobile devices */}
            <div className='flex items-center md:hidden'>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTelegram className='text-neutralDGrey h-6 w-6 mr-4' />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='text-neutralDGrey h-6 w-6 mr-4' />
              </a>
              <button
                onClick={toggleMenu}
                className='text-neutralDGrey focus:outline-none focus:text-gray-500 cursor-pointer'
              >
                {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
              </button>
            </div>
          </div>

          {/* nav items for mobile devices */}
          <div className={`flex flex-col gap-8 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-2 right-0 left-0" : "hidden"}`}>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-lg text-white cursor-pointer first:font-medium'
                onClick={() => { closeMenu(); }}
              >
                {link}
              </Link>
            ))}
            <button className='block text-lg text-white cursor-pointer first:font-medium text-left' onClick={openModal}>
              Заказать
            </button>
          </div>
        </nav>
      </header>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
