import { usePage } from "@inertiajs/react";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { useEffect } from "react";

export default function PageLayout({ children }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.success) {
            alert(flash.success);
        }
        if (flash.error) {
            alert(flash.error);
        }
    }, [flash.success, flash.error]);

    return (
        <>
            <HeaderNav />
            <div className="container mx-auto">{children}</div>
            <Footer />
        </>
    );
}
