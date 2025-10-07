import { Link } from "@inertiajs/react";
import footerLogo from "../../../../public/assets/logo.png";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaYoutubeSquare,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-emerald-50 py-8 mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo and Company Info */}
                <div className="text-center mb-8">
                    <img
                        src={footerLogo}
                        alt="R-SoftBD Logo"
                        className="w-20 mx-auto mb-4"
                    />
                    <Link
                        to={"/"}
                        className="font-bold font-serif text-xl text-emerald-800 hover:text-emerald-700 transition-colors block"
                    >
                        R-Soft-BD
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Contact Information */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-bold text-xl mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Jurain, Dhaka - 1204, Bangladesh
                                </span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-gray-700">
                                    +880 1920-770880
                                </span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-gray-700">
                                    contact@rsoftbd.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-bold text-xl mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <Link
                                    to={"/about"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to={"/careers"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    Careers
                                </Link>
                                <Link
                                    to={"/services"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    Services
                                </Link>
                            </div>
                            <div className="space-y-3">
                                <Link
                                    to={"/privacy"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to={"/terms"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    to={"/contact"}
                                    className="block text-gray-700 hover:text-emerald-700 transition-colors font-medium"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-bold text-xl mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2">
                            Follow Us
                        </h3>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/rsoftbd.fb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
                                aria-label="Follow us on Facebook"
                            >
                                <FaFacebookSquare className="w-6 h-6" />
                            </a>

                            {/* YouTube */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
                                aria-label="Follow us on YouTube"
                            >
                                <FaYoutubeSquare className="w-6 h-6" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/rsoftbd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors transform hover:scale-110"
                                aria-label="Follow us on LinkedIn"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-110"
                                aria-label="Follow us on Instagram"
                            >
                                <FaInstagramSquare className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center border-t border-emerald-200 pt-6">
                    <p className="text-gray-600 text-sm md:text-base">
                        Copyright © 2019 - {new Date().getFullYear()} R-SoftBD.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
