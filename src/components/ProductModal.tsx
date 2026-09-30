import React, { useState } from 'react';
import { X, Star, Droplets, ShoppingBag } from 'lucide-react';
import { Perfume, BottleSize } from '../typse'

interface ProductModalProps {
  perfume: Perfume | null;
  currency: 'IQD' | 'USD';
  onClose: () => void;
  onAddToCart: (perfume: Perfume, size: BottleSize, quantity?: number) => void;
  onInstantBuy?: (perfume: Perfume, size: BottleSize, quantity?: number) => void;
  onDirectOrder?: (perfume: Perfume, size: BottleSize) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  perfume,
  currency,
  onClose,
  onAddToCart,
  onInstantBuy,
  onDirectOrder,
}) => {
  if (!perfume) return null;

  const [selectedSize, setSelectedSize] = useState<BottleSize>('20ml');

  const priceIqd = perfume.prices[selectedSize];
  const priceDisplay = currency === 'USD' 
    ? `$${(priceIqd / 1500).toFixed(1)}` 
    : `${priceIqd.toLocaleString()} د.ع`;

  const handleBuy = () => {
    if (onDirectOrder) onDirectOrder(perfume, selectedSize);
    else if (onInstantBuy) onInstantBuy(perfume, selectedSize, 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#141017] border border-[#3C2F43] rounded-3xl p-6 text-right space-y-6">
        <button onClick={onClose} className="absolute top-4 left-4 p-2 bg-[#201824] rounded-full text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img src={perfume.image} alt={perfume.name} className="w-full h-64 object-cover rounded-2xl" />
          <div className="space-y-3">
            <span className="text-xs text-[#E8AF7A] font-bold uppercase">{perfume.brand}</span>
            <h2 className="text-2xl font-bold text-white">{perfume.name}</h2>
            <p className="text-xs text-[#A89CAE] leading-relaxed">{perfume.descriptionKu}</p>
            <div className="text-xs text-[#D8CEDE] space-y-1 bg-[#1A1420] p-3 rounded-xl border border-white/5">
              <div><strong>سەرەتا:</strong> {perfume.topNotes.join(' · ')}</div>
              <div><strong>ناڤەند:</strong> {perfume.heartNotes.join(' · ')}</div>
              <div><strong>بنگەهـ:</strong> {perfume.baseNotes.join(' · ')}</div>
            </div>
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-2">
          <span className="text-xs text-white font-bold block">قەبارەیێ هەڵبژێرە:</span>
          <div className="grid grid-cols-3 gap-2">
            {(['10ml', '20ml', '30ml'] as BottleSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`py-2 rounded-xl text-xs font-mono font-bold border ${
                  selectedSize === s ? 'border-[#E8AF7A] bg-[#2E2036] text-white' : 'border-[#332738] text-[#9E91A1]'
                }`}
              >
                {s} - {currency === 'USD' ? `$${(perfume.prices[s]/1500).toFixed(0)}` : `${perfume.prices[s].toLocaleString()} د.ع`}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#2F2434] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#95889A] block">نرخێ کۆتایی:</span>
            <span className="text-xl font-bold font-mono text-[#E8AF7A]">{priceDisplay}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { onAddToCart(perfume, selectedSize); onClose(); }}
              className="px-4 py-2.5 rounded-xl bg-[#281E2E] text-[#E8AF7A] text-xs font-bold border border-[#44334C]"
            >
              زێدەکرن بۆ سەبەتەیێ
            </button>
            <button
              onClick={handleBuy}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C88A4A] to-[#E8AF7A] text-black text-xs font-bold shadow-md"
            >
              تەلەبکرنا ڕاستەوخۆ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};