import React from "react";

export default function FeaturesSection({ title, description, featuresData }) {
    return (
        <>
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-5 md:mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData?.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl mr-3 transition-transform duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </span>
                                    <h3 className="text-xl font-bold text-emerald-800 transition-colors duration-300 group-hover:text-emerald-700">
                                        {feature.title}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {feature?.items?.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start"
                                        >
                                            <svg
                                                className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-gray-700 leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
