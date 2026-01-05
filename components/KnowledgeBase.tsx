
import React, { useState } from 'react';

interface Concept {
  title: string;
  short: string;
  full: string;
  analogy: string;
}

const CONCEPTS: Concept[] = [
  {
    title: "Inflation (CPI)",
    short: "The rising cost of things we buy every day.",
    full: "Inflation measures how much more expensive goods and services have become over a period of time. The Consumer Price Index (CPI) is the most common way to measure it.",
    analogy: "If a candy bar cost $1 last year and $1.10 today, that 10% increase is inflation."
  },
  {
    title: "Interest Rates",
    short: "The cost of borrowing money.",
    full: "Central banks set interest rates. When rates are high, borrowing (loans) is expensive. When rates are low, borrowing is cheap, which usually encourages spending.",
    analogy: "Interest is the 'rent' you pay to use someone else's money."
  },
  {
    title: "Bull & Bear Markets",
    short: "Directions the market is moving.",
    full: "A Bull market is when stock prices are rising or expected to rise. A Bear market is when prices are falling.",
    analogy: "Bulls attack by charging up with their horns; Bears attack by swiping down with their paws."
  },
  {
    title: "Dividends",
    short: "A share of a company's profit given back to you.",
    full: "When a company makes a profit, they might decide to pay some of that cash back to the people who own their stock. These are called dividends.",
    analogy: "Like receiving a 'thank you' check for being a part-owner of the company."
  }
];

const KnowledgeBase: React.FC = () => {
  const [selected, setSelected] = useState<Concept | null>(null);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Financial Dictionary</h2>
        <p className="text-slate-500">Complex concepts translated into plain English.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONCEPTS.map((concept) => (
          <div 
            key={concept.title}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all cursor-pointer group"
            onClick={() => setSelected(concept)}
          >
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{concept.title}</h3>
            <p className="mt-2 text-slate-600">{concept.short}</p>
            <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold">
              Read Detailed Explanation
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative">
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{selected.title}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What it is</h4>
                <p className="text-slate-700 leading-relaxed text-lg">{selected.full}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Simple Analogy</h4>
                <p className="text-blue-900 font-medium italic text-lg leading-relaxed">"{selected.analogy}"</p>
              </div>
            </div>

            <button 
              onClick={() => setSelected(null)}
              className="mt-8 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
