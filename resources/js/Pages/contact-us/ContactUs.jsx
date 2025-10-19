import ContactSection from "../components/ContactSection";
import PageLayout from "../layouts/Page-layout";
import AppHead from "../components/AppHead";

export default function ContactUs() {
    return (
        <>
            <AppHead
                // Bengali SEO - সহায়তা ও যোগাযোগ
                title="Contact Us"
                keywords="জিম সফটওয়্যার হেল্প, কাস্টমার কেয়ার, টেকনিক্যাল হেল্পলাইন, সফটওয়্যার ট্রাবলশুটিং, অনলাইন সাপোর্ট, ইমারজেন্সি কন্টাক্ট, সফটওয়্যার ট্রেনিং, ভিডিও টিউটোরিয়াল, ইউজার ম্যানুয়াল gym software support Bangladesh, customer care helpline, technical troubleshooting, online support chat, emergency contact, software training, video tutorials, user manual download"
                description="আর সফট বাংলাদেশের সহায়তা কেন্দ্রে স্বাগতম। জিম সফটওয়্যার সম্পর্কিত যেকোনো সমস্যার সমাধান, লাইভ সাপোর্ট, ভিডিও টিউটোরিয়াল এবং সম্পূর্ণ ব্যবহার গাইড পাওয়া যাবে। ২৪/৭ সাপোর্ট সার্ভিস। R Soft Bangladesh Help Center - Get complete technical support for your gym management software. Live chat, video tutorials, user manuals and 24/7 emergency support available."
                // Common SEO
                canonicalUrl="https://rsoftbd.com/contact"
                ogType="website"
            />
            <PageLayout>
                <ContactSection className={"my-16 md:my-20"} />
            </PageLayout>
        </>
    );
}
