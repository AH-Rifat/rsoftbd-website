import RequestDemoModal from "./RequestDemoModal";

export default function PricingCard({ plans }) {
    return (
        <>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Plan
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                            Select the perfect plan that fits your business
                            needs
                        </p>
                    </div>

                    {/* Pricing Plans - Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl border-2 bg-emerald-50 transition-shadow duration-300 hover:shadow-lg flex flex-col ${
                                    plan.popular
                                        ? "border-emerald-500 shadow-lg"
                                        : "border-gray-200"
                                }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Content */}
                                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                    {/* Plan Name */}
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                            {plan.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mt-4">
                                            <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                                <strong>৳</strong>
                                                {plan.price}
                                            </span>
                                            <span className="text-base sm:text-lg text-gray-600 ml-1">
                                                {plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                                        {plan.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-sm sm:text-base text-gray-700">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Purchase Button */}
                                    <div className="mt-auto flex flex-col gap-4">
                                        <button
                                            className={`w-full uppercase bg-emerald-400 hover:bg-emerald-500 py-3 px-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-colors duration-200`}
                                        >
                                            Purchase Plan
                                        </button>
                                        <RequestDemoModal packageData={plan} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-12 px-4">
                        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm max-w-2xl mx-auto">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                All plans include:
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                ✅ Secure transactions • 30-day money-back
                                guarantee • No hidden fees • Cancel anytime
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
