
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-emerald-100/80 border-t border-emerald-900">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">
                            <span className="text-[#34d399]">LINO</span><span className="text-slate-400">VISION</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-emerald-200/70">
                            Global provider of industrial wireless video and IoT solutions. Enabling connectivity for a smarter world.
                        </p>
                        <div className="space-y-2 pt-4">
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                                <MapPin className="w-4 h-4" />
                                <span>Plano, TX, USA</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                                <Phone className="w-4 h-4" />
                                <span>+1 (469) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                                <Mail className="w-4 h-4" />
                                <span>sales@linovision.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products" className="hover:text-emerald-400 transition-colors">All Products</Link></li>
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Solutions</Link></li>
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                            <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/support/downloads" className="hover:text-emerald-400 transition-colors">Downloads</Link></li>
                            <li><Link href="/support/faq" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/warranty" className="hover:text-emerald-400 transition-colors">Warranty Policy</Link></li>
                            <li><Link href="/shipping" className="hover:text-emerald-400 transition-colors">Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
                        <p className="text-sm mb-4 text-emerald-200/70">Subscribe to our newsletter for new product releases.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-emerald-900/50 border-none rounded-lg px-4 py-2 text-sm text-white w-full focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-emerald-600/50"
                            />
                            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Join
                            </button>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-emerald-900 bg-[#002015]">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-600/60">
                    <p>&copy; {new Date().getFullYear()} Linovision. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
