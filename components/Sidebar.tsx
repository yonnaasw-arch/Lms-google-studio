
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserRole } from '../lib/types';

interface SidebarProps {
  role: UserRole;
  onToggleRole: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ role, onToggleRole, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isAdmin = role === UserRole.UNDERWRITER || role === UserRole.FINANCE;

  const links = isAdmin ? [
    { name: 'Dashboard', path: '/admin', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Parties', path: '/admin/parties', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857' },
  ] : [
    { name: 'My Loans', path: '/borrower', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2' },
    { name: 'Apply Now', path: '/borrower/apply', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
  ];

  return (
    <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">L</div>
          <span className="text-xl font-bold text-white tracking-tight">LendFlow</span>
        </div>
        <button className="lg:hidden text-slate-400 p-2" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === link.path ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-600/20' : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
            </svg>
            <span className="font-medium text-sm">{link.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={onToggleRole}
          className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4" /></svg>
          <span>Switch to {isAdmin ? 'Borrower' : 'Admin'}</span>
        </button>
      </div>
    </div>
  );
}
