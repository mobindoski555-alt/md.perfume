import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Truck, CreditCard } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSizesClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSizesClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
      {/* Ambient background glow - uplifting warm champagne & amber */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#E8AF7A]/15 via-[#C87941]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D48950]/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Content - 7 cols */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Clean unboxed kicker with separators */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider text-[#E8AF7A]">
              <span>M&D PERFUME LUXURY DECANT</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>١٠٠٪ گولاڤێن ڕەسەن</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>کوردستان و عێراق</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FBF8F5] leading-[1.3] text-balance">
              گولاڤێن ناڤدارێن جیهانی ب قەبارەیێن{' '}
              <span className="bg-gradient-to-l from-[#F9E8D9] via-[#E8AF7A] to-[#D49A5B] bg-clip-text text-transparent">
                ١٠، ٢٠، و ٣٠ ملم
              </span>
            </h1>

            {/* Subheading / Value proposition */}
            <p className="text-base sm:text-lg text-[#C8BEB6] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              پێویست ناکەت ملیۆنان دینار ل سەر شوشەیەکێ مەزن مەزاخت بکەی! نوکە ل <strong className="text-[#F3EEEA]">M&D Perfume</strong> دشێی گرانبەهاترین گولاڤێن فەڕەنسی و ئیتالی (کرید، باکارات رووج، دیۆر، تۆم فۆرد) ب قەبارەیێن ١٠، ٢٠، و ٣٠ ملم ب تاقیکردنەوەیا مسۆگەر بکڕی.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-[#0D0B0E] bg-gradient-to-r from-[#E8AF7A] to-[#D49A5B] hover:from-[#f0be8c] hover:to-[#dfa767] rounded-xl shadow-xl shadow-[#E8AF7A]/20 transition-all hover:-translate-y-0.5"
              >
                <span>گولاڤان ببینە و تەلەب بکە</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onSizesClick}
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#F3EEEA] bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
              >
                <span>شەرحا قەبارەیان (10, 20, 30ml)</span>
              </button>
            </div>

            {/* Trust pillars row */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 text-right">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[#E8AF7A] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">١٠٠٪ ڕەسەن</span>
                </div>
                <p className="text-[11px] text-[#A69C95] leading-tight">پڕکرنا ڕاستەوخۆ ژ شوشەیا ئەسلی</p>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[#E8AF7A] mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">FIB, Fastpay, Qi</span>
                </div>
                <p className="text-[11px] text-[#A69C95] leading-tight">پارەدانا ئەلکترۆنی و کاش</p>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[#E8AF7A] mb-1">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">گەهاندنا لەزگین</span>
                </div>
                <p className="text-[11px] text-[#A69C95] leading-tight">بۆ هەمی کوردستان و عێراقێ</p>
              </div>
            </div>

          </div>

          {/* Hero Visual - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="/md.perfume/perfume.jpg"
                alt="M&D Perfume Showcase"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle glass badge overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0E] via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl backdrop-blur-md bg-[#0D0B0E]/80 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E8AF7A] font-semibold">کۆلێکشنا هاڤین و زڤستانێ</p>
                  <p className="text-sm font-bold text-white">شوشەیێن لوکس ب بۆنبەخشینەکا تایبەت</p>
                </div>
                <div className="text-left font-mono tabular-nums text-xs text-[#C8BEB6]">
                  <span className="block text-[#E8AF7A] font-bold">10ml · 20ml · 30ml</span>
                  <span>دەستپێک ژ ٢٢,٠٠٠ د.ع</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
