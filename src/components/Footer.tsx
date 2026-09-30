import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0A080C] border-t border-[#201824] py-10 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#786D7D]">
        <div>
          <span className="font-serif-brand font-bold text-white text-sm">M&D PERFUME</span>
          <p className="mt-1">١٠٠٪ گولاڤێن ڕەسەن ب قەبارەیێن 10ml, 20ml, 30ml.</p>
        </div>
        <div className="flex gap-4">
          <span>دهۆک · هەولێر · سلێمانی</span>
          <span>FIB · FastPay · Qi Card</span>
        </div>
      </div>
    </footer>
  );
};