import React from 'react';
import { Diamond, Share2, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 text-[#78758c] mb-6">
            <Diamond className="w-8 h-8 fill-current" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900">SODAFT</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            คัดสรรเทคโนโลยีและนวัตกรรมที่ดีที่สุดเพื่อไลฟ์สไตล์ที่ทันสมัยของคุณ
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">ช้อปปิ้ง</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-[#78758c] transition-colors">สินค้าใหม่</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">สินค้าขายดี</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">ลดราคา</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">ศูนย์รวมคูปอง</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">เกี่ยวกับเรา</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-[#78758c] transition-colors">ประวัติบริษัท</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">ร่วมงานกับเรา</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">ติดต่อเรา</a></li>
            <li><a href="#" className="hover:text-[#78758c] transition-colors">นโยบายความเป็นส่วนตัว</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">รับข่าวสาร</h4>
          <p className="text-sm text-slate-500 mb-4">
            สมัครรับข่าวสารเพื่อรับโปรโมชั่นล่าสุด
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="อีเมล"
              className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:ring-2 focus:ring-[#78758c] outline-none"
            />
            <button className="bg-[#78758c] text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-[#6a677d] transition-colors">
              สมัคร
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#78758c] transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#78758c] transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-12 mt-12 border-t border-slate-200 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
        © 2024 SODAFT E-COMMERCE. สงวนลิขสิทธิ์.
      </div>
    </footer>
  );
};
