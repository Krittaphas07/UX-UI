import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, Truck, ShieldCheck, ShoppingCart, Minus, Plus, ChevronRight, ZoomIn } from 'lucide-react';
import { PRODUCTS } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images[0] || product.image);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product, quantity);
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
        <Link to="/" className="text-[#78758c] hover:underline">หน้าแรก</Link>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <Link to="/" className="text-[#78758c] hover:underline">อิเล็กทรอนิกส์</Link>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <span className="text-slate-400">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative group aspect-square rounded-2xl bg-slate-50 overflow-hidden">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur rounded-full p-2">
              <ZoomIn className="w-5 h-5 text-slate-600" />
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {(product.images.length > 0 ? product.images : [product.image]).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === img ? 'border-[#78758c]' : 'border-transparent hover:border-slate-200'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">เครื่องเสียงระดับพรีเมียม</span>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
                <span className="text-slate-500 text-sm font-semibold ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="h-4 w-px bg-slate-200"></div>
              <span className="text-emerald-600 text-sm font-bold">In Stock</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-slate-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-red-50 text-red-500">ประหยัด 15%</span>
              </>
            )}
          </div>

          <div className="h-px w-full bg-slate-100"></div>

          <div className="flex flex-col gap-4">
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
            <ul className="flex flex-col gap-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            {/* Color Selector (Mock) */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">สี: <span className="font-normal text-slate-500">มิดไนท์แบล็ค</span></span>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-[#78758c]"></button>
                <button className="w-8 h-8 rounded-full bg-slate-300 ring-2 ring-offset-2 ring-transparent hover:ring-slate-200 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-white border border-slate-200 ring-2 ring-offset-2 ring-transparent hover:ring-slate-200 transition-all"></button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">จำนวน</span>
              <div className="flex items-center border border-slate-200 rounded-xl w-fit overflow-hidden bg-white">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-slate-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 font-bold text-slate-900 min-w-[60px] text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 hover:bg-slate-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 font-bold py-4 rounded-xl bg-[#78758c]/10 text-[#78758c] hover:bg-[#78758c]/20 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                เพิ่มลงตะกร้า
              </button>
              <button 
                className="flex-1 bg-[#78758c] text-white font-bold py-4 rounded-xl hover:bg-[#6a677d] transition-all shadow-lg shadow-[#78758c]/20 flex items-center justify-center gap-2"
              >
                {isAdding ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <span>ซื้อเลย</span>
                )}
              </button>
            </div>
          </div>

          {/* Shipping & Warranty */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-50">
                <Truck className="w-5 h-5 text-[#78758c]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">จัดส่งฟรี</span>
                <span className="text-[10px] text-slate-500">สำหรับการสั่งซื้อเกิน $2,000</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-50">
                <ShieldCheck className="w-5 h-5 text-[#78758c]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">รับประกัน 2 ปี</span>
                <span className="text-[10px] text-slate-500">ศูนย์บริการในประเทศ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-12 text-center text-slate-900">ออกแบบเพื่อความสมบูรณ์แบบ</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.specs.map((spec, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                 {/* Mock icons based on spec label */}
                 {spec.label.includes('เสียง') && <Star className="w-8 h-8 text-[#78758c]" />}
                 {spec.label.includes('แบตเตอรี่') && <Star className="w-8 h-8 text-[#78758c]" />}
                 {spec.label.includes('บลูทูธ') && <Star className="w-8 h-8 text-[#78758c]" />}
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-900">{spec.label}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {spec.value} - เทคโนโลยีขั้นสูงที่ช่วยให้คุณใช้งานได้อย่างมีประสิทธิภาพสูงสุดในทุกสถานการณ์
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
