import PricingCard from "../components/PricingCard";
import PageLayout from "../layouts/Page-layout";

export default function GymSoftwarePage() {
    const plans = [
        {
            name: "Basic",
            price: "19500",
            period: "",
            product: "gym-software",
            features: [
                "১০ হাজার মেম্বার ম্যানেজ করা যাবে।",
                "অফলাইনে পেমেন্ট নেয়া যাবে।",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে।",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে। ",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে।",
                "২ জন ব্যাবহারকারি এই সফটওয়্যার টা ব্যবহার করতে পারবে।",
                "24/7 Customer support",
            ],
        },
        {
            name: "Premium",
            price: "29500",
            period: "",
            product: "gym-software",
            popular: true,
            features: [
                "২০ হাজার মেম্বার ম্যানেজ করা যাবে।",
                "অফলাইনে পেমেন্ট নেয়া যাবে।",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে।",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে। ",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে।",
                "৫ জন ব্যাবহারকারি এই সফটওয়্যার টা ব্যবহার করতে পারবে।",
                "24/7 Customer support",
            ],
        },
        {
            name: "Enterprise",
            price: "99500",
            period: "",
            product: "gym-software",
            features: [
                "আনলিমিটেড মেম্বার ম্যানেজ করা যাবে।",
                "অনলাইন / অফলাইনে পেমেন্ট নেয়া যাবে।",
                "মেম্বার এটেনডেন্স ট্র্যাক করা যাবে।",
                "SMS সিস্টেম ইন্টিগ্রেটেড থাকবে। ",
                "মেম্বারশিপ প্যাকেজ ট্রেকিং করা যাবে।",
                "১০ জন ব্যাবহারকারি এই সফটওয়্যার টা ব্যবহার করতে পারবে।",
                "24/7 Customer support",
            ],
        },
    ];

    return (
        <PageLayout>
            <div className="text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24">
                Gym Management Software
            </div>

            <PricingCard plans={plans} />
        </PageLayout>
    );
}
