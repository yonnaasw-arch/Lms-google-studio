
import React from 'react';
import { UserRole } from '../types';

interface HeaderProps {
  role: UserRole;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ role, onMenuClick }) => {
  return (
    <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-30">
      <div className="flex items-center gap-3 lg:gap-0">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h1 className="text-sm lg:text-lg font-semibold text-slate-800 truncate max-w-[150px] sm:max-w-none">
            {role === UserRole.BORROWER ? 'Customer Portal' : 'Administrator Dashboard'}
          </h1>
          <p className="text-[10px] lg:text-xs text-slate-500 font-medium uppercase tracking-wider">
            {role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="relative group">
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-5 h-5 lg:w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">Alex Thompson</p>
            <p className="text-xs text-slate-500">Member</p>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
             <img src="https://picsum.photos/40/40" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
