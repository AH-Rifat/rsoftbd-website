import contactPageImage from "../../../../public/assets/vector-img/contact-us-page.png";

const ContactSection = ({ className }) => {
    return (
        <div className={className}>
            {/* Section Header */}
            <div className="text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                    Contact Us
                </h1>
                <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-5 px-4 sm:px-6 py-8 sm:py-12 md:mx-auto md:flex md:items-center md:justify-between md:gap-8 lg:gap-12">
                {/* Contact Form Section */}
                <div className="md:flex-1">
                    <form className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col gap-1">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter your full name"
                                aria-required="true"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="form-label">Your Email</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="form-label">
                                Your Phone Number
                            </label>
                            <input
                                type="tel"
                                className="form-input"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="form-label">Your Message</label>
                            <textarea
                                className="form-input resize-none"
                                rows={3}
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out hover:translate-y-[-2px] active:translate-y-0 shadow-md hover:shadow-lg border border-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
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
        </div>
    );
};

export default ContactSection;
