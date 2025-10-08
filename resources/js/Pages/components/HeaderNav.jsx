import { useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "@inertiajs/react";
import logo from "../../../../public/assets/vector-img/nav-logo.png";

const HeaderNav = () => {
    const [show, setShow] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <header className="relative shadow-md shadow-emerald-200 bg-white">
            <div className="flex justify-between items-center px-5 md:px-14 py-4">
                {/* Logo */}
                <Link href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-24 xl:w-28 2xl:w-32"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex items-center space-x-2 font-serif">
                        <li>
                            <Link
                                href="/"
                                className="uppercase px-3 py-2 hover:bg-emerald-200 rounded-lg transition"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="uppercase px-3 py-2 hover:bg-emerald-200 rounded-lg transition"
                            >
                                Who we are
                            </Link>
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <span className="flex items-center gap-1 uppercase cursor-pointer px-3 py-2 hover:bg-emerald-200 rounded-lg transition">
                                <div> Products</div> <IoIosArrowDown />
                            </span>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-1 bg-white border shadow-lg rounded-lg w-64 z-50">
                                    <li>
                                        <Link
                                            href="/gym-software"
                                            className="block px-4 py-2 hover:bg-emerald-100 rounded-t-lg"
                                        >
                                            Gym Management Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pos-software"
                                            className="block px-4 py-2 hover:bg-emerald-100"
                                        >
                                            POS Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/ecommerce-website"
                                            className="block px-4 py-2 hover:bg-emerald-100 rounded-b-lg"
                                        >
                                            E-commerce Website
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="uppercase px-3 py-2 hover:bg-emerald-200 rounded-lg transition"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Login Button - Desktop */}
                <div className="hidden md:block">
                    <Link
                        href="http://app.rsoftbd.com/login"
                        className="uppercase px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg transition duration-200 font-medium"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-emerald-500 text-4xl"
                    onClick={() => setShow(!show)}
                >
                    {show ? <HiOutlineXMark /> : <HiBars3 />}
                </button>
            </div>

            {/* Mobile Menu with Smooth Animation */}
            <div
                className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${
                    show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col text-center font-serif py-4">
                    <li>
                        <Link
                            href="/"
                            className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                            onClick={() => setShow(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                            onClick={() => setShow(false)}
                        >
                            Who we are
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleDropdown}
                            className="flex justify-center items-center gap-1 uppercase w-full py-2 hover:bg-emerald-100 transition-colors duration-200"
                        >
                            <div>Products</div>
                            <IoIosArrowDown
                                className={`transform transition-transform duration-300 ${
                                    isDropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isDropdownOpen
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <ul className="bg-gray-50 border-t border-b">
                                <li>
                                    <Link
                                        href="/gym-software"
                                        className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                                        onClick={() => setShow(false)}
                                    >
                                        Gym Management Software
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pos-software"
                                        className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                                        onClick={() => setShow(false)}
                                    >
                                        POS Software
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ecommerce-website"
                                        className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                                        onClick={() => setShow(false)}
                                    >
                                        E-commerce Website
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="uppercase block py-2 hover:bg-emerald-100 transition-colors duration-200"
                            onClick={() => setShow(false)}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Login Button - Mobile */}
                    <li className="mt-2 px-4">
                        <Link
                            href="http://app.rsoftbd.com/login"
                            className="uppercase block w-full py-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg transition duration-200 font-medium"
                            onClick={() => setShow(false)}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderNav;
