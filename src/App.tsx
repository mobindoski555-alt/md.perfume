import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DecantGuide } from './components/DecantGuide';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { PaymentMethodsSection } from './components/PaymentMethodsSection';
import { Footer } from './components/Footer';
import { PERFUMES_DATA } from './data/perfumes';
import { Perfume, BottleSize, CartItem, OrderData } from './typse'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [modalPerfume, setModalPerfume] = useState<Perfume | null>(null);
  const [order, setOrder] = useState<OrderData | null>(null);
  const [currency, setCurrency] = useState<'IQD' | 'USD'>('IQD');

  const addToCart = (perfume: Perfume, size: BottleSize) => {
    const id = `${perfume.id}-${size}`;
    setCart((prev) => {
      const ex = prev.find((i) => i.id === id);
      if (ex) return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { id, perfume, size, quantity: 1, price: perfume.prices[size] }];
    });
  };

  return (
    <div className="min-h-screen bg-[#0D0B0E] text-[#F3EEEA]">
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onToggleCurrency={() => setCurrency((c) => c === 'IQD' ? 'USD' : 'IQD')}
      />

      <Hero onExploreClick={() => document.getElementById('perfumes')?.scrollIntoView({ behavior: 'smooth' })} />

      <DecantGuide />

      <section id="perfumes" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-right mb-8">گولاڤێن جیهانی</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERFUMES_DATA.map((p) => (
            <ProductCard
              key={p.id}
              perfume={p}
              currency={currency}
              onAddToCart={addToCart}
              onOpenQuickView={(item) => setModalPerfume(item)}
            />
          ))}
        </div>
      </section>

      <PaymentMethodsSection />
      <Footer />

      <ProductModal
        perfume={modalPerfume}
        currency={currency}
        onClose={() => setModalPerfume(null)}
        onAddToCart={addToCart}
        onDirectOrder={(p, s) => { addToCart(p, s); setModalPerfume(null); setIsCheckoutOpen(true); }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={(id, delta) => setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))}
        onRemoveItem={(id) => setCart((prev) => prev.filter((i) => i.id !== id))}
        onCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currency={currency}
        onOrderSuccess={(res) => { setOrder(res); setCart([]); }}
      />

      <OrderSuccessModal order={order} currency={currency} onClose={() => setOrder(null)} />
    </div>
  );
}