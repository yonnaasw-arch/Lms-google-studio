
import React, { useState } from 'react';
import { UserRole } from '../types';

const PartyManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserRole>(UserRole.BORROWER);

  const parties = [
    { id: 'P-101', name: 'James Wilson', email: 'james.w@example.com', role: UserRole.BORROWER, status: 'Active', score: 742 },
    { id: 'P-102', name: 'TechGrow Ventures', email: 'funding@techgrow.io', role: UserRole.INVESTOR, status: 'Verified', assets: '$1.2M' },
    { id: 'P-103', name: 'Sarah Miller', email: 'sarah.m@gmail.com', role: UserRole.GUARANTOR, status: 'Active', activeGuarantees: 2 },
    { id: 'P-104', name: 'FinTrust Capital', email: 'admin@fintrust.com', role: UserRole.INVESTOR, status: 'Pending', assets: '$850k' },
    { id: 'P-105', name: 'Robert Chen', email: 'chen.robert@yahoo.com', role: UserRole.BORROWER, status: 'Restricted', score: 420 },
  ];

  const filteredParties = parties.filter(p => p.role === activeTab || (activeTab === UserRole.BORROWER && p.role === UserRole.BORROWER));

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Registry</h2>
          <p className="text-xs lg:text-sm text-slate-500">Managing multi-party stakeholders.</p>
        </div>
        <button className="w-full md:w-auto px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-xs lg:text-sm font-bold shadow-lg shadow-indigo-100">
          Add {activeTab}
        </button>
      </div>

      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-full sm:w-fit overflow-x-auto no-scrollbar">
        {[UserRole.BORROWER, UserRole.GUARANTOR, UserRole.INVESTOR].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 sm:flex-none whitespace-nowrap px-4 lg:px-6 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all ${
              activeTab === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}s
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-slate-100">
          <div className="relative w-full lg:w-96">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Filter names..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs lg:text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">Stakeholder</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4 text-center">{activeTab === UserRole.BORROWER ? 'Score' : 'Details'}</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredParties.map(party => (
                <tr key={party.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 text-xs lg:text-sm">{party.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{party.id}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-xs lg:text-sm truncate max-w-[150px]">{party.email}</td>
                  <td className="px-6 py-4 text-center">
                    {activeTab === UserRole.BORROWER && (
                      <span className={`font-bold text-xs lg:text-sm ${party.score && party.score > 700 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {party.score}
                      </span>
                    )}
                    {activeTab === UserRole.INVESTOR && (
                      <span className="font-bold text-slate-800 text-xs">{party.assets}</span>
                    )}
                    {activeTab === UserRole.GUARANTOR && (
                      <span className="font-bold text-slate-800 text-xs">{party.activeGuarantees} active</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide ${
                      party.status === 'Active' || party.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {party.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 p-1">
                      <svg className="w-4 h-4 lg:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
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

export default PartyManagement;
