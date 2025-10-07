// import './App.css'
import HeaderNav from "../Pages/components/HeaderNav";
import landingImage from "../../../public/assets/vector-img/landing.png";
import OurServices from "../Pages/components/OurServices";
import PreviousWorkSection from "../Pages/components/PreviousWorkSection";
import ContactSection from "../Pages/components/ContactSection";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import WhoWeAreSection from "./components/WhoWeAreSection";

const Home = () => {
    return (
        <>
            <HeaderNav />
            {/* hero section */}
            <div className="lg:flex lg:ms-8 lg:my-28">
                <div className="font-serif text-center my-12">
                    <h1 className="text-lg md:text-5xl md:leading-snug mb-3 text-emerald-800 font-extrabold lg:text-2xl xl:text-3xl">
                        Transform Your Business With Our Software
                    </h1>
                    <p className="text-sm md:text-2xl mb-8 text-emerald-800 xl:text-xl">
                        Need a customize software or website
                    </p>
                    <button className="uppercase bg-emerald-400 hover:bg-emerald-500 py-2 px-4 rounded-xl text-white md:text-3xl md:py-4 md:px-6 lg:text-xl xl:p-2">
                        Get Started
                    </button>
                </div>
                <img
                    src={landingImage}
                    alt="image"
                    className="w-68 mx-auto lg:w-96 xl:w-[40%]"
                />
            </div>

            {/* who we are - section */}
            <div className="my-40">
                <WhoWeAreSection />
            </div>

            {/* our service section */}
            <div className="my-40">
                <OurServices />
            </div>

            {/* our previous work section */}
            <h1 className="text-4xl text-center w-40s my-16 font-serif font-bold text-emerald-900 md:text-6xl md:my-24">
                Our Privious Work
            </h1>
            <PreviousWorkSection />

            {/* our team section */}
            <div className="my-40">
                <OurTeam />
            </div>

            {/* contact section */}
            <div className="my-40">
                <ContactSection />
            </div>

            {/* footer section */}
            <Footer />
        </>
    );
};

export default Home;
