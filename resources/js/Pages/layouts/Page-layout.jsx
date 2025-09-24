import Footer from "../componannts/Footer";
import HeaderNav from "../componannts/HeaderNav";

export default function PageLayout({ children }) {
    return (
        <>
            <HeaderNav />
            <div className="container mx-auto">{children}</div>
            <Footer />
        </>
    );
}
