import { Link } from "@inertiajs/react";
import footerLogo from "../../../../public/assets/logo.png";

export default function Footer() {
    return (
        <footer className="text-center bg-green-100 p-6 mt-10">
            <img src={footerLogo} alt="logo" className="w-20 mx-auto" />
            <div className="font-semibold">
                <Link to={"/"}>R-Soft-BD</Link>
                <h1 className="mt-2">
                    <span className="underline">Address:</span> Jurain, Dhaka:
                    1204.
                    <span className="underline ms-2">Mobile:</span> 01920770880
                </h1>
                <p className="mt-6">
                    Copyright @ 2019 - {new Date().getFullYear()} - All right
                    reserved
                </p>
            </div>
        </footer>
    );
}
