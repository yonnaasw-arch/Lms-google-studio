
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { MOCK_LOANS, STATUS_COLORS } from '../constants';
import { LoanStatus } from '../types';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Issued', value: '$2.84M', change: '+12.5%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1m4-12H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z' },
    { label: 'Portfolio', value: '$1.42M', change: '+4.2%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { label: 'Overdue', value: '$72K', change: '-1.8%', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Apps', value: '42', change: '+12', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
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
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Operations</h2>
          <p className="text-xs lg:text-sm text-slate-500">Portfolio health and throughput metrics.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 md:flex-none px-3 lg:px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs lg:text-sm font-semibold hover:bg-slate-50">Report</button>
          <button className="flex-1 md:flex-none px-3 lg:px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs lg:text-sm font-semibold hover:bg-indigo-700">Issue Loan</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-2 lg:mb-4">
              <div className="p-1.5 lg:p-2.5 bg-slate-50 text-slate-500 rounded-lg">
                <svg className="w-4 h-4 lg:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className={`text-[9px] lg:text-xs font-bold px-1.5 py-0.5 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-[10px] lg:text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-lg lg:text-2xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Charts Section */}
        <div className="lg:col-span-2 bg-white rounded-xl lg:rounded-2xl border border-slate-200 p-4 lg:p-6 shadow-sm">
          <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-6">Disbursement Trends</h3>
          <div className="h-[200px] lg:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dx={-5} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', fontSize: '12px'}} />
                <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl lg:rounded-2xl border border-slate-200 p-4 lg:p-6 shadow-sm">
          <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-6">Portfolio Mix</h3>
          <div className="h-[200px] lg:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{fontSize: '10px'}} verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Underwriting Table */}
      <div className="bg-white rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-base lg:text-lg font-bold text-slate-800">Review Queue</h3>
          <button className="text-indigo-600 text-xs font-bold hover:underline">All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Risk</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_LOANS.filter(l => l.status === LoanStatus.PENDING_REVIEW || l.status === LoanStatus.OVERDUE).map(loan => (
                <tr key={loan.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        {loan.borrowerId}
                      </div>
                      <span className="font-semibold text-slate-800 text-xs lg:text-sm truncate max-w-[120px]">Borrower {loan.borrowerId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-xs lg:text-sm">{loan.type}</td>
                  <td className="px-6 py-4 text-slate-800 font-bold text-xs lg:text-sm whitespace-nowrap">${loan.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${loan.status === LoanStatus.OVERDUE ? 'bg-rose-500 w-full' : 'bg-emerald-500 w-3/4'}`}></div>
                       </div>
                       <span className="text-[9px] font-bold text-slate-500">{loan.status === LoanStatus.OVERDUE ? 'High' : 'Low'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-indigo-600 font-bold text-[10px] lg:text-xs bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100">
                      Process
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
