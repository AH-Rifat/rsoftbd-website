import PricingCard from "../components/PricingCard";
import RequestDemoModal from "../components/RequestDemoModal";
import PageLayout from "../layouts/Page-layout";

export default function GymSoftwarePage() {
    const plans = [
        {
            name: "Basic",
            price: "19,500",
            period: "one-time",
            product: "gym-software",
            features: [
                "২ হাজার মেম্বার ম্যানেজ করা যাবে",
                "অফলাইনে পেমেন্ট নেয়া যাবে",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে",
                "২ জন ব্যবহারকারী একসাথে ব্যবহার করতে পারবে",
                "24/7 কাস্টমার সাপোর্ট",
                "বেসিক ফাইন্যান্সিয়াল রিপোর্টিং",
            ],
        },
        {
            name: "Premium",
            price: "29,500",
            period: "one-time",
            product: "gym-software",
            popular: true,
            features: [
                "৫ হাজার মেম্বার ম্যানেজ করা যাবে",
                "অফলাইনে পেমেন্ট নেয়া যাবে",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে",
                "৫ জন ব্যবহারকারী একসাথে ব্যবহার করতে পারবে",
                "24/7 প্রায়োরিটি সাপোর্ট",
                "এডভান্সড ফাইন্যান্সিয়াল রিপোর্টিং",
                "বিজনেস গ্রোথ অ্যানালিটিক্স",
            ],
        },
        {
            name: "Enterprise",
            price: "99,500",
            period: "one-time",
            product: "gym-software",
            features: [
                "২০+ মেম্বার ম্যানেজ করা যাবে",
                "অনলাইন / অফলাইনে পেমেন্ট নেয়া যাবে",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে",
                "১০+ জন ব্যবহারকারী একসাথে ব্যবহার করতে পারবে",
                "24/7 ডেডিকেটেড সাপোর্ট",
                "কমপ্লিট বিজনেস ইন্টেলিজেন্স",
                "কাস্টমাইজড রিপোর্টিং",
                "API এক্সেস",
            ],
        },
    ];

    const features = [
        {
            icon: "👥",
            title: "সদস্য ব্যবস্থাপনা",
            items: [
                "স্থায়ী সদস্য ডাটাবেস",
                "ক্যাটাগরি ভিত্তিক তালিকা",
                "এক ক্লিক কমিউনিকেশন",
            ],
        },
        {
            icon: "💳",
            title: "পেমেন্ট সিস্টেম",
            items: [
                "অনলাইন/অফলাইন পেমেন্ট",
                "অটোমেটেড রিমাইন্ডার",
                "বকেয়া ট্র্যাকিং",
            ],
        },
        {
            icon: "📊",
            title: "ফাইন্যান্সিয়াল রিপোর্ট",
            items: [
                "আয়-ব্যয় রিপোর্ট",
                "বিজনেস গ্রোথ অ্যানালিসিস",
                "ROI ক্যালকুলেশন",
            ],
        },
        {
            icon: "✅",
            title: "অ্যাটেনডেন্স ট্র্যাকিং",
            items: [
                "রিয়েল-টাইম উপস্থিতি",
                "অনিয়মিত সদস্য চিহ্নিতকরণ",
                "অটোমেটেড রিপোর্ট",
            ],
        },
        {
            icon: "🎯",
            title: "প্যাকেজ ম্যানেজমেন্ট",
            items: [
                "প্যাকেজ অফার ম্যানেজমেন্ট",
                "সদস্যের প্যাকেজ হিস্ট্রি",
                "প্যাকেজ রেনুয়াল রিমাইন্ডার",
            ],
        },
        {
            icon: "🔔",
            title: "নোটিফিকেশন",
            items: [
                "এসএমএস ও ইমেইল অ্যালার্ট",
                "বাল্ক মেসেজিং",
                "কাস্টমাইজড নোটিফিকেশন",
            ],
        },
    ];

    return (
        <PageLayout>
            {/* Simple Hero Section */}
            <div className="bg-white py-12">
                <div className="max-w-4xl mx-10 md:mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        জিম ম্যানেজমেন্ট সফটওয়্যার
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        আপনার জিম ব্যবস্থাপনা সহজ এবং কার্যকর করুন
                    </p>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                            কেন আমাদের সফটওয়্যার বেছে নিবেন?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                "স্ট্যান্ডার্ড সহজ সফটওয়্যার",
                                "সিকিউর ডাটা প্রোটেকশন",
                                "মোবাইল ফ্রেন্ডলি",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-10 md:mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            সকল ফিচারস একসাথে
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            আপনার জিম ব্যবস্থাপনাকে করুণ আরও সহজ এবং কার্যকর
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
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
                                    {feature.items.map((item, itemIndex) => (
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
            <PricingCard plans={plans} />
        </PageLayout>
    );
}
