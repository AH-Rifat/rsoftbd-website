import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function RequestDemoModal({ packageData }) {
    const [open, setOpen] = useState(false);
    const { data, setData, errors, post, reset, processing } = useForm({
        package_name: packageData.name,
        product_name: packageData.product,
        product_price: packageData.price,
        name: "",
        email: "",
        phone: "",
        message: "",
        status: "",
    });

    const handleSendDemoRequest = (e) => {
        e.preventDefault();
        post("request-product-demo", {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
            preserveScroll: true,
        });
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className={`w-full uppercase bg-violet-600 hover:bg-violet-700 py-3 px-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-colors duration-200`}
            >
                Request a Demo
            </button>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex flex-col sm:flex-row items-start rounded-lg">
                                    <div className="w-full text-center sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-lg sm:text-xl font-serif font-semibold text-emerald-900"
                                        >
                                            Package: {packageData.name}
                                        </DialogTitle>
                                        <div className="mt-4">
                                            <form>
                                                <div className="flex flex-col gap-1 mb-4">
                                                    <label className="font-serif text-gray-700 text-base sm:text-lg">
                                                        Your Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={`w-full rounded-lg border border-slate-400 focus:outline-emerald-600 p-2 ${
                                                            errors.name
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errors.name && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.name}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-1 mb-4">
                                                    <label className="font-serif text-gray-700 text-base sm:text-lg">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className={`w-full rounded-lg border border-slate-400 focus:outline-emerald-600 p-2 ${
                                                            errors.email
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                        value={data.email}
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errors.email && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.email}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-1 mb-4">
                                                    <label className="font-serif text-gray-700 text-base sm:text-lg">
                                                        Your Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className={`w-full rounded-lg border border-slate-400 focus:outline-emerald-600 p-2 ${
                                                            errors.phone
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                        value={data.phone}
                                                        onChange={(e) =>
                                                            setData(
                                                                "phone",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errors.phone && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.phone}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-1 mb-4">
                                                    <label className="font-serif text-gray-700 text-base sm:text-lg">
                                                        Your Message
                                                    </label>
                                                    <textarea
                                                        className={`w-full rounded-lg border border-slate-400 focus:outline-emerald-600 p-2 ${
                                                            errors.message
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                        cols="30"
                                                        rows="4"
                                                        value={data.message}
                                                        onChange={(e) =>
                                                            setData(
                                                                "message",
                                                                e.target.value
                                                            )
                                                        }
                                                    ></textarea>
                                                    {errors.message && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.message}
                                                        </span>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={handleSendDemoRequest}
                                    className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 sm:ml-3 sm:w-auto"
                                    disabled={processing}
                                >
                                    Send Request
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-600 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
