import whoWeAreImage from "../../../../public/assets/vector-img/who-we-are.png";

export default function WhoWeAreSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
            <div className="max-w-7xl mx-10 px-4 lg:px-8 xl:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Image Section */}
                    <div className="flex-1 relative">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur-lg opacity-50"></div>
                            <img
                                src={whoWeAreImage}
                                alt="RSOFTBD - Software Development Company"
                                className="relative w-full max-w-sm mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-500 rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                                    About R-SOFTBD
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 leading-tight">
                                    Scale Your Business with{" "}
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        Confidence
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <p className="text-lg md:text-xl text-emerald-800 leading-relaxed">
                                    R-SOFTBD is a premier software development
                                    company dedicated to transforming your
                                    digital vision into reality.
                                </p>
                                <p className="text-lg md:text-xl text-emerald-700 leading-relaxed">
                                    We partner with clients to achieve strategic
                                    objectives while creating long-term business
                                    value through innovative solutions and
                                    comprehensive digital management.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-600 text-lg">
                                            ✓
                                        </span>
                                    </div>
                                    <span className="text-emerald-800 font-medium">
                                        Strategic Partnership
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-600 text-lg">
                                            ✓
                                        </span>
                                    </div>
                                    <span className="text-emerald-800 font-medium">
                                        Long-term Value
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-600 text-lg">
                                            ✓
                                        </span>
                                    </div>
                                    <span className="text-emerald-800 font-medium">
                                        Innovative Solutions
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-emerald-100">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-600 text-lg">
                                            ✓
                                        </span>
                                    </div>
                                    <span className="text-emerald-800 font-medium">
                                        Proven Results
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
