
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
      <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
        {/* Sidebar backdrop for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <Sidebar 
          role={currentUserRole} 
          onToggleRole={toggleRole} 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          <Header role={currentUserRole} onMenuClick={toggleSidebar} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
            <Routes>
              <Route path="/borrower" element={<BorrowerDashboard />} />
              <Route path="/borrower/apply" element={<LoanApplicationWizard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/parties" element={<PartyManagement />} />
              <Route path="/admin/underwriting" element={<div className="p-8">Underwriting Workflow (Coming Soon)</div>} />
              <Route path="/" element={<Navigate to={currentUserRole === UserRole.BORROWER ? "/borrower" : "/admin"} />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
