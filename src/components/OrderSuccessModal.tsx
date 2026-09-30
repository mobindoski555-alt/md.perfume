import React from 'react';
import { CheckCircle2, MessageCircle, X } from 'lucide-react';
import { OrderData } from '../typse'

interface OrderSuccessModalProps {
  order: OrderData | null;
  currency: 'IQD' | 'USD';
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const msg = encodeURIComponent(
    `سڵاڤ M&D Perfume,\nئەڤە تەلەبا منا نوویە:\nژمارە: ${order.orderId}\nناڤ: ${order.customerName}\nمۆبایل: ${order.phoneNumber}\nکۆیا گشتی: ${order.total.toLocaleString()} د.ع`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#141018] border border-[#E8AF7A]/40 rounded-3xl p-6 text-right space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-white text-center">تەلەبا تە هاتە تۆمارکرن!</h2>
        <p className="text-xs text-center text-[#A89CAE]">ژمارەیا تەلەبێ: <strong className="text-[#E8AF7A]">{order.orderId}</strong></p>

        <a
          href={`https://wa.me/9647519671007?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>ناردن بۆ واتسئاپێ</span>
        </a>

        <button onClick={onClose} className="w-full py-2.5 rounded-xl bg-white/5 text-xs text-white">داخستن</button>
      </div>
    </div>
  );
};