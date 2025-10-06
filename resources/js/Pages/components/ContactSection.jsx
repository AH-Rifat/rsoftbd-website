import React from "react";
import contactPageImage from "../../../../public/assets/vector-img/contact-us-page.png";

const ContactSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:flex md:items-center md:justify-between md:gap-8 lg:gap-12">
            {/* Contact Form Section */}
            <div className="md:flex-1">
                <form className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="font-serif text-gray-600 text-base sm:text-lg font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="font-serif text-gray-600 text-base sm:text-lg font-medium">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-2">
                        <label className="font-serif text-gray-600 text-base sm:text-lg font-medium">
                            Your Message
                        </label>
                        <textarea
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 placeholder-gray-400 resize-none text-sm sm:text-base"
                            cols="30"
                            rows="4 sm:rows-6"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-105 focus:scale-95 text-sm sm:text-base md:text-lg shadow-md sm:shadow-lg hover:shadow-emerald-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Image Section - Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:block md:flex-1 mt-8 md:mt-0">
                <img
                    src={contactPageImage}
                    alt="Contact us illustration"
                    className="w-full max-w-xs sm:max-w-md mx-auto lg:max-w-lg transform hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    );
};

export default ContactSection;
