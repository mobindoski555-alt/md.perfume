import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Perfume, BottleSize } from '../typse'

interface ProductCardProps {
  perfume: Perfume;
  currency: 'IQD' | 'USD';
  onAddToCart: (perfume: Perfume, size: BottleSize) => void;
  onOpenQuickView?: (perfume: Perfume) => void;
  onQuickView?: (perfume: Perfume) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  perfume,
  currency,
  onAddToCart,
  onOpenQuickView,
  onQuickView,
}) => {
  const handleView = (p: Perfume) => {
    if (onQuickView) onQuickView(p);
    else if (onOpenQuickView) onOpenQuickView(p);
  };

  const [selectedSize, setSelectedSize] = useState<BottleSize>('10ml');
  const [justAdded, setJustAdded] = useState(false);

  const priceIqd = perfume.prices[selectedSize];
  const priceDisplay = currency === 'USD' 
    ? `$${(priceIqd / 1500).toFixed(1)}` 
    : `${priceIqd.toLocaleString()} د.ع`;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(perfume, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div 
      onClick={() => handleView(perfume)}
      className="group cursor-pointer rounded-2xl bg-[#151118] border border-[#2D2332] hover:border-[#E8AF7A]/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F0D12]">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {perfume.badge && (
          <div className="absolute top-3 right-3 text-[11px] font-bold text-[#E8AF7A] bg-[#161219]/90 border border-[#3E3045] px-2.5 py-1 rounded">
            {perfume.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4 text-right">
        <div>
          <div className="flex items-center justify-between text-xs text-[#9B8F9F] mb-1">
            <span className="font-semibold uppercase">{perfume.brand}</span>
            <div className="flex items-center gap-1 text-[#E8AF7A]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{perfume.rating}</span>
            </div>
          </div>
          <h3 className="font-serif-brand text-lg font-bold text-white group-hover:text-[#E8AF7A]">
            {perfume.name}
          </h3>
          <p className="text-xs text-[#A89CAE] mt-1 line-clamp-2">
            {perfume.descriptionKu}
          </p>
        </div>

        {/* Size Switcher */}
        <div>
          <div className="flex justify-between text-[11px] text-[#A699AA] mb-1">
            <span>قەبارە:</span>
            <span className="font-mono text-[#E8AF7A] font-bold">{selectedSize}</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#1A141F] rounded-xl border border-[#2D2332]" onClick={(e) => e.stopPropagation()}>
            {(['10ml', '20ml', '30ml'] as BottleSize[]).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                  selectedSize === size
                    ? 'bg-gradient-to-r from-[#C88A4A] to-[#E8AF7A] text-[#120D0E]'
                    : 'text-[#9F93A3] hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add */}
        <div className="pt-2 border-t border-[#29202E] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#887C8D] block">نرخ:</span>
            <span className="text-base font-bold font-mono text-[#F4ECE5]">{priceDisplay}</span>
          </div>
          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
              justAdded ? 'bg-emerald-600 text-white' : 'bg-[#291F2F] text-[#E8AF7A] hover:bg-[#E8AF7A] hover:text-black'
            }`}
          >
            {justAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
            <span>{justAdded ? 'زێدە بوو' : 'تەلەب بکە'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};