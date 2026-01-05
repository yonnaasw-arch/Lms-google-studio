
import React from 'react';
import { UserRole } from '../types';

interface HeaderProps {
  role: UserRole;
}

const Header: React.FC<HeaderProps> = ({ role }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      <div>
        <h1 className="text-lg font-semibold text-slate-800">
          {role === UserRole.BORROWER ? 'Customer Portal' : 'Administrator Dashboard'}
        </h1>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
          Role: {role}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">Alex Thompson</p>
            <p className="text-xs text-slate-500">Member since 2023</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
             <img src="https://picsum.photos/40/40" alt="Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
