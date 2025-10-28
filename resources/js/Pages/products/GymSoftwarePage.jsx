import AppHead from "../components/AppHead";
import FeaturesSection from "../components/FeaturesSection";
import PricingCard from "../components/PricingCard";
import PageLayout from "../layouts/Page-layout";

export default function GymSoftwarePage({ plans }) {
    const features = [
        {
            icon: "👥",
            title: "Member Management",
            items: [
                "Permanent member database",
                "Category-based listing",
                "One-click communication",
            ],
        },
        {
            icon: "💳",
            title: "Payment System",
            items: [
                "Online/offline payments",
                "Automated reminders",
                "Due payment tracking",
            ],
        },
        {
            icon: "📊",
            title: "Financial Reports",
            items: [
                "Income-expense reports",
                "Business growth analysis",
                "ROI calculation",
            ],
        },
        {
            icon: "✅",
            title: "Attendance Tracking",
            items: [
                "Real-time attendance",
                "Identifying irregular members",
                "Automated reports",
            ],
        },
        {
            icon: "🎯",
            title: "Package Management",
            items: [
                "Package offer management",
                "Member's package history",
                "Package renewal reminders",
            ],
        },
        {
            icon: "🔔",
            title: "Notification",
            items: [
                "SMS and email alerts",
                "Bulk messaging",
                "Customized notifications",
            ],
        },
    ];

    return (
        <PageLayout>
            <AppHead
                // Bengali SEO
                title="Gym Software"
                keywords="জিম ম্যানেজমেন্ট সফটওয়্যার, জিম সফটওয়্যার বাংলাদেশ, ফিটনেস সেন্টার সফটওয়্যার, জিম মেম্বার ম্যানেজমেন্ট, জিম পেমেন্ট সিস্টেম, জিম অ্যাটেনডেন্স ট্র্যাকিং, জিম রিপোর্টিং সফটওয়্যার, বাংলাদেশী জিম সফটওয়্যার, সাশ্রয়ী জিম সফটওয়্যার, ক্লাউড জিম সফটওয়্যার"
                description="বাংলাদেশের প্রথম সম্পূর্ণ বাংলা জিম ম্যানেজমেন্ট সফটওয়্যার। সদস্য রেজিস্ট্রেশন, পেমেন্ট ম্যানেজমেন্ট, অ্যাটেনডেন্স ট্র্যাকিং, অটোমেটেড রিমাইন্ডার, ডিটেইলড রিপোর্ট এবং মোবাইল অ্যাপ সহ সম্পূর্ণ সমাধান। ৩০ দিন ফ্রি ট্রায়াল নিন!"
                // English SEO
                titleEn="Gym Management Software Bangladesh - Complete Fitness Solution"
                keywordsEn="gym management software Bangladesh, fitness center software Dhaka, gym member management system, gym payment software, attendance tracking software, gym reporting tools, Bangladeshi gym software, affordable gym management, cloud gym software, gym automation Bangladesh"
                descriptionEn="Bangladesh's first complete Bengali & English Gym Management Software. Member registration, payment management, attendance tracking, automated reminders, detailed reports with mobile app. Get 30 days free trial for your gym business!"
                // Common SEO
                canonicalUrl="https://rsoftbd.com/gym-software"
                ogType="product"
            />
            {/* Simple Hero Section */}
            <div className="bg-white py-12">
                <div className="max-w-4xl mx-5 md:mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Gym Management Software
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Simplify and optimize your gym management
                    </p>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                            Why Choose Our Software?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "User-friendly interface",
                                "Advanced analytics & reporting",
                                "Automated billing & payments",
                                "Real-time attendance tracking",
                                "Mobile app compatibility",
                                "24/7 customer support",
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
            <FeaturesSection
                title={"All Features Together"}
                description={
                    "Make your gym management even easier and more effective"
                }
                featuresData={features}
            />
            {/* Pricing Section */}
            <PricingCard plans={plans} />
        </PageLayout>
    );
}
