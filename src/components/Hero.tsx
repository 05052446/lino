
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-[600px] bg-gradient-to-br from-emerald-50 via-teal-50 to-white overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>

            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                <div className="max-w-3xl space-y-6 animate-fade-in-up">
                    <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-2 backdrop-blur-sm shadow-sm">
                        Leading Global IoT Solutions
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-emerald-950">
                        Innovative Wireless Video & <span className="text-emerald-600">IoT Solutions</span>
                    </h1>
                    <p className="text-xl text-emerald-800/80 max-w-2xl leading-relaxed">
                        Empowering industries with cutting-edge AI network cameras, cloud management, and solar power systems. Your partner in scalable connectivity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/products"
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-200"
                        >
                            Explore Products
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white hover:bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
