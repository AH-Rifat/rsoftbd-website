import { useForm } from "@inertiajs/react";
import contactPageImage from "../../../../public/assets/vector-img/contact-us-page.png";

const ContactSection = ({ className }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact-us/send-message", {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const inputClassName =
        "w-full border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg px-4 py-2.5 text-gray-800 transition-all duration-150 placeholder-gray-400 focus:outline-none";

    return (
        <>
            <div
                className={
                    className +
                    " bg-gradient-to-b from-white via-emerald-50 to-white"
                }
            >
                {/* Section Header */}
                <div className="text-center px-6 py-8 sm:py-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-3">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Have questions, feedback, or partnership ideas? We'd
                        love to hear from you.
                    </p>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 md:flex md:items-center md:justify-between md:gap-12">
                    {/* Contact Form */}
                    <div className="md:flex-1 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className={inputClassName}
                                    placeholder="John Doe"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className={inputClassName}
                                    placeholder="you@example.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className={inputClassName}
                                    placeholder="+880 1XXX-XXXXXX"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                {errors.phone && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className={inputClassName + " resize-none"}
                                    placeholder="Write your message here..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 disabled:opacity-70"
                                disabled={processing}
                            >
                                {processing ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:block md:flex-1 mt-12 md:mt-0 text-center">
                        <img
                            src={contactPageImage}
                            alt="Contact us"
                            className="w-full max-w-md mx-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;
