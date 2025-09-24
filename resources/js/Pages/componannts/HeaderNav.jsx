import { useState } from "react";
import logo from "../../../../public/assets/vector-img/nav-logo.png";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "@inertiajs/react";

const HeaderNav = () => {
    const [show, setShow] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="relative shadow-lg shadow-emerald-300">
                <div className=" flex justify-between items-center mx-5">
                    <div>
                        <img
                            src={logo}
                            alt="image"
                            className="w-20 2xl:w-[5.5rem]"
                        />
                    </div>
                    <div
                        className={
                            show
                                ? "absolute top-28 right-0 left-0 text-center bg-white max-w-full transition"
                                : "absolute  bottom-24 md:top-7 md:left-52 lg:left-[29rem] xl:left-[45rem] 2xl:left-[84rem] transition"
                        }
                    >
                        <ul className="md:flex">
                            <li className="mb-6">
                                <Link
                                    href={"/"}
                                    className="uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link
                                    href={"/"}
                                    className="uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150"
                                >
                                    Who we are
                                </Link>
                            </li>
                            <li
                                className="relative mb-6"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="uppercase cursor-pointer mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150">
                                    Products
                                </span>
                                {isDropdownOpen && (
                                    <ul className="absolute w-fit md:w-56 top-full left-20 md:left-0 font-serif bg-white border shadow-lg rounded-lg mt-1">
                                        <li>
                                            <Link
                                                href="/gym-software"
                                                className="block p-2 text-gray-800 rounded-t-lg hover:bg-slate-300"
                                            >
                                                Gym Management Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/pos-software"}
                                                className="block p-2 text-gray-800 hover:bg-slate-300"
                                            >
                                                POS Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/ecommerce-website"}
                                                className="block p-2 text-gray-800 rounded-b-lg hover:bg-slate-300"
                                            >
                                                E-commerce Website
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="mb-6">
                                <Link
                                    href={"/"}
                                    className="uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150"
                                >
                                    Service
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link
                                    href={"/"}
                                    className="uppercase mx-6 md:mx-2 font-serif p-2 hover:bg-slate-300 hover:rounded-lg hover:transition hover:delay-150"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setShow(!show)}>
                            {!show ? (
                                <HiBars3 className="text-4xl font-bold text-emerald-500"></HiBars3>
                            ) : (
                                <HiOutlineXMark className="text-4xl font-bold text-emerald-500"></HiOutlineXMark>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;
