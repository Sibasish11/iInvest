
import React, { useState } from 'react';
import { BlogPost } from '../types';

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Understanding the Yield Curve: What it Tells Us About the Future",
    excerpt: "You might have heard experts talking about an 'inverted yield curve'. Here is why it matters for your savings.",
    content: "The yield curve is simply a way to visualize the interest rates of different government bonds. Usually, you get paid more interest for lending money for a long time (10 years) than for a short time (2 years). When this flips, it's called an 'inversion'. This typically indicates that investors are worried about the near future but expect things to stabilize long-term. For a retail investor, this isn't a signal to panic, but rather a reminder to check if your long-term goals still align with your current risk level.",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    category: "Macroeconomics",
    image: "https://images.unsplash.com/photo-1611974717482-582879905d71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "Why High Inflation Doesn't Mean Your Portfolio is Ruined",
    excerpt: "Inflation is the buzzword of the year. Let's look at how companies handle rising costs.",
    content: "Inflation is when the cost of living goes up. For companies, this means their raw materials cost more. However, great companies often have 'pricing power', meaning they can raise their own prices to match. This is why the stock market often acts as a natural hedge against inflation over very long periods. The key is diversification—owning a mix of different types of assets so you aren't reliant on just one thing when prices rise.",
    date: "Oct 22, 2023",
    readTime: "4 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "The Emotional Rollercoaster of Market Volatility",
    excerpt: "A guide on how to stay calm when the numbers on your screen turn red.",
    content: "Volatility is a fancy word for 'price swings'. It's a natural part of investing. Think of it like weather: some days are sunny, some are stormy, but the climate (long-term growth) tends to follow a predictable path. The most common mistake beginners make is selling when things look bad, which locks in their losses. Staying the course is often the hardest, but most rewarding, part of being an investor.",
    date: "Oct 18, 2023",
    readTime: "6 min read",
    category: "Psychology",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop"
  }
];

const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  if (activePost) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setActivePost(null)}
          className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Insights
        </button>
        
        <img src={activePost.image} className="w-full h-80 object-cover rounded-3xl shadow-xl mb-10" alt={activePost.title} />
        
        <div className="flex items-center space-x-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
            {activePost.category}
          </span>
          <span className="text-slate-400 text-sm">{activePost.date} • {activePost.readTime}</span>
        </div>
        
        <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">{activePost.title}</h2>
        
        <div className="prose prose-slate lg:prose-xl max-w-none">
          <p className="text-slate-700 leading-relaxed text-lg mb-6">{activePost.content}</p>
          <div className="bg-slate-50 border-l-4 border-blue-500 p-8 rounded-r-2xl my-10">
            <p className="text-slate-800 font-medium italic text-xl italic">
              "Investing isn't about beating others at their game. It's about controlling yourself at your own game."
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            Always remember that market insights are educational. Every investor's journey is unique. iINVEST exists to clarify the noise, helping you see the signal through the static.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Market Insights</h2>
        <p className="text-slate-500 text-lg">Deep dives into macroeconomic events and psychological strategies.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
            onClick={() => setActivePost(post)}
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={post.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={post.title} 
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                {post.date} • {post.readTime}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-bold text-sm">
                Read Full Insight
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l7 7m-7 7h18" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
