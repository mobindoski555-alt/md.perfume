import React, { useState } from 'react';
import { CreditCard, Building2, Smartphone, Copy, Check } from 'lucide-react';

export const PaymentMethodsSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, k: string) => {
    navigator.clipboard.writeText(val);
    setCopied(k);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="payments" className="py-16 bg-[#0E0B10] border-b border-[#251E28] text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          رێکێن فەرمی یێن پارەدانێ (FIB, FastPay, Qi Card)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#151119] border border-[#2D2333] space-y-3">
            <div className="flex items-center gap-2 text-[#00A86B]"><Building2 className="w-5 h-5" /><h3 className="font-bold text-white">FIB (First Iraqi Bank)</h3></div>
            <p className="text-xs text-[#A99DAF]">حەواڵەکرن ب کەمتر ژ یەک خۆلەک بێ کۆمسیۆن.</p>
            <div className="p-2.5 bg-[#1D1723] rounded-lg text-xs flex justify-between items-center text-white">
              <span>9647519671007</span>
              <button onClick={() => copy('7519671007', 'fib')} className="text-[#E8AF7A]">{copied === 'fib' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}</button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#151119] border border-[#2D2333] space-y-3">
            <div className="flex items-center gap-2 text-[#E50914]"><Smartphone className="w-5 h-5" /><h3 className="font-bold text-white">FastPay (فاستپەی)</h3></div>
            <p className="text-xs text-[#A99DAF]">ناردنا لەزگین بۆ ژمارە مۆبایلا فاستپەی.</p>
            <div className="p-2.5 bg-[#1D1723] rounded-lg text-xs flex justify-between items-center text-white">
              <span>9647519671007</span>
              <button onClick={() => copy('7519671007', 'fp')} className="text-[#E8AF7A]">{copied === 'fp' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}</button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#151119] border border-[#2D2333] space-y-3">
            <div className="flex items-center gap-2 text-[#F59E0B]"><CreditCard className="w-5 h-5" /><h3 className="font-bold text-white">Qi Card (کی کارد)</h3></div>
            <p className="text-xs text-[#A99DAF]">پارەدان ب کارتی ماستەرکارد و خزمەتگوزاریێن کی کارد.</p>
            <div className="p-2.5 bg-[#1D1723] rounded-lg text-xs flex justify-between items-center text-white">
              <span>5213720434296476</span>
              <button onClick={() => copy('5213720434296476', 'qi')} className="text-[#E8AF7A]">{copied === 'qi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};