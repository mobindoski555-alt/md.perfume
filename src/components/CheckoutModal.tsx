import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Smartphone, CreditCard, Banknote } from 'lucide-react';
import { CartItem, PaymentMethod, OrderData } from '../typse'
import { KURDISTAN_CITIES } from '../data/perfumes';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: 'IQD' | 'USD';
  onOrderSuccess?: (order: OrderData) => void;
  onOrderComplete?: (order: OrderData) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onOrderSuccess,
  onOrderComplete,
}) => {
  if (!isOpen) return null;
  const handleFinish = onOrderSuccess || onOrderComplete || (() => {});

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState(KURDISTAN_CITIES[0]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('fib');

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 4000;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: OrderData = {
      orderId: 'MD-' + Math.floor(1000 + Math.random() * 9000),
      customerName,
      phoneNumber,
      city,
      address,
      paymentMethod,
      items,
      subtotal,
      deliveryFee,
      total,
      date: new Date().toLocaleDateString('ku-IQ')
    };
    handleFinish(newOrder);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#141017] border border-[#3C2F43] rounded-3xl p-6 text-right space-y-6">
        <button onClick={onClose} className="absolute top-4 left-4 p-2 bg-[#201824] rounded-full text-white"><X className="w-5 h-5" /></button>
        <h2 className="text-xl font-bold text-white">تۆمارکرنا تەلەبێ و پارەدان</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[#B7ABBc] block mb-1">ناڤێ تە یێ سیانی:</label>
            <input required type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-[#1A1420] border border-[#372A3D] text-white text-xs" />
          </div>

          <div>
            <label className="text-xs text-[#B7ABBc] block mb-1">ژمارەیا مۆبایلێ (واتسئاپ):</label>
            <input required type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="0750 000 0000" className="w-full px-3 py-2 rounded-xl bg-[#1A1420] border border-[#372A3D] text-white text-xs font-mono" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-[#B7ABBc] block mb-1">باژێڕ:</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-[#1A1420] border border-[#372A3D] text-white text-xs">
                {KURDISTAN_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-[#B7ABBc] block mb-1">ناڤونیشان:</label>
              <input required type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="گەڕەک و کۆڵان" className="w-full px-3 py-2 rounded-xl bg-[#1A1420] border border-[#372A3D] text-white text-xs" />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="text-xs text-[#E8AF7A] font-bold block mb-2">شێوازێ پارەدانێ:</label>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <button type="button" onClick={() => setPaymentMethod('fib')} className={`p-2.5 rounded-xl border text-center ${paymentMethod === 'fib' ? 'border-[#00A86B] bg-[#00A86B]/20 text-white' : 'border-[#342739] text-[#9D8F9F]'}`}>FIB</button>
              <button type="button" onClick={() => setPaymentMethod('fastpay')} className={`p-2.5 rounded-xl border text-center ${paymentMethod === 'fastpay' ? 'border-[#E50914] bg-[#E50914]/20 text-white' : 'border-[#342739] text-[#9D8F9F]'}`}>FastPay</button>
              <button type="button" onClick={() => setPaymentMethod('qi')} className={`p-2.5 rounded-xl border text-center ${paymentMethod === 'qi' ? 'border-[#F59E0B] bg-[#F59E0B]/20 text-white' : 'border-[#342739] text-[#9D8F9F]'}`}>Qi Card</button>
              <button type="button" onClick={() => setPaymentMethod('cash')} className={`p-2.5 rounded-xl border text-center ${paymentMethod === 'cash' ? 'border-[#E8AF7A] bg-[#E8AF7A]/20 text-white' : 'border-[#342739] text-[#9D8F9F]'}`}>کاش</button>
            </div>
          </div>

          <div className="p-3 bg-[#1D1723] rounded-xl text-xs text-white space-y-1">
            <div className="flex justify-between"><span>کۆیا گشتی:</span><span className="font-bold text-[#E8AF7A]">{total.toLocaleString()} د.ع</span></div>
          </div>

          <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C88A4A] to-[#E8AF7A] text-black font-bold text-xs shadow-md">
            پشتڕاستکرنەوە و تەلەبکرن
          </button>
        </form>

      </div>
    </div>
  );
};