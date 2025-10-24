import AppHead from "../components/AppHead";
import PageLayout from "../layouts/Page-layout";
import PricingCard from "../components/PricingCard";
import FeaturesSection from "../components/FeaturesSection";

const PosSoftwarePage = () => {
    const plans = [
        {
            name: "Starter",
            price: "15000",
            period: "One-Time",
            product: "pos-software",
            target: "Small shops and startups",
            features: [
                "Up to 500 product entries",
                "Basic sales and invoice management",
                "Basic inventory tracking",
                "Customer information management",
                "Vendor management",
                "Basic financial reports (profit-loss)",
                "1 user license",
                "Email support",
                "Monthly data backup",
            ],
        },
        {
            name: "Basic",
            price: "30000",
            period: "One-Time",
            product: "pos-software",
            target: "Small retail shops",
            features: [
                "Up to 2000 product management",
                "Sales, purchase and invoice management",
                "Advanced inventory tracking",
                "Customer ledger",
                "Vendor payment tracking",
                "Detailed financial reports",
                "2 simultaneous users",
                "Phone and email support",
                "Weekly auto backup",
                "Basic barcode support",
            ],
        },
        {
            name: "Professional",
            price: "55000",
            period: "One-Time",
            product: "pos-software",
            popular: true,
            target: "Medium businesses and factories",
            features: [
                "Up to 10,000 product management",
                "Complete sales and purchase system",
                "Real-time inventory tracking",
                "CRM (Customer Relationship Management)",
                "Advanced reporting and analytics",
                "Multi-currency support",
                "5 simultaneous users",
                "24/7 priority support",
                "Daily auto backup",
                "Full barcode and quick scan",
                "Tax and VAT calculation",
            ],
        },
        {
            name: "Enterprise",
            price: "85000",
            period: "One-Time",
            product: "pos-software",
            target: "Large business organizations",
            features: [
                "Unlimited product entry",
                "Complete business management system",
                "Multi-location inventory",
                "Advanced CRM with loyalty system",
                "Business intelligence dashboard",
                "Multi-branch support",
                "15 simultaneous users",
                "24/7 dedicated support",
                "Real-time backup",
                "API integration support",
                "Mobile app access",
                "Custom report generation",
            ],
        },
        {
            name: "Premium",
            price: "120000",
            period: "One-Time",
            product: "pos-software",
            target: "Corporate and large scale businesses",
            features: [
                "Unlimited products and transactions",
                "Complete ERP solution",
                "Multi-warehouse management",
                "Advanced AI-based analytics",
                "Automated re-order system",
                "Supply chain management",
                "Unlimited user license",
                "24/7 priority support with dedicated manager",
                "Cloud and on-premise hosting options",
                "Full API integration",
                "Custom development support",
                "Advanced security features",
            ],
        },
        {
            name: "Ultimate",
            price: "1000000",
            period: "One-Time",
            product: "pos-software",
            target: "Large enterprises and manufacturing",
            features: [
                "Unlimited all features",
                "Full ERP with manufacturing module",
                "Global inventory management",
                "AI-based demand forecasting",
                "Real-time business intelligence",
                "Multi-company management",
                "Unlimited users and branches",
                "24/7 VIP support with onsite visits",
                "High-availability cloud infrastructure",
                "Complete API ecosystem",
                "Beyond-custom development",
                "Advanced audit trail",
                "Data migration service",
                "Enterprise-level security",
            ],
        },
    ];

    const features = [
        {
            icon: "🏪",
            title: "Smart Sales Management",
            items: [
                "Quick and easy sales process - complete a sale in 3 seconds",
                "Multi-payment methods - cash, card, mobile banking",
                "Instant invoice generation - professional invoice creation",
                "Real-time daily purchase-sales data - live business insights",
                "Sales report management - sales performance analysis",
            ],
            benefit: "40% increase in sales - proven results",
        },
        {
            icon: "📦",
            title: "Advanced Inventory Tracking",
            items: [
                "Unlimited product entry for any type of product",
                "Real-time stock updates - live stock monitoring",
                "Low stock alerts - stock out prevention",
                "Automated reordering - smart reordering system",
                "Stock item and item list management - complete inventory control",
            ],
            benefit: "35% reduction in inventory costs - verified savings",
        },
        {
            icon: "📊",
            title: "Intelligent Business Reporting",
            items: [
                "Daily sales reports - daily performance tracking",
                "Product performance analysis - best & worst selling items",
                "Profit and loss calculation - accurate profit calculation",
                "Daily/monthly/annual sales calculations - complete sales analytics",
                "Analysis through graph charts - visual business intelligence",
                "Payment reports - cash flow management",
            ],
            benefit: "50% improved decision making - data-driven decisions",
        },
        {
            icon: "👥",
            title: "Customer Experience Management",
            items: [
                "Easy customer management - customer database management",
                "Customer history tracking - purchase history tracking",
                "Credit purchase accounting - credit management system",
            ],
            benefit:
                "60% increase in customer retention - improved customer loyalty",
        },
        {
            icon: "📄",
            title: "Automated Documentation",
            items: [
                "Invoices, collection, purchase and bill payments - complete documentation",
                "Product barcode creation and printing - barcode system integration",
                "Customer, supplier, biller and employee information - all contacts in one place",
            ],
            benefit: "90% less paperwork - paperless office",
        },
        {
            icon: "🔒",
            title: "Enterprise Security",
            items: [
                "User access control - role-based access control",
                "Data encryption - bank-level security",
                "Automated backup - zero data loss guarantee",
            ],
            benefit: "100% data security - complete peace of mind",
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
                        POS Software
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Simplify and optimize your retail business management
                    </p>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                            Why Choose Our POS Software?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Fast and easy sales process",
                                "Real-time inventory tracking",
                                "Detailed business reports",
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
                    "Make your retail business easier and more profitable"
                }
                featuresData={features}
            />
            {/* Pricing Section */}
            <PricingCard plans={plans} />
        </PageLayout>
    );
};

export default PosSoftwarePage;
