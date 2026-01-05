
'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { UserRole } from '../lib/types';
import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>(UserRole.BORROWER);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleRole = () => {
    setRole(prev => prev === UserRole.BORROWER ? UserRole.UNDERWRITER : UserRole.BORROWER);
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased overflow-hidden">
        <div className="flex h-screen w-screen">
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <Sidebar 
            role={role} 
            onToggleRole={toggleRole} 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
          <div className="flex-1 flex flex-col min-w-0">
            <Header role={role} onMenuClick={() => setIsSidebarOpen(true)} />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
