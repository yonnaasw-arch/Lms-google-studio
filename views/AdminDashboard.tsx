import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { MOCK_LOANS, STATUS_COLORS } from '../constants';
import { LoanStatus } from '../types';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Asset Value', value: '$2.84M', change: '+12.5%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2' },
    { label: 'Active Exposure', value: '$1.42M', change: '+4.2%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2' },
    { label: 'Portfolio Risk', value: 'Low', change: '-1.8%', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Active Apps', value: '42', change: '+12', icon: 'M9 12h6m-6 4h6m2 5H7' },
  ];

  const chartData = [
    { name: 'Jan', amount: 450000 },
    { name: 'Feb', amount: 520000 },
    { name: 'Mar', amount: 480000 },
    { name: 'Apr', amount: 610000 },
    { name: 'May', amount: 590000 },
    { name: 'Jun', amount: 720000 },
  ];

  const distributionData = [
    { name: 'Mortgage', value: 65, color: '#4f46e5' },
    { name: 'Personal', value: 20, color: '#10b981' },
    { name: 'Business', value: 15, color: '#f59e0b' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">System Operations</h2>
          <p className="text-lg text-slate-500 mt-2 font-medium">Enterprise liquidity and multi-party risk management.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-black text-slate-600 shadow-sm hover:bg-slate-50 transition-all">Audit Trails</button>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-95">Disburse Batch</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-black text-slate-800 mb-10 flex items-center justify-between">
            Disbursement Dynamics
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">H1 2024</span>
          </h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dx={-5} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontWeight: 800}} />
                <Bar dataKey="amount" fill="#4f46e5" radius={[12, 12, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-black text-slate-800 mb-10">Asset Allocation</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="45%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                    iconType="circle" 
                    verticalAlign="bottom" 
                    wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-10 py-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
          <h3 className="font-black text-slate-800 text-2xl tracking-tight">Active Underwriting Registry</h3>
          <div className="flex items-center gap-4">
             <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
             <span className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono">Real-time Stream</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">
              <tr>
                <th className="px-10 py-8">Borrower Entity</th>
                <th className="px-10 py-8 text-center">Loan Type</th>
                <th className="px-10 py-8 text-center">Principal</th>
                <th className="px-10 py-8 text-center">Status</th>
                <th className="px-10 py-8 text-right">Processing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_LOANS.map(loan => (
                <tr key={loan.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-[11px] font-black text-indigo-600 uppercase shadow-inner">
                        {loan.borrowerId.substring(0, 2)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 text-base leading-tight">Borrower {loan.borrowerId}</span>
                        <span className="text-[10px] text-slate-400 font-mono mt-1 tracking-tighter">VA: {loan.virtualAccount}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-center text-sm font-bold text-slate-700 uppercase tracking-wide">{loan.type}</td>
                  <td className="px-10 py-8 text-center font-black text-slate-900 text-lg">${loan.amount.toLocaleString()}</td>
                  <td className="px-10 py-8 text-center">
                    <span className={`inline-block px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${STATUS_COLORS[loan.status as LoanStatus]}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                      Review File
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;