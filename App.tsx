
import React, { useState } from 'react';
import { AppState } from './types';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './components/KnowledgeBase';
import Blog from './components/Blog';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppState>(AppState.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AppState.DASHBOARD:
        return <Dashboard />;
      case AppState.CHAT:
        return <ChatInterface />;
      case AppState.LEARN:
        return <KnowledgeBase />;
      case AppState.BLOG:
        return <Blog />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen w-screen bg-[#FDFDFF] selection:bg-blue-100 selection:text-blue-900 flex flex-col overflow-hidden">
      <Header currentTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 pt-24 pb-8 overflow-y-auto scroll-smooth">
        <div className="min-h-full w-full animate-in fade-in duration-700">
          {renderContent()}
        </div>
      </main>

      {/* Footer / Mobile Nav Shortcut */}
      <footer className="py-4 border-t border-slate-100 bg-white flex-shrink-0">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2024 iINVEST Educational Intelligence
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
