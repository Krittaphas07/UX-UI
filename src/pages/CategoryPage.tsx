import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Headphones, 
  Speaker, 
  Music, 
  Mic2, 
  ChevronLeft, 
  ArrowRight,
  ShoppingCart,
  Heart
} from 'lucide-react';
import { PRODUCTS } from '../types';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'หูฟัง', name: 'หูฟัง', icon: Headphones, count: 3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
  { id: 'ลำโพง', name: 'ลำโพง', icon: Speaker, count: 2, image: 'https://images.unsplash.com/photo-1608156639585-34052e81c99f?auto=format&fit=crop&q=80&w=800' },
  { id: 'เครื่องเสียงบ้าน', name: 'เครื่องเสียงบ้าน', icon: Music, count: 1, image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800' },
  { id: 'อุปกรณ์เสริม', name: 'อุปกรณ์เสริม', icon: Mic2, count: 0, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800' },
];

export const CategoryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory 
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="mb-12">
              <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">เลือกหมวดหมู่สินค้า</h1>
              <p className="text-slate-500">ค้นหาอุปกรณ์เครื่องเสียงที่เหมาะกับไลฟ์สไตล์ของคุณ</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group relative h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all text-left"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur text-white">
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{cat.count} รายการ</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">{cat.name}</h3>
                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                      <span>ดูสินค้า</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="products"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 p-3 pr-6 rounded-2xl bg-slate-100 text-slate-600 hover:bg-[#78758c] hover:text-white transition-all group/back"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform group-hover/back:-translate-x-1" />
                  <span className="font-bold text-sm">กลับไปหน้าหมวดหมู่</span>
                </button>
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">{selectedCategory}</h1>
                  <p className="text-slate-500">พบสินค้าทั้งหมด {filteredProducts.length} รายการ</p>
                </div>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group flex flex-col">
                    <div className="relative aspect-square rounded-3xl bg-slate-100 overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        onClick={() => navigate(`/product/${product.id}`)}
                      />
                      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur shadow-sm text-slate-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <h3 
                        className="font-bold text-slate-900 hover:text-[#78758c] transition-colors cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-black text-slate-900">฿{product.price.toLocaleString()}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="p-3 rounded-2xl bg-slate-100 text-slate-600 hover:bg-[#78758c] hover:text-white transition-all"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ยังไม่มีสินค้าในหมวดหมู่นี้</h3>
                <p className="text-slate-500 mb-8">เรากำลังเตรียมสินค้าใหม่ๆ มาให้คุณเลือกช้อปเร็วๆ นี้</p>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="px-8 py-3 bg-[#78758c] text-white font-bold rounded-2xl hover:bg-[#6a677d] transition-all"
                >
                  กลับไปดูหมวดหมู่อื่น
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
