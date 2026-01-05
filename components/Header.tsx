
import React from 'react';
import { AppState } from '../types';

interface HeaderProps {
  currentTab: AppState;
  onTabChange: (tab: AppState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: AppState.DASHBOARD, label: 'Overview' },
    { id: AppState.CHAT, label: 'AI Assistant' },
    { id: AppState.BLOG, label: 'Insights' },
    { id: AppState.LEARN, label: 'Knowledge' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-slate-950/90 backdrop-blur-xl border border-slate-800 p-2 pl-6 pr-2 rounded-[2rem] shadow-2xl pointer-events-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-black text-white tracking-tighter flex items-center cursor-pointer" onClick={() => onTabChange(AppState.DASHBOARD)}>
            <span className="bg-blue-600 text-white w-6 h-6 rounded-md flex items-center justify-center mr-2 not-italic text-[10px]">i</span>
            iINVEST
          </h1>
        </div>

        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                currentTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center">
          <button className="bg-slate-900 text-slate-300 w-10 h-10 rounded-2xl flex items-center justify-center border border-slate-800 hover:text-white hover:border-slate-700 transition-all group">
             <span className="text-sm font-bold group-hover:scale-110 transition-transform">S</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
