import AppHead from "../components/AppHead";
import PageLayout from "../layouts/Page-layout";
import PricingCard from "../components/PricingCard";
import FeaturesSection from "../components/FeaturesSection";

const PosSoftwarePage = () => {
    const plans = [
        {
            name: "স্টার্টার",
            price: "১৫,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            target: "ছোট দোকান ও স্টার্টআপ",
            features: [
                "৫০০ পর্যন্ত প্রোডাক্ট এন্ট্রি",
                "বেসিক সেলস ও ইনভয়েস ম্যানেজমেন্ট",
                "সাধারণ ইনভেন্টরি ট্র্যাকিং",
                "কাস্টমার ইনফরমেশন ম্যানেজমেন্ট",
                "ভেন্ডর ম্যানেজমেন্ট",
                "বেসিক ফাইনান্সিয়াল রিপোর্ট (লাভ-লস)",
                "১ ইউজার লাইসেন্স",
                "ইমেল সাপোর্ট",
                "মাসিক ডাটা ব্যাকআপ",
            ],
        },
        {
            name: "বেসিক",
            price: "৩০,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            target: "ছোট রিটেইল শপ",
            features: [
                "২০০০ পর্যন্ত প্রোডাক্ট ম্যানেজমেন্ট",
                "সেলস, পারচেজ ও ইনভয়েস ম্যানেজমেন্ট",
                "এডভান্সড ইনভেন্টরি ট্র্যাকিং",
                "কাস্টমার লেডজার",
                "ভেন্ডর পেমেন্ট ট্র্যাকিং",
                "ডিটেইল্ড ফাইনান্সিয়াল রিপোর্ট",
                "২ ইউজার একসাথে ব্যবহার",
                "ফোন ও ইমেল সাপোর্ট",
                "সাপ্তাহিক অটো ব্যাকআপ",
                "ব্যাসিক বারকোড সাপোর্ট",
            ],
        },
        {
            name: "প্রফেশনাল",
            price: "৫৫,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            popular: true,
            target: "মাঝারি ব্যবসা ও কারখানা",
            features: [
                "১০,০০০ পর্যন্ত প্রোডাক্ট ম্যানেজমেন্ট",
                "কমপ্লিট সেলস ও পারচেজ সিস্টেম",
                "রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং",
                "CRM (কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট)",
                "এডভান্সড রিপোর্টিং ও অ্যানালিটিক্স",
                "মাল্টি-কারেন্সি সাপোর্ট",
                "৫ ইউজার একসাথে ব্যবহার",
                "24/7 প্রায়োরিটি সাপোর্ট",
                "ডেইলি অটো ব্যাকআপ",
                "ফুল বারকোড ও কুইক স্ক্যান",
                "ট্যাক্স ও VAT ক্যালকুলেশন",
            ],
        },
        {
            name: "এন্টারপ্রাইজ",
            price: "৮৫,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            target: "বড় ব্যবসা প্রতিষ্ঠান",
            features: [
                "আনলিমিটেড প্রোডাক্ট এন্ট্রি",
                "কমপ্লিট বিজনেস ম্যানেজমেন্ট সিস্টেম",
                "মাল্টি-লোকেশন ইনভেন্টরি",
                "এডভান্সড CRM with লোয়ালটি সিস্টেম",
                "বিজনেস ইন্টেলিজেন্স ড্যাশবোর্ড",
                "মাল্টি-ব্রাঞ্চ সাপোর্ট",
                "১৫ ইউজার একসাথে ব্যবহার",
                "24/7 ডেডিকেটেড সাপোর্ট",
                "রিয়েল-টাইম ব্যাকআপ",
                "API ইন্টিগ্রেশন সাপোর্ট",
                "মোবাইল অ্যাপ এক্সেস",
                "কাস্টম রিপোর্ট জেনারেশন",
            ],
        },
        {
            name: "প্রিমিয়াম",
            price: "১,২০,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            target: "কর্পোরেট ও লার্জ স্কেল বিজনেস",
            features: [
                "আনলিমিটেড প্রোডাক্ট ও ট্রানজেকশন",
                "কমপ্লিট ERP সলিউশন",
                "মাল্টি-ওয়্যারহাউস ম্যানেজমেন্ট",
                "এডভান্সড AI-বেসড অ্যানালিটিক্স",
                "অটোমেটিক রি-অর্ডার সিস্টেম",
                "সাপ্লাই চেইন ম্যানেজমেন্ট",
                "আনলিমিটেড ইউজার লাইসেন্স",
                "24/7 প্রায়োরিটি সাপোর্ট with ডেডিকেটেড ম্যানেজার",
                "ক্লাউড ও অন-প্রিমাইস হোস্টিং অপশন",
                "ফুল API ইন্টিগ্রেশন",
                "কাস্টম ডেভেলপমেন্ট সাপোর্ট",
                "এডভান্সড সিকিউরিটি ফিচার",
            ],
        },
        {
            name: "আল্টিমেট",
            price: "১০,০০,০০০",
            period: "ওয়ান-টাইম",
            product: "pos-software",
            target: "লার্জ এন্টারপ্রাইজ ও ম্যানুফ্যাকচারিং",
            features: [
                "আনলিমিটেড সব ফিচার",
                "ফুল ERP with ম্যানুফ্যাকচারিং মডিউল",
                "গ্লোবাল ইনভেন্টরি ম্যানেজমেন্ট",
                "AI-বেসড ডিমান্ড ফোরকাস্টিং",
                "রিয়েল-টাইম বিজনেস ইন্টেলিজেন্স",
                "মাল্টি-কোম্পানি ম্যানেজমেন্ট",
                "আনলিমিটেড ইউজার ও ব্রাঞ্চ",
                "24/7 VIP সাপোর্ট with অনসাইট ভিজিট",
                "হাই-এভেলেবিলিটি ক্লাউড ইনফ্রাস্ট্রাকচার",
                "কমপ্লিট API ইকোসিস্টেম",
                "বিয়ন্ড-কাস্টম ডেভেলপমেন্ট",
                "এডভান্সড অডিট ট্রেইল",
                "ডাটা মাইগ্রেশন সার্ভিস",
                "এন্টারপ্রাইজ-লেভেল সিকিউরিটি",
            ],
        },
    ];

    const features = [
        {
            icon: "🏪",
            title: "স্মার্ট সেলস ম্যানেজমেন্ট",
            items: [
                "কুইক ও ইজি সেলস প্রসেস - ৩ সেকেন্ডে একটি বিক্রয় সম্পন্ন",
                "মাল্টি-পেমেন্ট মেথড - ক্যাশ, কার্ড, মোবাইল ব্যাংকিং",
                "ইনস্ট্যান্ট ইনভয়েস জেনারেশন - Professional Invoice তৈরি",
                "প্রতিদিনের ক্রয়-বিক্রয়ের রিয়েল-টাইম ডাটা - Live Business Insights",
                "সেল রিপোর্ট ম্যানেজমেন্ট - Sales Performance Analysis",
            ],
            benefit: "বিক্রয় ৪০% বৃদ্ধি - Proven Results",
        },
        {
            icon: "📦",
            title: "এডভান্সড ইনভেন্টরি ট্র্যাকিং",
            items: [
                "যেকোন ধরণের পন্য (আনলিমিটেড) এন্ট্রির সুবিধা - Unlimited Products",
                "রিয়েল-টাইম স্টক আপডেট - Live Stock Monitoring",
                "লো স্টক অ্যালার্ট - Stock Out Prevention",
                "অটোমেটেড রিওর্ডারিং - Smart Reordering System",
                "স্টক আইটেম ও আইটেমের তালিকা ম্যানেজমেন্ট - Complete Inventory Control",
            ],
            benefit: "ইনভেন্টরি খরচ ৩৫% কমান - Verified Savings",
        },
        {
            icon: "📊",
            title: "ইন্টেলিজেন্ট বিজনেস রিপোর্টিং",
            items: [
                "ডেইলি সেলস রিপোর্ট - Daily Performance Tracking",
                "প্রোডাক্ট পারফরমেন্স অ্যানালিসিস - Best & Worst Selling Items",
                "প্রফিট অ্যান্ড লস ক্যালকুলেশন - Accurate Profit Calculation",
                "দৈনিক/মাসিক/বাৎসরিক বিক্রির হিসাব - Complete Sales Analytics",
                "গ্রাফ চার্টের মাধ্যমে বিশ্লেষণ - Visual Business Intelligence",
                "পেমেন্ট রিপোর্ট - Cash Flow Management",
            ],
            benefit: "সিদ্ধান্ত গ্রহণ ৫০% উন্নত - Data-Driven Decisions",
        },
        {
            icon: "👥",
            title: "কাস্টমার এক্সপেরিয়েন্স ম্যানেজমেন্ট",
            items: [
                "সহজ গ্রাহক ব্যবস্থাপনা - Customer Database Management",
                "কাস্টমার হিস্ট্রি ট্র্যাকিং - Purchase History Tracking",
                "বাকিতে ক্রয়ের হিসাব - Credit Management System",
            ],
            benefit: "গ্রাহক ধরে রাখা ৬০% বৃদ্ধি - Improved Customer Loyalty",
        },
        {
            icon: "📄",
            title: "অটোমেটেড ডকুমেন্টেশন",
            items: [
                "চালান, সংগ্রহ ক্রয় এবং বিল পরিশোধ - Complete Documentation",
                "প্রডাক্টের বারকোড তৈরি এবং প্রিন্টিং - Barcode System Integration",
                "গ্রাহক, সরবরাহকারী, বিলার এবং কর্মচারীর তথ্য - All Contacts in One Place",
            ],
            benefit: "কাগজের কাজ ৯০% কম - Paperless Office",
        },
        {
            icon: "🔒",
            title: "এন্টারপ্রাইজ সিকিউরিটি",
            items: [
                "ইউজার অ্যাক্সেস কন্ট্রোল - Role-Based Access Control",
                "ডাটা এনক্রিপশন - Bank-Level Security",
                "অটোমেটেড ব্যাকআপ - Zero Data Loss Guarantee",
            ],
            benefit: "১০০% ডাটা সুরক্ষা - Complete Peace of Mind",
        },
    ];

    return (
        <PageLayout>
            <AppHead
                // Bengali SEO
                title="POS Software"
                keywords="পস সফটওয়্যার, পস সফটওয়্যার বাংলাদেশ, রিটেইল সফটওয়্যার, শপ ম্যানেজমেন্ট সফটওয়্যার, বিক্রয় ব্যবস্থাপনা সফটওয়্যার, ইনভেন্টরি ম্যানেজমেন্ট, বাংলাদেশী পস সফটওয়্যার, সাশ্রয়ী পস সফটওয়্যার, ক্লাউড পস সফটওয়্যার"
                description="বাংলাদেশের প্রথম সম্পূর্ণ বাংলা পস সফটওয়্যার। বিক্রয় ব্যবস্থাপনা, ইনভেন্টরি ট্র্যাকিং, কাস্টমার ম্যানেজমেন্ট, অটোমেটেড রিপোর্টিং এবং মোবাইল অ্যাপ সহ সম্পূর্ণ সমাধান। ৩০ দিন ফ্রি ট্রায়াল নিন!"
                // English SEO
                titleEn="POS Software Bangladesh - Complete Retail Management Solution"
                keywordsEn="pos software Bangladesh, retail management software Dhaka, shop pos system, inventory management software, sales tracking software, Bangladeshi pos software, affordable pos system, cloud pos software, retail automation Bangladesh"
                descriptionEn="Bangladesh's first complete Bengali & English POS Software. Sales management, inventory tracking, customer management, automated reporting with mobile app. Get 30 days free trial for your retail business!"
                // Common SEO
                canonicalUrl="https://rsoftbd.com/pos-software"
                ogType="product"
            />

            {/* Simple Hero Section */}
            <div className="bg-white py-12">
                <div className="max-w-4xl mx-5 md:mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        পস সফটওয়্যার
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        আপনার রিটেইল ব্যবসার ব্যবস্থাপনা সহজ এবং কার্যকর করুন
                    </p>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                            কেন আমাদের পস সফটওয়্যার বেছে নিবেন?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "দ্রুত এবং সহজ বিক্রয় প্রক্রিয়া",
                                "রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং",
                                "বিস্তারিত বিজনেস রিপোর্ট",
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
                title={"সকল ফিচারস একসাথে"}
                description={"আপনার রিটেইল ব্যবসাকে করুণ আরও সহজ এবং লাভজনক"}
                featuresData={features}
            />
            {/* Pricing Section */}
            <PricingCard plans={plans} />
        </PageLayout>
    );
};

export default PosSoftwarePage;
