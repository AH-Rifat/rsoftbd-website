import HeaderNav from "../Pages/components/HeaderNav";
import OurServices from "../Pages/components/OurServices";
import PreviousWorkSection from "../Pages/components/PreviousWorkSection";
import ContactSection from "../Pages/components/ContactSection";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import WhoWeAreSection from "./components/WhoWeAreSection";
import HeroSection from "./components/HeroSection";
import AppHead from "./components/AppHead";

const Home = () => {
    return (
        <>
            <AppHead
                title={
                    "R-softBD - Leading Software & IT Solutions in Bangladesh"
                }
                keywords={
                    "rsoftbd, r-softbd, R-softBD, software development company, web development, mobile app development, IT solutions, digital transformation, Bangladesh, Dhaka, custom software, e-commerce solutions, ERP solutions, CRM development, database management, cloud solutions, IT consulting, technology partner, software company in Dhaka, IT company in Bangladesh"
                }
                description={
                    "R-softBD is a premier software development and IT solutions company in Dhaka, Bangladesh. We specialize in custom software development, web applications, mobile apps, and comprehensive digital transformation services."
                }
                canonicalUrl={"https://rsoftbd.com/"}
                ogType={"website"}
                ogTitle={"R-softBD - Software & IT Solutions Company"}
                ogDescription={
                    "Leading software development and IT solutions provider in Bangladesh offering custom software, web development, and digital transformation services."
                }
            />
            <HeaderNav />
            <HeroSection />
            <WhoWeAreSection />
            <OurServices />

            {/* our previous work section */}
            {/* <h1 className="text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24">
                Our Privious Work
            </h1>
            <PreviousWorkSection /> */}

            {/* our team section */}
            <div className="my-40">
                <OurTeam />
            </div>

            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
