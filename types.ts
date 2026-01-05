
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface MarketInsight {
  title: string;
  summary: string;
  impact: 'positive' | 'neutral' | 'negative';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export enum AppState {
  CHAT = 'CHAT',
  LEARN = 'LEARN',
  DASHBOARD = 'DASHBOARD',
  BLOG = 'BLOG'
}
