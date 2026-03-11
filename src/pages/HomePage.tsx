import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Filter, ChevronDown, Ticket, Truck, Check } from 'lucide-react';
import { PRODUCTS } from '../types';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('สินค้าทั้งหมด');
  const [showToast, setShowToast] = useState(false);

  const categories = ['สินค้าทั้งหมด', 'หูฟัง', 'ลำโพง', 'เครื่องเสียงบ้าน', 'โน้ตบุ๊ก', 'อุปกรณ์สวมใส่'];
  
  const filteredProducts = activeCategory === 'สินค้าทั้งหมด' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      {/* Hero Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">เครื่องเสียงและแกดเจ็ต</h1>
          <p className="text-slate-500">เทคโนโลยีระดับพรีเมียมที่จำเป็นสำหรับไลฟ์สไตล์ที่ทันสมัยของคุณ</p>
        </div>
        <Link 
          to="/categories" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
        >
          <Filter className="w-4 h-4" />
          <span>เลือกตามหมวดหมู่</span>
        </Link>
      </div>

      {/* Coupons Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Ticket className="w-5 h-5 text-[#78758c]" />
            <span>ศูนย์รวมคูปองส่วนลด</span>
          </div>
          <button className="text-sm font-bold text-[#78758c] hover:underline">ดูคูปองทั้งหมด</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-dashed border-slate-200 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900">ลด 15%</h3>
              <p className="text-xs text-slate-500">อุปกรณ์สมาร์ทโฮม</p>
            </div>
            <button className="bg-[#78758c] text-white px-4 py-2 rounded-lg text-xs font-bold">เก็บคูปอง</button>
          </div>
          
          <div className="bg-white border-2 border-dashed border-slate-200 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900">ลด $50</h3>
              <p className="text-xs text-slate-500">ยอดซื้อขั้นต่ำ $500</p>
            </div>
            <button className="bg-[#78758c] text-white px-4 py-2 rounded-lg text-xs font-bold">เก็บคูปอง</button>
          </div>
          
          <div className="bg-white border-2 border-dashed border-slate-200 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900">ส่งฟรี</h3>
              <p className="text-xs text-slate-500">เมื่อสั่งซื้อครบ $200</p>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">
              <Check className="w-3 h-3" />
              <span>เก็บแล้ว</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Sorting */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-[#78758c] text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
          <Filter className="w-4 h-4" />
          <span>เรียงลำดับและกรอง</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <motion.div
            layout
            key={product.id}
            className="group flex flex-col"
          >
            <div className="relative aspect-square rounded-2xl bg-slate-100 overflow-hidden mb-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur shadow-sm text-slate-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              {product.originalPrice && (
                <span className="absolute bottom-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  ลดราคา
                </span>
              )}
              {!product.originalPrice && product.id === '1' && (
                <span className="absolute bottom-4 left-4 bg-[#78758c] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  สินค้าใหม่
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-1">
              <Link to={`/product/${product.id}`} className="font-bold text-slate-900 hover:text-[#78758c] transition-colors">
                {product.name}
              </Link>
              <p className="text-xs text-slate-500">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-[#78758c] hover:text-white transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">เก็บโค้ดส่วนลดสำเร็จแล้ว!</p>
                <p className="text-xs text-slate-400">ส่วนลด 15% จะถูกนำไปใช้เมื่อชำระเงิน</p>
              </div>
              <button onClick={() => setShowToast(false)} className="ml-auto text-slate-400 hover:text-white">
                <span className="text-xl">×</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
