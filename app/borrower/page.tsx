
'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_LOANS, STATUS_COLORS, PRODUCT_ICONS } from '../../lib/constants';
import { LoanStatus, LoanType } from '../../lib/types';

export default function BorrowerDashboard() {
  const activeLoan = MOCK_LOANS.find(l => l.status === LoanStatus.ACTIVE);
  const pendingLoans = MOCK_LOANS.filter(l => l.status === LoanStatus.PENDING_REVIEW);

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
      <div className="bg-indigo-600 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold">Welcome back, Alex!</h2>
            <p className="text-indigo-100 text-sm lg:text-base max-w-lg opacity-90">
              Manage your active loans and track your applications.
            </p>
          </div>
          <Link href="/borrower/apply" className="w-full md:w-auto bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-all transform hover:scale-105">
            New Application
          </Link>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-indigo-500 rounded-full opacity-20"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-bold text-slate-800 px-2 border-l-4 border-indigo-600">Active Loan Summary</h3>
          
          {activeLoan ? (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                    {PRODUCT_ICONS[activeLoan.type as LoanType]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{activeLoan.type} Loan</h4>
                    <p className="text-slate-500 text-xs font-mono">{activeLoan.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${STATUS_COLORS[activeLoan.status as LoanStatus]}`}>
                  {activeLoan.status}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Balance</p>
                  <p className="text-lg font-bold text-slate-900">${activeLoan.outstandingBalance.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Next Payment</p>
                  <p className="text-lg font-bold text-slate-900">{activeLoan.nextRepaymentDate || 'TBD'}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Limit</p>
                  <p className="text-lg font-bold text-slate-900">${activeLoan.amount.toLocaleString()}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Rate</p>
                  <p className="text-lg font-bold text-slate-900">{activeLoan.interestRate}%</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Repayment VA</p>
                    <p className="font-mono font-bold text-white text-lg tracking-wider">{activeLoan.virtualAccount}</p>
                  </div>
                </div>
                <button className="text-indigo-400 text-sm font-bold hover:text-indigo-300">Copy Details</button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-100 rounded-2xl p-12 text-center border-2 border-dashed border-slate-200">
              <p className="text-slate-500">No active loans found.</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <h4 className="font-bold text-slate-800">Pending Requests</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
                  <tr>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingLoans.map(loan => (
                    <tr key={loan.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-700">{loan.type}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">${loan.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase ${STATUS_COLORS[loan.status as LoanStatus]}`}>
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
            <h4 className="font-bold mb-4">Direct Repayment</h4>
            <p className="text-slate-400 text-xs mb-6">Transfer funds directly to your Virtual Account for instant reconciliation.</p>
            <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
              <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">Account Number</p>
              <p className="font-mono font-bold text-xl text-white">8822910</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4">Support</h4>
            <p className="text-xs text-slate-500 mb-6">Need help with your application? Our agents are online.</p>
            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">Start Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
