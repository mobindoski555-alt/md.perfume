import React from 'react';
import { X, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { CartItem } from '../typse'

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: 'IQD' | 'USD';
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout?: () => void;
  onProceedToCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;
  const handleProceed = onCheckout || onProceedToCheckout || (() => {});

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formattedSubtotal = currency === 'USD' 
    ? `$${(subtotal / 1500).toFixed(1)}` 
    : `${subtotal.toLocaleString()} د.ع`;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-start">
      <div className="w-full max-w-md bg-[#130F16] h-full p-6 flex flex-col justify-between text-right border-r border-[#322737]">
        
        <div className="flex justify-between items-center pb-4 border-b border-[#291F2D]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E8AF7A]" />
            <h2 className="text-lg font-bold text-white">سەبەتەیا کڕینێ</h2>
          </div>
          <button onClick={onClose} className="p-1.5 bg-[#201824] rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-20 text-[#887C8D]">سەبەتەیا تە ڤالایە.</div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="p-3 bg-[#1A141F] rounded-xl flex items-center justify-between gap-3 border border-[#2F2335]">
                <div className="flex-1">
                  <span className="text-[10px] text-[#A69AA8]">{it.perfume.brand}</span>
                  <h4 className="text-sm font-bold text-white">{it.perfume.name}</h4>
                  <span className="text-xs text-[#E8AF7A] font-mono">{it.size}</span>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQuantity(it.id, -1)} className="px-2 py-0.5 bg-[#241A29] rounded text-white">-</button>
                    <span className="text-xs text-white">{it.quantity}</span>
                    <button onClick={() => onUpdateQuantity(it.id, 1)} className="px-2 py-0.5 bg-[#241A29] rounded text-white">+</button>
                  </div>
                </div>
                <button onClick={() => onRemoveItem(it.id)} className="text-red-400 p-2"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-4 border-t border-[#291F2D] space-y-4">
            <div className="flex justify-between text-sm font-bold text-white">
              <span>کۆیا گشتی:</span>
              <span className="text-[#E8AF7A] font-mono">{formattedSubtotal}</span>
            </div>
            <button
              onClick={() => { onClose(); handleProceed(); }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C88A4A] to-[#E8AF7A] text-black font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>بەردەوامبە بۆ تەلەبکرنێ</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};