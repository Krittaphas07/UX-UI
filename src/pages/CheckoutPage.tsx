import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronRight, 
  Check,
  Wallet,
  Banknote,
  Diamond
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, tax, total } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePlaceOrder = () => {
    // Mock order placement
    alert('สั่งซื้อสินค้าสำเร็จ! ขอบคุณที่ใช้บริการ SODAFT');
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      {/* Steps Indicator */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-[#78758c] text-white' : 'bg-slate-100 text-slate-400'}`}>1</div>
          <span className={`text-sm font-bold ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>ที่อยู่จัดส่ง</span>
        </div>
        <div className="w-12 h-px bg-slate-200"></div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-[#78758c] text-white' : 'bg-slate-100 text-slate-400'}`}>2</div>
          <span className={`text-sm font-bold ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>การชำระเงิน</span>
        </div>
        <div className="w-12 h-px bg-slate-200"></div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? 'bg-[#78758c] text-white' : 'bg-slate-100 text-slate-400'}`}>3</div>
          <span className={`text-sm font-bold ${step >= 3 ? 'text-slate-900' : 'text-slate-400'}`}>ยืนยัน</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Checkout Form */}
        <div className="lg:col-span-8 space-y-8">
          {step === 1 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#78758c]/10 text-[#78758c]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">ที่อยู่จัดส่ง</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ชื่อจริง</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="สมชาย" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">นามสกุล</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="ใจดี" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ที่อยู่</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="123/45 หมู่บ้านสุขใจ ซอย 5" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">จังหวัด</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none bg-white">
                    <option>กรุงเทพมหานคร</option>
                    <option>เชียงใหม่</option>
                    <option>ภูเก็ต</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">รหัสไปรษณีย์</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="10110" />
                </div>
              </div>
              
              <button 
                onClick={() => setStep(2)}
                className="mt-10 w-full bg-[#78758c] text-white font-bold py-4 rounded-xl hover:bg-[#6a677d] transition-all flex items-center justify-center gap-2"
              >
                ถัดไป: การชำระเงิน
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#78758c]/10 text-[#78758c]">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">วิธีการชำระเงิน</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: 'credit-card', label: 'บัตรเครดิต / เดบิต', icon: CreditCard },
                  { id: 'wallet', label: 'E-Wallet (TrueMoney, ShopeePay)', icon: Wallet },
                  { id: 'bank-transfer', label: 'โอนเงินผ่านธนาคาร', icon: Banknote },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                      paymentMethod === method.id ? 'border-[#78758c] bg-[#78758c]/5' : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${paymentMethod === method.id ? 'bg-[#78758c] text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <method.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-900">{method.label}</span>
                    </div>
                    {paymentMethod === method.id && <div className="w-6 h-6 rounded-full bg-[#78758c] flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>}
                  </button>
                ))}
              </div>

              {paymentMethod === 'credit-card' && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">หมายเลขบัตร</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">วันหมดอายุ</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">CVV</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#78758c] outline-none" placeholder="123" />
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 mt-10">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 border border-slate-200 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all"
                >
                  ย้อนกลับ
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-[#78758c] text-white font-bold py-4 rounded-xl hover:bg-[#6a677d] transition-all flex items-center justify-center gap-2"
                >
                  ถัดไป: ยืนยันคำสั่งซื้อ
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#78758c]/10 text-[#78758c]">
                  <Diamond className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">ยืนยันคำสั่งซื้อ</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">ตรวจสอบข้อมูลอีกครั้ง</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-slate-400 uppercase text-[10px] font-bold mb-1">ที่อยู่จัดส่ง</p>
                      <p className="text-slate-700 font-medium">สมชาย ใจดี<br />123/45 หมู่บ้านสุขใจ ซอย 5<br />กรุงเทพมหานคร 10110</p>
                    </div>
                    <div>
                      <p className="text-slate-400 uppercase text-[10px] font-bold mb-1">วิธีการชำระเงิน</p>
                      <p className="text-slate-700 font-medium">บัตรเครดิต (ลงท้ายด้วย 4242)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <p className="text-xs text-emerald-700 font-medium">การชำระเงินของคุณได้รับการคุ้มครองและเข้ารหัสอย่างปลอดภัย</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-10">
                <button 
                  onClick={() => setStep(2)}
                  className="flex-1 border border-slate-200 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all"
                >
                  ย้อนกลับ
                </button>
                <button 
                  onClick={handlePlaceOrder}
                  className="flex-[2] bg-[#78758c] text-white font-bold py-4 rounded-xl hover:bg-[#6a677d] transition-all flex items-center justify-center gap-2"
                >
                  สั่งซื้อสินค้า
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-slate-900">สรุปการสั่งซื้อ</h3>
            
            <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{item.name}</h4>
                    <p className="text-xs text-slate-500">จำนวน: {item.quantity}</p>
                    <p className="text-sm font-bold text-[#78758c] mt-1">฿{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 mb-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between text-slate-500 text-sm">
                <span>ราคาสินค้า</span>
                <span className="font-bold text-slate-900">฿{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>ค่าจัดส่ง</span>
                <span className="font-bold text-emerald-600">ฟรี</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>ภาษี (7%)</span>
                <span className="font-bold text-slate-900">฿{tax.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-6">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-slate-900">ราคาสุทธิ</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#78758c]">฿{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <Truck className="w-5 h-5" />
              <span className="text-xs font-medium">คาดว่าจะได้รับสินค้าภายใน 2-3 วันทำการ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
