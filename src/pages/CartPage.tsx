import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, Lock, ShieldCheck, CreditCard, Wallet, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, tax, total, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trash2 className="w-10 h-10 text-slate-300" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">ตะกร้าสินค้าของคุณว่างเปล่า</h2>
        <p className="text-slate-500 mb-8">ดูเหมือนว่าคุณยังไม่ได้เลือกสินค้าใดๆ เลย</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[#78758c] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6a677d] transition-all">
          <ArrowLeft className="w-5 h-5" />
          กลับไปเลือกซื้อสินค้า
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-3xl font-black text-slate-900">ตะกร้าสินค้าของคุณ</h2>
        <p className="text-slate-500">คุณมีสินค้า {totalItems} รายการในตะกร้า</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-50 bg-slate-50/50">
              <h3 className="font-bold text-slate-700">รายการสินค้า</h3>
            </div>
            
            <div className="divide-y divide-slate-50">
              {cart.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-32 h-32 rounded-xl bg-slate-50 overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex flex-col flex-grow justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                        <p className="text-sm text-slate-500">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                      <div className="flex items-center bg-slate-50 rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-slate-600"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-sm font-bold text-slate-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-slate-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">ราคา</p>
                        <p className="text-lg font-black text-[#78758c]">฿{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#78758c] font-bold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            กลับไปเลือกซื้อสินค้าต่อ
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-slate-900">สรุปการสั่งซื้อ</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-500">
                <span>ราคาสินค้า</span>
                <span className="font-bold text-slate-900">฿{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>ค่าจัดส่ง</span>
                <span className="font-bold text-emerald-600">ฟรี</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>ภาษี (7%)</span>
                <span className="font-bold text-slate-900">฿{tax.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-slate-900">ราคาสุทธิ</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#78758c]">฿{total.toLocaleString()}</span>
                  <p className="text-[10px] text-slate-400 font-bold">รวมภาษีมูลค่าเพิ่มแล้ว</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#78758c] hover:bg-[#6a677d] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#78758c]/20 transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                ดำเนินการชำระเงิน
              </button>
              
              <div className="flex items-center justify-center gap-4 text-slate-300 mt-4">
                <CreditCard className="w-6 h-6" />
                <Wallet className="w-6 h-6" />
                <Banknote className="w-6 h-6" />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex gap-3">
                <ShieldCheck className="w-6 h-6 text-[#78758c]" />
                <div>
                  <p className="text-sm font-bold text-slate-700">รับประกันความพึงพอใจ</p>
                  <p className="text-[10px] text-slate-500">ยินดีคืนเงินภายใน 30 วัน หากไม่ได้รับความพึงพอใจ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
