
import ProductCard from './ProductCard';

const PRODUCTS = [
    {
        title: "Industrial 5G Cellular Router with Dual SIM",
        category: "Industrial IoT",
        image: "/placeholder",
        href: "/products/iot-r75w"
    },
    {
        title: "Solar Power Camera Kit with 4MP PTZ",
        category: "Solar Surveillance",
        image: "/placeholder",
        href: "/products/solar-cam"
    },
    {
        title: "LoRaWAN Indoor Gateway 8-Channel",
        category: "LoRaWAN",
        image: "/placeholder",
        href: "/products/lorawan-gateway"
    },
    {
        title: "PoE Switch with Voltage Booster for Solar",
        category: "PoE Solutions",
        image: "/placeholder",
        href: "/products/poe-switch"
    },
    {
        title: "Underwater AI Camera 4K UHD",
        category: "Specialty Cameras",
        image: "/placeholder",
        href: "/products/underwater-cam"
    },
    {
        title: "Wireless Bridge 5GHz Long Range",
        category: "Wireless Transmission",
        image: "/placeholder",
        href: "/products/wireless-bridge"
    }
];

const ProductGrid = () => {
    return (
        <section className="py-20 bg-emerald-50/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-emerald-950">Featured Solutions</h2>
                        <p className="text-slate-600 mt-2 max-w-xl">Explore our most popular industrial connectivity and surveillance products.</p>
                    </div>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center">
                        View All Products
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
