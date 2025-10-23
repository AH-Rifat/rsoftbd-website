import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

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
            onError: (errors) => {
                toast.error(`Please fix the errors and try again.`);
            },
            preserveScroll: true,
        });
    };

    const handleCloseBtnClick = () => {
        setOpen(false);
        errors.name = "";
        errors.email = "";
        errors.phone = "";
        errors.message = "";
        reset();
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className={`w-full uppercase bg-violet-600 hover:bg-violet-700 py-3 px-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-colors duration-200`}
            >
                Request a Demo
            </button>

            <Transition show={open}>
                <Dialog onClose={setOpen} className="relative z-10">
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <DialogBackdrop className="fixed inset-0 bg-gray-900/50" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-[95vw] sm:max-w-lg mx-auto">
                                    <div className="bg-white px-3 sm:px-6 py-4 sm:py-5">
                                        <div className="w-full">
                                            <DialogTitle
                                                as="h3"
                                                className="text-lg font-semibold text-emerald-900 text-center sm:text-left"
                                            >
                                                Package: {packageData.name}
                                            </DialogTitle>
                                            <div className="mt-3 sm:mt-4">
                                                <form
                                                    onSubmit={
                                                        handleSendDemoRequest
                                                    }
                                                >
                                                    <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                                                        <label className="text-gray-700 text-sm sm:text-base">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className={`w-full rounded-lg border focus:outline-emerald-600 p-2 text-sm sm:text-base ${
                                                                errors.name
                                                                    ? "border-red-500"
                                                                    : "border-slate-400"
                                                            }`}
                                                            value={data.name}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "name",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        {errors.name && (
                                                            <span className="text-red-500 text-xs sm:text-sm">
                                                                {errors.name}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                                                        <label className="text-gray-700 text-sm sm:text-base">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className={`w-full rounded-lg border focus:outline-emerald-600 p-2 text-sm sm:text-base ${
                                                                errors.email
                                                                    ? "border-red-500"
                                                                    : "border-slate-400"
                                                            }`}
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "email",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        {errors.email && (
                                                            <span className="text-red-500 text-xs sm:text-sm">
                                                                {errors.email}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                                                        <label className="text-gray-700 text-sm sm:text-base">
                                                            Your Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            className={`w-full rounded-lg border focus:outline-emerald-600 p-2 text-sm sm:text-base ${
                                                                errors.phone
                                                                    ? "border-red-500"
                                                                    : "border-slate-400"
                                                            }`}
                                                            value={data.phone}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "phone",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        {errors.phone && (
                                                            <span className="text-red-500 text-xs sm:text-sm">
                                                                {errors.phone}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                                                        <label className="text-gray-700 text-sm sm:text-base">
                                                            Your Message
                                                        </label>
                                                        <textarea
                                                            className={`w-full rounded-lg border focus:outline-emerald-600 p-2 text-sm sm:text-base ${
                                                                errors.message
                                                                    ? "border-red-500"
                                                                    : "border-slate-400"
                                                            }`}
                                                            cols="30"
                                                            rows="3"
                                                            value={data.message}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "message",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        ></textarea>
                                                        {errors.message && (
                                                            <span className="text-red-500 text-xs sm:text-sm">
                                                                {errors.message}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors duration-200 w-full sm:w-auto order-2 sm:order-1"
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            {processing
                                                                ? "Sending..."
                                                                : "Send Request"}
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                handleCloseBtnClick
                                                            }
                                                            className="inline-flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors duration-200 w-full sm:w-auto order-1 sm:order-2"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
