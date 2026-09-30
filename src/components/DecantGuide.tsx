import React from 'react';
import { Droplets, CheckCircle2 } from 'lucide-react';

export const DecantGuide: React.FC = () => {
  return (
    <section id="decants" className="py-16 bg-[#110E14] border-b border-[#251E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8AF7A] mb-2">
          <Droplets className="w-4 h-4" />
          <span>شەرحا قەبارەیان · DECANT SIZES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          بۆچی کڕینا ١٠، ٢٠، یان ٣٠ ملم باشترین بژاردەیە؟
        </h2>
        <p className="text-[#A99EAE] text-sm max-w-2xl mx-auto mb-12">
          ئێدی پێویست ناکەت گولاڤێن ٢٠٠ بۆ ٤٠٠ دۆلاری ب یەکجار بکڕی. هەمان گولاڤا ڕەسەن ب دەقیقی ڕادکێشینە ناو شووشەیێن شووشەیی یێن تایبەت.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          
          <div className="rounded-2xl bg-[#17131B] border border-[#342A39] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#E8AF7A] bg-[#291F2F] px-2.5 py-1 rounded">تاقیکردنەوە و گەشت</span>
              <span className="font-mono text-2xl font-bold text-white">10ml</span>
            </div>
            <h3 className="text-lg font-bold text-white">١٠ ملم (١٢٠ - ١٤٠ پف)</h3>
            <p className="text-xs text-[#A397A8]">گونجاوە بۆ باخەڵ و سەفەران، بەسە بۆ ١٥ هەتا ٢٥ ڕۆژان.</p>
            <div className="pt-2 text-xs text-[#E1D6E5] space-y-1">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8AF7A]" /> ئابووریترین بژاردە</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#211926] border-2 border-[#E8AF7A] p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#120D0E] bg-[#E8AF7A] px-2.5 py-1 rounded">پڕفرۆشترین</span>
              <span className="font-mono text-2xl font-bold text-white">20ml</span>
            </div>
            <h3 className="text-lg font-bold text-white">٢٠ ملم (٢٥٠ - ٢٨٠ پف)</h3>
            <p className="text-xs text-[#B9ADBf]">هاوسەنگترین بژاردەیە بۆ بەکارهێنانا بەردەوام یا زیاتر ژ مەهەکێ.</p>
            <div className="pt-2 text-xs text-[#E1D6E5] space-y-1">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8AF7A]" /> باشترین هاوسەنگی و نرخ</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#17131B] border border-[#342A39] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#E8AF7A] bg-[#291F2F] px-2.5 py-1 rounded">پڕبها و درێژخایەن</span>
              <span className="font-mono text-2xl font-bold text-white">30ml</span>
            </div>
            <h3 className="text-lg font-bold text-white">٣٠ ملم (٣٨٠ - ٤٢٠ پف)</h3>
            <p className="text-xs text-[#A397A8]">سێ یەکی شوشەیا مەزنە! بەسە بۆ ٢ هەتا ٣ مەهان ب کەمترین نرخ.</p>
            <div className="pt-2 text-xs text-[#E1D6E5] space-y-1">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8AF7A]" /> زۆرترین داشکاندن بۆ هەر ملم</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};