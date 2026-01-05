import React from 'react';
import { MOCK_LOANS, STATUS_COLORS, PRODUCT_ICONS } from '../constants';
import { LoanStatus, LoanType } from '../types';
import { Link } from 'react-router-dom';

const BorrowerDashboard: React.FC = () => {
  const activeLoan = MOCK_LOANS.find(l => l.status === LoanStatus.ACTIVE || l.status === LoanStatus.OVERDUE);
  const pendingLoans = MOCK_LOANS.filter(l => l.status === LoanStatus.PENDING_REVIEW);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Dynamic Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">Welcome, Alex Thompson.</h2>
            <p className="text-indigo-100 text-lg md:text-xl font-medium max-w-xl opacity-90 leading-relaxed">
              Your lending portfolio is currently <span className="text-emerald-300 font-bold underline decoration-emerald-300/30 underline-offset-4 tracking-tight italic">Optimized</span>. 
              Manage your $450,000 Mortgage and pending requests.
            </p>
          </div>
          <Link 
            to="/borrower/apply" 
            className="w-full md:w-auto bg-white text-indigo-700 px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-indigo-50 transition-all transform hover:-translate-y-1 active:scale-95 text-center text-lg whitespace-nowrap"
          >
            New Funding Request
          </Link>
        </div>
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Active Loans */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
              <span className="w-2.5 h-10 bg-indigo-600 rounded-full"></span>
              Active Facilities
            </h3>
          </div>

          {activeLoan ? (
            <div className="glass-card rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-50 group">
              <div className="flex flex-wrap justify-between items-start gap-6 mb-12">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-indigo-50 text-indigo-600 rounded-[1.5rem] shadow-inner group-hover:scale-110 transition-transform">
                    {PRODUCT_ICONS[activeLoan.type as LoanType]}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 leading-tight">{activeLoan.type} Loan</h4>
                    <p className="text-slate-400 text-sm font-mono tracking-widest mt-1 uppercase font-bold">Ref: {activeLoan.id}</p>
                  </div>
                </div>
                <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${STATUS_COLORS[activeLoan.status as LoanStatus]}`}>
                  {activeLoan.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Balance Due</p>
                  <p className="text-2xl font-black text-slate-900">${activeLoan.outstandingBalance.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Next Due</p>
                  <p className="text-xl font-bold text-slate-700">{activeLoan.nextRepaymentDate || 'Pending'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Principal</p>
                  <p className="text-xl font-bold text-slate-700">${activeLoan.amount.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Fixed APR</p>
                  <p className="text-xl font-black text-indigo-600">{activeLoan.interestRate}%</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Repayment Virtual Account</p>
                    <p className="font-mono font-bold text-white text-xl tracking-[0.25em]">{activeLoan.virtualAccount}</p>
                  </div>
                </div>
                <button className="px-8 py-3 border border-white/10 text-white rounded-xl text-sm font-black hover:bg-white/5 transition-colors">
                  Copy VA Details
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[2.5rem] p-16 text-center border-2 border-dashed border-slate-200">
              <p className="text-slate-400 text-lg font-medium italic">No active loan facilities found in this profile.</p>
            </div>
          )}

          {/* Pending Applications Queue */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
              <h4 className="font-black text-slate-800 text-xl tracking-tight">Active Application Queue</h4>
              <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{pendingLoans.length} Pending</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">
                  <tr>
                    <th className="px-10 py-6">Financing Type</th>
                    <th className="px-10 py-6">Requested Principal</th>
                    <th className="px-10 py-6 text-right">Processing Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingLoans.map(loan => (
                    <tr key={loan.id} className="hover:bg-slate-50/50 transition-all cursor-pointer">
                      <td className="px-10 py-7">
                        <div className="flex items-center gap-4">
                          <span className="font-black text-slate-700 text-lg">{loan.type}</span>
                          <span className="text-[10px] text-slate-400 font-mono tracking-tighter">ID: {loan.id}</span>
                        </div>
                      </td>
                      <td className="px-10 py-7">
                        <span className="font-black text-slate-900 text-xl">${loan.amount.toLocaleString()}</span>
                      </td>
                      <td className="px-10 py-7 text-right">
                        <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${STATUS_COLORS[loan.status as LoanStatus]}`}>
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {pendingLoans.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-10 py-16 text-center text-slate-400 italic font-medium">No applications currently under review.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
            <h4 className="font-black text-slate-800 mb-8 flex items-center justify-between">
              E-Services
              <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.5)]"></span>
            </h4>
            <div className="space-y-4">
              <button className="w-full p-5 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-50 rounded-3xl flex items-center gap-5 transition-all group border border-slate-100">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-slate-800">Bank Statements</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Download PDFs</p>
                </div>
              </button>
              <button className="w-full p-5 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-emerald-50 rounded-3xl flex items-center gap-5 transition-all group border border-slate-100">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-slate-800">Interest Relief</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Check Eligibility</p>
                </div>
              </button>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Direct Support</span>
              </div>
              <h4 className="font-black text-2xl mb-4 leading-tight">Connect with an Expert</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-10 opacity-80">
                Our underwriting team is currently reviewing mortgage applications. Connect now for instant status updates.
              </p>
              <button className="w-full py-5 bg-indigo-600 rounded-[1.5rem] font-black text-sm hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-950/50">
                Initiate Chat
              </button>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboard;