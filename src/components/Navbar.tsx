import React from 'react';
import { ShoppingBag, Droplets, Phone } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: 'IQD' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, currency, onToggleCurrency }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0D0B0E]/90 backdrop-blur-md border-b border-[#2A232E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C88A4A] to-[#E8AF7A] flex items-center justify-center font-serif-brand font-bold text-black text-sm">
            M&D
          </div>
          <div>
            <span className="font-serif-brand text-2xl font-bold tracking-widest bg-gradient-to-r from-[#F6E9DF] via-[#E8AF7A] to-[#D99557] bg-clip-text text-transparent">
              M&D PERFUME
            </span>
            <span className="block text-[10px] text-[#A69CA8] -mt-1">گولاڤێن لوکس ب قەبارە</span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C8BFCE]">
          <a href="#perfumes" className="hover:text-[#E8AF7A] transition-colors">گولاڤێن جیهانی</a>
          <a href="#decants" className="hover:text-[#E8AF7A] transition-colors flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-[#E8AF7A]" />
            <span>قەبارەیێن ١٠، ٢٠، ٣٠ ملم</span>
          </a>
          <a href="#payments" className="hover:text-[#E8AF7A] transition-colors">FIB و FastPay و Qi</a>
          <a href="#contact" className="hover:text-[#E8AF7A] transition-colors flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#E8AF7A]" />
            <span>پەیوەندی</span>
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCurrency}
            className="px-2.5 py-1.5 rounded-lg border border-[#3A303F] text-xs font-semibold text-[#D4C8DC] hover:text-[#E8AF7A] bg-[#18141C]"
          >
            {currency === 'IQD' ? 'د.ع IQD' : '$ USD'}
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#C88A4A] to-[#E8AF7A] text-[#140E0A] font-bold text-xs sm:text-sm shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>سەبەتە</span>
            {cartCount > 0 && (
              <span className="bg-[#140E0A] text-[#E8AF7A] text-xs px-1.5 py-0.5 rounded-full font-mono">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};