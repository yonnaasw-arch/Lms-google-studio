
import React from 'react';
import { LoanStatus, LoanType } from './types';

export const STATUS_COLORS: Record<LoanStatus, string> = {
  [LoanStatus.DRAFT]: 'bg-slate-100 text-slate-600',
  [LoanStatus.PENDING_REVIEW]: 'bg-amber-100 text-amber-700',
  [LoanStatus.ACCEPTED]: 'bg-emerald-100 text-emerald-700',
  [LoanStatus.DECLINED]: 'bg-rose-100 text-rose-700',
  [LoanStatus.ACTIVE]: 'bg-sky-100 text-sky-700',
  [LoanStatus.DUE]: 'bg-indigo-100 text-indigo-700',
  [LoanStatus.OVERDUE]: 'bg-red-100 text-red-700',
  [LoanStatus.ENDED]: 'bg-slate-200 text-slate-800',
};

export const PRODUCT_ICONS: Record<LoanType, React.ReactNode> = {
  [LoanType.MORTGAGE]: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  [LoanType.PERSONAL]: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  [LoanType.BUSINESS]: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export const MOCK_LOANS = [
  {
    id: 'L-001',
    borrowerId: 'U-1',
    type: LoanType.MORTGAGE,
    amount: 450000,
    interestRate: 4.5,
    tenureMonths: 360,
    status: LoanStatus.ACTIVE,
    appliedAt: '2023-10-15',
    virtualAccount: 'VA-8822910',
    outstandingBalance: 442000,
    nextRepaymentDate: '2024-06-01'
  },
  {
    id: 'L-002',
    borrowerId: 'U-1',
    type: LoanType.PERSONAL,
    amount: 15000,
    interestRate: 12.0,
    tenureMonths: 24,
    status: LoanStatus.PENDING_REVIEW,
    appliedAt: '2024-05-10',
    virtualAccount: 'VA-1122334',
    outstandingBalance: 15000,
  }
];
