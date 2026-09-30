export type BottleSize = '10ml' | '20ml' | '30ml';
export type FragranceGender = 'all' | 'men' | 'women' | 'unisex';
export type FragranceCategory = 'all' | 'woody' | 'oriental' | 'fresh' | 'sweet' | 'floral' | 'spicy';

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  gender: 'men' | 'women' | 'unisex';
  category: FragranceCategory;
  concentration: string;
  origin: string;
  descriptionKu: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: string;
  sillage: string;
  image: string;
  prices: {
    '10ml': number;
    '20ml': number;
    '30ml': number;
  };
  rating: number;
  badge?: string;
}

export interface CartItem {
  id: string;
  perfume: Perfume;
  size: BottleSize;
  quantity: number;
  price: number;
}

export type PaymentMethod = 'fib' | 'fastpay' | 'qi' | 'cash';

export interface OrderData {
  orderId: string;
  customerName: string;
  phoneNumber: string;
  city: string;
  address: string;
  notes?: string;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  date: string;
}