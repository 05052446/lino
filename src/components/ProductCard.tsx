
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    title: string;
    category: string;
    image: string;
    href: string;
}

const ProductCard = ({ title, category, image, href }: ProductCardProps) => {
    return (
        <Link href={href} className="group block bg-white rounded-xl overflow-hidden border border-emerald-100 hover:shadow-lg transition-all hover:border-emerald-300 hover:shadow-emerald-100">
            <div className="aspect-[4/3] bg-emerald-50/50 relative overflow-hidden">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-emerald-300 bg-emerald-50/30">
                    {/* If we had real images, <img src={image} ... /> */}
                    <span className="text-xs uppercase tracking-wider font-semibold">Product Image</span>
                </div>
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/5 transition-colors"></div>
            </div>
            <div className="p-5 space-y-3">
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">{category}</div>
                <h3 className="font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[3rem]">
                    {title}
                </h3>
                <div className="flex items-center text-sm font-medium text-emerald-700/70 group-hover:text-emerald-600 transition-colors pt-2">
                    View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
