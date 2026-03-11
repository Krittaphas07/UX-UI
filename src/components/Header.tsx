import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Diamond, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'หน้าแรก', path: '/' },
    { label: 'หมวดหมู่', path: '/categories' },
    { label: 'ตะกร้าสินค้า', path: '/cart' },
    { label: 'แดชบอร์ด', path: '/admin' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-[#78758c]">
            <Diamond className="w-8 h-8 fill-current" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900">SODAFT</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#78758c] py-1",
                  location.pathname === item.path ? "text-[#78758c] border-b-2 border-[#78758c]" : "text-slate-600"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4 flex-1 justify-end max-w-md ml-8">
          <div className="relative w-full hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border-none bg-slate-100 focus:ring-2 focus:ring-[#78758c] text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Link to="/cart" className="relative p-2 rounded-xl bg-[#78758c]/10 text-[#78758c] hover:bg-[#78758c]/20 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#78758c] text-[10px] text-white font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/login" className="p-2 rounded-xl bg-[#78758c]/10 text-[#78758c] hover:bg-[#78758c]/20 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#78758c]/10 text-[#78758c] hover:bg-[#78758c]/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                    location.pathname === item.path 
                      ? "bg-[#78758c] text-white" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-slate-100 focus:ring-2 focus:ring-[#78758c] text-sm"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
