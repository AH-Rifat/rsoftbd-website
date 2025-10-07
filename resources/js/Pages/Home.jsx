// import './App.css'
import HeaderNav from "../Pages/components/HeaderNav";
import OurServices from "../Pages/components/OurServices";
import PreviousWorkSection from "../Pages/components/PreviousWorkSection";
import ContactSection from "../Pages/components/ContactSection";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import WhoWeAreSection from "./components/WhoWeAreSection";
import HeroSection from "./components/HeroSection";

const Home = () => {
    return (
        <>
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
