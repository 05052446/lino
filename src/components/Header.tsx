
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';


const Header = () => {
    return (
        <header className="w-full bg-white/90 backdrop-blur-md text-emerald-950 border-b border-emerald-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder logo */}
                    <div className="text-2xl font-bold tracking-tighter">
                        <span className="text-[#34d399]">LINO</span><span className="text-slate-400">VISION</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-emerald-900/80">
                    <Link href="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
                    <Link href="/solutions" className="hover:text-emerald-600 transition-colors">Solutions</Link>
                    <Link href="/support" className="hover:text-emerald-600 transition-colors">Support</Link>
                    <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-emerald-50 text-emerald-700 rounded-full transition-colors" aria-label="Search">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link href="/cart" className="p-2 hover:bg-emerald-50 text-emerald-700 rounded-full transition-colors relative" aria-label="Cart">
                        <ShoppingCart className="w-5 h-5" />
                        {/* Badge example */}
                        <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
                    </Link>
                    <button className="p-2 hover:bg-emerald-50 text-emerald-700 rounded-full transition-colors hidden sm:block" aria-label="Account">
                        <User className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 hover:bg-emerald-50 text-emerald-700 rounded-full transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
