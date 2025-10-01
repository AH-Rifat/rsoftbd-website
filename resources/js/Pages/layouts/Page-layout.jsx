import { usePage } from "@inertiajs/react";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function PageLayout({ children }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
            return;
        }
        if (flash.error) {
            toast.error(flash.error);
            return;
        }
    }, [flash]);

    return (
        <>
            <HeaderNav />
            <div className="container mx-auto">{children}</div>
            <ToastContainer />
            <Footer />
        </>
    );
}
