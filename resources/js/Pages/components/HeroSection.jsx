import landingImage from "../../../../public/assets/vector-img/landing.png";

export default function HeroSection() {
    return (
        <div className="h-[35rem] md:min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row lg:flex-row items-center lg:justify-between lg:gap-12 xl:gap-16">
                    {/* Text Content */}
                    <div className="font-serif text-center md:text-left lg:text-left lg:flex-1 order-2 lg:order-1">
                        {/* Main Heading */}
                        <div className="mb-4 lg:mb-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                                    Complete Digital
                                </span>
                                <span className="text-gray-800 block mt-1 lg:mt-2">
                                    Solutions for Your Business
                                </span>
                            </h1>

                            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto md:mx-0 lg:mx-0 mt-4 lg:mt-6"></div>
                        </div>

                        {/* Subtitle */}
                        <div className="mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0">
                            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-600 leading-relaxed mb-3">
                                Custom Software Development & Professional
                                WordPress Websites
                            </p>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-3 py-1.5 border border-emerald-100">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-emerald-700 font-semibold text-sm">
                                    Tailored to Your Unique Needs
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center md:justify-start lg:justify-start mb-6 lg:mb-10">
                            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 py-3 px-6 rounded-xl text-white font-semibold text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:flex-1 md:flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                        <div className="relative max-w-md lg:max-w-none">
                            {/* Main image container */}
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur-lg opacity-30"></div>
                                <img
                                    src={landingImage}
                                    alt="Complete Digital Solutions for Business Growth"
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-xl rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
