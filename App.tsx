import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserRole } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BorrowerDashboard from './views/BorrowerDashboard';
import AdminDashboard from './views/AdminDashboard';
import LoanApplicationWizard from './views/LoanApplicationWizard';
import PartyManagement from './views/PartyManagement';

const App: React.FC = () => {
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.BORROWER);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleRole = () => {
    setCurrentUserRole(prev => 
      prev === UserRole.BORROWER ? UserRole.UNDERWRITER : UserRole.BORROWER
    );
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        {/* Mobile Sidebar Backdrop */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <Sidebar 
          role={currentUserRole} 
          onToggleRole={toggleRole} 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex-1 flex flex-col min-w-0 h-full relative">
          <Header role={currentUserRole} onMenuClick={toggleSidebar} />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 lg:p-10">
            <Routes>
              {/* Borrower Routes */}
              <Route path="/borrower" element={<BorrowerDashboard />} />
              <Route path="/borrower/apply" element={<LoanApplicationWizard />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/parties" element={<PartyManagement />} />
              <Route path="/admin/underwriting" element={<div className="p-8 text-center text-slate-500">Underwriting Module Loading...</div>} />
              <Route path="/admin/transactions" element={<div className="p-8 text-center text-slate-500">Transaction History Loading...</div>} />
              
              {/* Fallback */}
              <Route path="/" element={<Navigate to={currentUserRole === UserRole.BORROWER ? "/borrower" : "/admin"} replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;