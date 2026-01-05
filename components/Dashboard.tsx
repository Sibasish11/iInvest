
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MOCK_DATA = [
  { name: 'Tech', change: 2.4 },
  { name: 'Finance', change: -1.2 },
  { name: 'Energy', change: 4.1 },
  { name: 'Health', change: 0.8 },
  { name: 'Retail', change: -0.5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-black uppercase tracking-wider">Dashboard</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400 text-xs font-medium">{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Market Pulse</h2>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20">Real-time</button>
          <button className="px-6 py-2 text-slate-500 text-sm font-bold hover:bg-slate-50 rounded-xl transition-colors">Historical</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Market Sentiment</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight">Optimistic</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
            Strong earnings in the tech sector are driving confidence across major indices.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Next Big Event</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight">FOMC Meet</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
            Scheduled for Wednesday. Markets expect a 25 basis point hike. Stay informed.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Sector Trend</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight">+4.1% Energy</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
            Clean energy continues to outperform traditional utilities this quarter.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Sector Activity</h3>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Last 24 Hours</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px'}}
                />
                <Bar dataKey="change" radius={[8, 8, 8, 8]} barSize={40}>
                  {MOCK_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.change > 0 ? '#3b82f6' : '#f43f5e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-950 p-10 rounded-[2.5rem] shadow-2xl text-white flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Daily Knowledge</span>
            <h3 className="text-3xl font-black mb-6 leading-tight">What is a Market Correction?</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              It sounds scary, but a 'correction' is just a price drop of 10% or more. Think of it like a store having a sale. It helps bring prices back to a level that reflects the actual health of companies.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-xl">
              Expand Your Wisdom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
