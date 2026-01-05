
import React from 'react';
import { MOCK_LOANS, STATUS_COLORS, PRODUCT_ICONS } from '../constants';
import { LoanStatus, LoanType } from '../types';
import { Link } from 'react-router-dom';

const BorrowerDashboard: React.FC = () => {
  const activeLoan = MOCK_LOANS.find(l => l.status === LoanStatus.ACTIVE || l.status === LoanStatus.OVERDUE);
  const pendingLoans = MOCK_LOANS.filter(l => l.status === LoanStatus.PENDING_REVIEW);

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Banner */}
      <div className="bg-indigo-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold">Welcome back, Alex!</h2>
            <p className="text-indigo-100 text-sm lg:text-base max-w-lg opacity-90">Manage your active loans, track applications, and make repayments through your dedicated virtual account.</p>
          </div>
          <Link to="/borrower/apply" className="w-full sm:w-auto bg-white text-indigo-600 px-6 py-3 rounded-lg lg:rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-colors text-center text-sm lg:text-base">
            Apply Now
          </Link>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-32 h-32 lg:w-64 lg:h-64 bg-indigo-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-24 h-24 lg:w-48 lg:h-48 bg-indigo-700 rounded-full opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Active Loan Summary */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg lg:text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
            My Active Loans
          </h3>

          {activeLoan ? (
            <div className="glass-card rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 lg:p-4 bg-indigo-50 text-indigo-600 rounded-xl">
                    {PRODUCT_ICONS[activeLoan.type as LoanType]}
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-slate-900">{activeLoan.type} Loan</h4>
                    <p className="text-slate-500 text-xs lg:text-sm font-mono">Ref: {activeLoan.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-wider ${STATUS_COLORS[activeLoan.status as LoanStatus]}`}>
                  {activeLoan.status}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 mb-8">
                <div className="bg-slate-50/50 p-3 lg:p-0 rounded-lg lg:bg-transparent">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Outstanding</p>
                  <p className="text-lg lg:text-xl font-bold text-slate-900">${activeLoan.outstandingBalance.toLocaleString()}</p>
                </div>
                <div className="bg-slate-50/50 p-3 lg:p-0 rounded-lg lg:bg-transparent">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Loan</p>
                  <p className="text-lg lg:text-xl font-bold text-slate-900">${activeLoan.amount.toLocaleString()}</p>
                </div>
                <div className="bg-slate-50/50 p-3 lg:p-0 rounded-lg lg:bg-transparent">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Next Payment</p>
                  <p className="text-lg lg:text-xl font-bold text-slate-900 truncate">{activeLoan.nextRepaymentDate || 'N/A'}</p>
                </div>
                <div className="bg-slate-50/50 p-3 lg:p-0 rounded-lg lg:bg-transparent">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">APR</p>
                  <p className="text-lg lg:text-xl font-bold text-slate-900">{activeLoan.interestRate}%</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 lg:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Repayment Virtual Account</p>
                    <p className="font-mono font-bold text-white tracking-wider text-base lg:text-lg">{activeLoan.virtualAccount}</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto text-indigo-400 text-xs lg:text-sm font-bold hover:text-indigo-300 py-2 border border-slate-700 lg:border-none rounded-lg text-center">
                  Copy Details
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl lg:rounded-2xl p-8 lg:p-12 text-center border-2 border-dashed border-slate-200">
              <div className="mx-auto w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-800">No Active Loans</h4>
              <p className="text-slate-500 mb-6 text-sm">You don't have any active loans at the moment.</p>
              <Link to="/borrower/apply" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                Apply Now
              </Link>
            </div>
          )}

          {/* Pending Applications List (Optimized for Mobile) */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 lg:p-6 border-b border-slate-100 flex justify-between items-center">
              <h4 className="font-bold text-slate-800 text-sm lg:text-base">Pending Applications</h4>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">
                {pendingLoans.length} total
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-4 lg:px-6 py-4">Loan Type</th>
                    <th className="px-4 lg:px-6 py-4">Applied</th>
                    <th className="px-4 lg:px-6 py-4">Amount</th>
                    <th className="px-4 lg:px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingLoans.map(loan => (
                    <tr key={loan.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="px-4 lg:px-6 py-4">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <div className="p-1.5 bg-slate-100 text-slate-500 rounded hidden sm:block">
                            {PRODUCT_ICONS[loan.type as LoanType]}
                          </div>
                          <span className="font-semibold text-slate-800 text-xs lg:text-sm">{loan.type}</span>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4 text-slate-600 text-[10px] lg:text-sm font-medium whitespace-nowrap">{loan.appliedAt}</td>
                      <td className="px-4 lg:px-6 py-4 text-slate-800 font-bold text-xs lg:text-sm whitespace-nowrap">${loan.amount.toLocaleString()}</td>
                      <td className="px-4 lg:px-6 py-4 text-right">
                        <span className={`inline-block px-2 py-1 rounded-full text-[9px] font-bold uppercase ${STATUS_COLORS[loan.status as LoanStatus]}`}>
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {pendingLoans.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-slate-400 italic text-sm">No applications in progress</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6 lg:space-y-8">
          {/* Virtual Account Info Card */}
          <div className="bg-slate-900 rounded-xl lg:rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-sm lg:text-base">Virtual Account</h4>
              <div className="w-8 h-8 bg-indigo-500/20 text-indigo-400 rounded flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
            </div>
            <p className="text-slate-400 text-xs lg:text-sm mb-6 leading-relaxed">Unique account assigned to you for seamless, automated loan repayment matching.</p>
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-3 lg:p-4">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Bank Name</p>
                <p className="font-semibold text-xs lg:text-sm">LendFlow National Bank</p>
              </div>
              <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-lg p-3 lg:p-4">
                <p className="text-[10px] text-indigo-400 uppercase font-bold mb-1">Account Number</p>
                <div className="flex justify-between items-center">
                  <p className="font-mono font-bold text-sm lg:text-lg tracking-wider text-white">8822910</p>
                  <button className="text-indigo-400 p-1 hover:bg-white/10 rounded">
                    <svg className="w-4 h-4 lg:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Support Widget */}
          <div className="bg-white rounded-xl lg:rounded-2xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4 text-sm lg:text-base">Need Help?</h4>
            <p className="text-xs lg:text-sm text-slate-500 mb-6 leading-relaxed">Our underwriters are processing applications Mon-Fri 9AM-6PM.</p>
            <div className="space-y-2 lg:space-y-3">
              <button className="w-full py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-white transition-all text-xs lg:text-sm">
                Chat Support
              </button>
              <button className="w-full py-2.5 text-indigo-600 font-bold text-xs lg:text-sm hover:bg-indigo-50 rounded-lg transition-all">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboard;
