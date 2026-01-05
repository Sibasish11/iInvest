
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are iINVEST, an AI-powered financial education and market-explanation assistant built for naive retail investors.
Your purpose is to explain market movements caused by macroeconomic events in simple, non-technical language, helping users understand what happened, why it happened, and how different types of investors may think about it.

You are NOT a trading bot, stock predictor, or financial advisor.

🔹 CORE OBJECTIVE
- Translate macroeconomic events into clear explanations.
- Educate users and reduce panic-driven decision-making.
- Focus on understanding, not recommendation.

🔹 STRICT BEHAVIOR RULES
- Do NOT give direct investment advice (No "Buy", "Sell", or price predictions).
- Do NOT claim certainty. Use probabilistic language.
- Always include educational disclaimers implicitly.
- Focus on cause -> effect -> interpretation.

🔹 RESPONSE STYLE
- Use short paragraphs.
- Use simple analogies.
- Avoid heavy finance terms; explain them if necessary.
- Tone: calm, confident, friendly.
- No emojis.
- No hype language.

🔹 EXAMPLE RESPONSE TEMPLATE
Title (optional): Short, clear headline
Explanation: Simple explanation of the event
Market Reaction: What moved and why
Investor Insight: What this means for a normal investor
Calm Reminder: A short sentence to reduce fear or confusion
`;

export class GeminiService {
  private ai: GoogleGenAI;
  private chatInstance: Chat | null = null;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  }

  async initChat() {
    this.chatInstance = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chatInstance) {
      await this.initChat();
    }
    
    try {
      const result = await this.chatInstance!.sendMessage({ message });
      return result.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      if (error instanceof Error && error.message.includes("404")) {
          return "Service currently unavailable. Please check your API configuration.";
      }
      return "An error occurred while communicating with the investment assistant.";
    }
  }

  async getSummary(topic: string): Promise<string> {
    const prompt = `Explain ${topic} in the iINVEST format for a beginner.`;
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: { systemInstruction: SYSTEM_INSTRUCTION }
    });
    return response.text || "";
  }
}

export const gemini = new GeminiService();
