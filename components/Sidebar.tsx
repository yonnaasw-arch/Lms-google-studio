import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  onToggleRole: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onToggleRole, isOpen, onClose }) => {
  const location = useLocation();
  const isAdmin = role === UserRole.UNDERWRITER || role === UserRole.FINANCE;

  const borrowerLinks = [
    { name: 'My Portfolio', path: '/borrower', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10' },
    { name: 'Apply for Funding', path: '/borrower/apply', icon: 'M12 4v16m8-8H4' },
    { name: 'Identity & KYC', path: '/borrower/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0z' },
  ];

  const adminLinks = [
    { name: 'Control Center', path: '/admin', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2' },
    { name: 'Stakeholders', path: '/admin/parties', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7' },
    { name: 'Collateral Registry', path: '/admin/collateral', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16' },
    { name: 'Financial Batch', path: '/admin/transactions', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2' },
  ];

  const links = isAdmin ? adminLinks : borrowerLinks;

  return (
    <div className={`fixed lg:static inset-y-0 left-0 w-72 bg-slate-900 text-slate-300 flex flex-col transition-all duration-500 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} border-r border-white/5`}>
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-indigo-600/30 transform -rotate-3 transition-transform hover:rotate-0">
            L
          </div>
          <span className="text-2xl font-black text-white tracking-tighter">LendFlow</span>
        </div>
        <button className="lg:hidden text-slate-500 p-2 hover:bg-white/5 rounded-xl" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-6">
        <p className="px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-4">Navigation</p>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => onClose()}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
              location.pathname === link.path 
                ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20 font-bold scale-[1.02]' 
                : 'hover:bg-white/5 hover:text-white'
            }`}
          >
            <svg className={`w-5 h-5 transition-transform group-hover:scale-110 ${location.pathname === link.path ? 'text-white' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
            </svg>
            <span className="text-sm font-bold tracking-tight">{link.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-6">
        <div className="bg-white/5 rounded-[2rem] p-6 border border-white/5 backdrop-blur-md">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-4 text-center">Identity Switcher</p>
          <button 
            onClick={onToggleRole}
            className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black transition-all shadow-xl shadow-indigo-950/40 flex items-center justify-center gap-3 transform active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4" />
            </svg>
            <span className="truncate">{isAdmin ? 'Customer Portal' : 'Administrator'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;