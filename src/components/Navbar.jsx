import React, { useEffect, useState } from 'react';
// import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

// react icons
import { FaXmark, FaBars, FaSquareWhatsapp, FaTelegram } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
        { link: "Услуги", path: "service" },
        { link: "Кейсы", path: "cases" },
        { link: "Блог", path: "blog" },
        { link: "Контакты", path: "contacts" }
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-3xl font-semibold flex items-center space-x-3'>
                        {/* <img src={logo} alt="" className='w-10 inline-block items-center' /> */}
                        <span className='text-[#263238]'>ASKAT</span>
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
                                className='block text-base text-gray900 hover:text-brandPrimary cursor-pointer first:font-medium'
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* icons and button for large devices */}
                    <div className='space-x-4 hidden lg:flex items-center'>
                        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                            <FaSquareWhatsapp className='text-neutralDGrey h-6 w-6 hover:text-brandPrimary' />
                        </a>
                        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className='text-neutralDGrey h-6 w-6 hover:text-brandPrimary' />
                        </a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey cursor-pointer'>
                            Запросить предложение
                        </button>
                    </div>

                    {/* menu btn for only mobile devices */}
                    <div className='flex items-center md:hidden'>
                        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                            <FaSquareWhatsapp className='text-neutralDGrey h-6 w-6 mr-2' />
                        </a>
                        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className='text-neutralDGrey h-6 w-6 mr-2' />
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
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            key={path}
                            className='block text-base text-white cursor-pointer first:font-medium'
                        >
                            {link}
                        </Link>
                    ))}
                    <button className='block text-base text-white cursor-pointer first:font-medium'>
                        Запросить предложение
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
