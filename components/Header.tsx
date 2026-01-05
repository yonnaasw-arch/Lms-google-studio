
'use client';

import React from 'react';
import { UserRole } from '../lib/types';

interface HeaderProps {
  role: UserRole;
  onMenuClick: () => void;
}

export default function Header({ role, onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 relative z-30 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div>
          <h1 className="text-sm lg:text-lg font-bold text-slate-800">{role} Portal</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Session</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-slate-900">Alex Thompson</p>
          <p className="text-[10px] text-slate-400 font-bold">Verified Individual</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
          <img src="https://picsum.photos/80/80?grayscale" alt="User" />
        </div>
      </div>
    </header>
  );
}
