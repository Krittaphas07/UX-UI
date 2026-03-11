import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Diamond, Mail, Lock, Eye, EyeOff, Github } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side: Branding & Welcome */}
      <div className="relative hidden md:flex flex-1 flex-col justify-between p-12 overflow-hidden bg-[#1a1a1a]">
        {/* Background Decoration */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1200")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-transparent"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 text-white">
            <Diamond className="w-8 h-8 fill-current" />
            <h2 className="text-xl font-bold tracking-tight">SODAFT AUDIO</h2>
          </Link>
        </div>
        
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            สัมผัสสุนทรียภาพ <br />
            <span className="text-[#78758c]">แห่งเสียงที่แท้จริง</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed font-medium">
            ยินดีต้อนรับสู่ศูนย์รวมอุปกรณ์เครื่องเสียงระดับไฮเอนด์ พบกับหูฟัง ลำโพง และระบบเสียงที่คัดสรรมาเพื่อคนรักเสียงเพลงโดยเฉพาะ
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 text-white/40">
            <span className="text-sm font-medium">© 2024 SODAFT Audio & Sound Solutions.</span>
          </div>
        </div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-white">
        <div className="w-full max-w-[440px]">
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center justify-center gap-2 mb-8 text-[#78758c]">
            <Diamond className="w-8 h-8 fill-current" />
            <span className="text-xl font-bold tracking-tight">SODAFT</span>
          </div>

          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-800 mb-2">เข้าสู่ระบบ SODAFT Audio</h2>
            <p className="text-slate-500">เข้าสู่ระบบเพื่อรับสิทธิพิเศษและติดตามคำสั่งซื้ออุปกรณ์เสียงระดับพรีเมียมของคุณ</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">อีเมล</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 focus:ring-2 focus:ring-[#78758c]/20 focus:border-[#78758c] outline-none transition-all rounded-xl"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">รหัสผ่าน</label>
                <a href="#" className="text-xs font-bold text-[#78758c] hover:underline">ลืมรหัสผ่าน?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 focus:ring-2 focus:ring-[#78758c]/20 focus:border-[#78758c] outline-none transition-all rounded-xl"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-[#78758c] focus:ring-[#78758c]"
              />
              <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">จดจำฉันเป็นเวลา 30 วัน</label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#78758c] hover:bg-[#6a677d] text-white font-bold shadow-lg shadow-[#78758c]/20 transition-all transform active:scale-[0.98] rounded-xl"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-semibold tracking-wider">หรือดำเนินการต่อด้วย</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 transition-colors rounded-xl">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-bold text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 transition-colors rounded-xl">
              <Github className="w-5 h-5" />
              <span className="text-sm font-bold text-slate-700">GitHub</span>
            </button>
          </div>

          {/* Toggle Link */}
          <p className="mt-10 text-center text-slate-600">
            ยังไม่มีบัญชี? <a href="#" className="text-[#78758c] font-bold hover:underline">สร้างบัญชีใหม่</a>
          </p>

          {/* Footer Links */}
          <div className="mt-12 flex justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-[#78758c]">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-[#78758c]">ข้อกำหนดการใช้งาน</a>
            <a href="#" className="hover:text-[#78758c]">ติดต่อเรา</a>
          </div>
        </div>
      </div>
    </div>
  );
};
