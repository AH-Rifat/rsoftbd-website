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
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-6 font-serif">
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
                                <ul className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-56 z-50">
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
                                href="/"
                                className="uppercase px-3 py-2 hover:bg-emerald-200 rounded-lg transition"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-emerald-500 text-4xl"
                    onClick={() => setShow(!show)}
                >
                    {show ? <HiOutlineXMark /> : <HiBars3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {show && (
                <div className="md:hidden bg-white border-t shadow-inner">
                    <ul className="flex flex-col text-center font-serif py-4">
                        <li>
                            <Link
                                href="/"
                                className="uppercase block py-2 hover:bg-emerald-100"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="uppercase block py-2 hover:bg-emerald-100"
                            >
                                Who we are
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleDropdown}
                                className="flex justify-center items-center gap-1 uppercase w-full py-2 hover:bg-emerald-100"
                            >
                                <div> Products</div> <IoIosArrowDown />
                            </button>
                            {isDropdownOpen && (
                                <ul className="bg-gray-50 border-t border-b">
                                    <li>
                                        <Link
                                            href="/gym-software"
                                            className="uppercase block py-2 hover:bg-emerald-100"
                                        >
                                            Gym Management Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pos-software"
                                            className="uppercase block py-2 hover:bg-emerald-100"
                                        >
                                            POS Software
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/ecommerce-website"
                                            className="uppercase block py-2 hover:bg-emerald-100"
                                        >
                                            E-commerce Website
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="uppercase block py-2 hover:bg-emerald-100"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default HeaderNav;
