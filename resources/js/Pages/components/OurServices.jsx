import image1 from "../../../../public/assets/vector-img/MOBILE-APPLICATION.png";
import image2 from "../../../../public/assets/vector-img/website.png";
import image3 from "../../../../public/assets/vector-img/software.png";

const ourServiceData = [
    {
        id: 1,
        image: image1,
        name: "Mobile Application",
        description:
            "Native and cross-platform mobile apps for iOS and Android",
    },
    {
        id: 2,
        image: image2,
        name: "Web Application",
        description:
            "Responsive and scalable web applications with modern frameworks",
    },
    {
        id: 3,
        image: image3,
        name: "Custom Software",
        description: "Tailored software solutions for your business needs",
    },
];

const OurServices = () => {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
            <div className="max-w-7xl mx-10 md:mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                        Our Services
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
                        We deliver cutting-edge digital solutions tailored to
                        your business requirements
                    </p>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ourServiceData.map(({ id, image, name, description }) => (
                        <div
                            key={id}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-emerald-100 overflow-hidden"
                        >
                            {/* Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="relative p-8 text-center">
                                {/* Image Container - Updated */}
                                <div className="mb-6 relative">
                                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 shadow-md p-4">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                                    {name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
