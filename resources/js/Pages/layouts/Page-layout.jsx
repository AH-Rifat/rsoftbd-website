import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";

export default function PageLayout({ children }) {
    return (
        <>
            <HeaderNav />
            <div className="container mx-auto">{children}</div>
            <Footer />
        </>
    );
}
