
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { UserRole, LoanStatus, LoanType } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BorrowerDashboard from './views/BorrowerDashboard';
import AdminDashboard from './views/AdminDashboard';
import LoanApplicationWizard from './views/LoanApplicationWizard';
import PartyManagement from './views/PartyManagement';

const App: React.FC = () => {
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.BORROWER);

  const toggleRole = () => {
    setCurrentUserRole(prev => 
      prev === UserRole.BORROWER ? UserRole.UNDERWRITER : UserRole.BORROWER
    );
  };

  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
        <Sidebar role={currentUserRole} onToggleRole={toggleRole} />
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header role={currentUserRole} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <Routes>
              {/* Borrower Routes */}
              <Route path="/borrower" element={<BorrowerDashboard />} />
              <Route path="/borrower/apply" element={<LoanApplicationWizard />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/parties" element={<PartyManagement />} />
              <Route path="/admin/underwriting" element={<div className="p-8">Underwriting Workflow (Coming Soon)</div>} />
              
              {/* Fallbacks */}
              <Route path="/" element={<Navigate to={currentUserRole === UserRole.BORROWER ? "/borrower" : "/admin"} />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
