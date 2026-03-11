import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Search,
  Bell,
  LayoutDashboard,
  Package,
  Users as UsersIcon,
  Settings,
  LogOut,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Fashion', value: 300 },
  { name: 'Home', value: 300 },
  { name: 'Beauty', value: 200 },
];

const COLORS = ['#78758c', '#a5a3b8', '#d1d0db', '#e8e7ed'];

export const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between mb-10 text-[#78758c]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#78758c] flex items-center justify-center text-white">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">SODAFT</h2>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-400"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="flex-1 space-y-2">
        <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors mb-4">
          <ArrowLeft className="w-5 h-5" />
          <span>กลับสู่หน้าร้าน</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#78758c] text-white font-bold">
          <LayoutDashboard className="w-5 h-5" />
          <span>แดชบอร์ด</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors">
          <Package className="w-5 h-5" />
          <span>สินค้า</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors">
          <ShoppingBag className="w-5 h-5" />
          <span>คำสั่งซื้อ</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors">
          <UsersIcon className="w-5 h-5" />
          <span>ลูกค้า</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors">
          <TrendingUp className="w-5 h-5" />
          <span>รายงาน</span>
        </button>
      </nav>
      
      <div className="pt-6 border-t border-slate-100 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-bold transition-colors">
          <Settings className="w-5 h-5" />
          <span>ตั้งค่า</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-bold transition-colors">
          <LogOut className="w-5 h-5" />
          <span>ออกจากระบบ</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 p-6 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 p-6 flex flex-col lg:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 w-full overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-[#78758c] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="hidden md:flex lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-[#78758c] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-3xl font-black text-slate-900 truncate">ภาพรวมระบบ</h1>
              <p className="text-xs sm:text-sm text-slate-500">ยินดีต้อนรับกลับมา, ผู้ดูแลระบบ</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="ค้นหาข้อมูล..."
                className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#78758c] text-sm outline-none"
              />
            </div>
            <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-[#78758c] transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-[#78758c] text-white flex items-center justify-center font-bold">
              AD
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {[
            { label: 'รายได้ทั้งหมด', value: '$128,430', icon: DollarSign, trend: '+12.5%', isUp: true },
            { label: 'คำสั่งซื้อใหม่', value: '1,240', icon: ShoppingBag, trend: '+8.2%', isUp: true },
            { label: 'ลูกค้าใหม่', value: '450', icon: Users, trend: '-3.1%', isUp: false },
            { label: 'อัตราการซื้อ', value: '3.2%', icon: TrendingUp, trend: '+0.5%', isUp: true },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-50 text-[#78758c]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                  stat.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                }`}>
                  {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          <div className="lg:col-span-2 bg-white p-4 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">แนวโน้มยอดขาย</h3>
              <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-2 font-bold text-slate-600 outline-none w-full sm:w-auto">
                <option>7 วันล่าสุด</option>
                <option>30 วันล่าสุด</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#78758c" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#78758c" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#78758c" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-8">หมวดหมู่ยอดนิยม</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {categoryData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                    <span className="text-sm text-slate-500">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{Math.round((item.value / 1200) * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-8 flex items-center justify-between border-b border-slate-50">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">คำสั่งซื้อล่าสุด</h3>
            <button className="text-sm font-bold text-[#78758c] hover:underline">ดูทั้งหมด</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">หมายเลขคำสั่งซื้อ</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">ลูกค้า</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">สินค้า</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">ราคา</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">สถานะ</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { id: '#ORD-7281', customer: 'สมชาย ใจดี', product: 'SonicBlast Pro', price: '$299', status: 'จัดส่งแล้ว', color: 'emerald' },
                  { id: '#ORD-7282', customer: 'วิภาวรรณ รักเรียน', product: 'Vision Tab Ultra', price: '$799', status: 'กำลังเตรียม', color: 'amber' },
                  { id: '#ORD-7283', customer: 'มานะ อดทน', product: 'Swift Watch', price: '$199', status: 'รอดำเนินการ', color: 'slate' },
                  { id: '#ORD-7284', customer: 'ปิยะมาศ สุขสันต์', product: 'Acoustic Pro', price: '$299', status: 'จัดส่งแล้ว', color: 'emerald' },
                ].map((order, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-4 text-sm font-bold text-slate-900">{order.id}</td>
                    <td className="px-8 py-4 text-sm text-slate-600">{order.customer}</td>
                    <td className="px-8 py-4 text-sm text-slate-600">{order.product}</td>
                    <td className="px-8 py-4 text-sm font-bold text-slate-900">{order.price}</td>
                    <td className="px-8 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                        order.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
