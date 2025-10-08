import RequestDemoModal from "./RequestDemoModal";

export default function PricingCard({ plans }) {
    return (
        <>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section with Animation */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                            Choose Your Plan
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-200">
                            Select the perfect plan that fits your business
                            needs
                        </p>
                    </div>

                    {/* Pricing Plans - Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-10 md:mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl border-2 bg-emerald-50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col animate-slide-in-up animation-delay-${
                                    index * 100
                                } ${
                                    plan.popular
                                        ? "border-emerald-500 shadow-lg ring-1 ring-emerald-200"
                                        : "border-gray-200 hover:border-emerald-300"
                                }`}
                            >
                                {/* Popular Badge with Animation */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                                        <span className="bg-gradient-to-r from-emerald-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Content */}
                                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                    {/* Plan Name with Subtle Hover Animation */}
                                    <div className="text-center mb-6 transform transition-transform duration-300 hover:scale-[1.01]">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                            {plan.name}
                                        </h3>

                                        {/* Price with Pulse Animation */}
                                        <div className="mt-4 animate-pulse-subtle">
                                            <span className="text-3xl sm:text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text text-transparent">
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
                                        {plan.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-start transform transition-all duration-300 hover:translate-x-1"
                                                    style={{
                                                        animationDelay: `${
                                                            featureIndex * 50
                                                        }ms`,
                                                    }}
                                                >
                                                    <div className="animate-checkmark">
                                                        <svg
                                                            className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M5 13l4 4L19-7"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700">
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className="mt-auto flex flex-col gap-4">
                                        <button
                                            className={`relative overflow-hidden w-full uppercase bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 py-3 px-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.99]`}
                                        >
                                            <span className="relative z-10">
                                                Purchase Plan
                                            </span>
                                            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                                        </button>
                                        <RequestDemoModal packageData={plan} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
