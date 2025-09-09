import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from '../constants';

// Safely access the API key to prevent crashes in browser environments.
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

if (!apiKey) {
    console.warn("API_KEY environment variable not set or not accessible in this environment. AI Assistant will not function.");
}

const ai = new GoogleGenAI({ apiKey: apiKey! });

export const getAiResponse = async (history: { role: string, parts: { text: string }[] }[], newMessage: string): Promise<string> => {
    if (!apiKey) {
        return "The AI assistant is currently unavailable. The API key is not configured for this hosting environment.";
    }

    try {
        const portfolioDataString = JSON.stringify(PORTFOLIO_DATA, null, 2);

        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a helpful AI assistant for Ammar Emad's portfolio. Your goal is to answer questions about his skills, experience, and projects based ONLY on the following JSON data. Do not invent any information or discuss topics outside of this data. If the answer is not in the data, politely state that you don't have that information. Keep your answers concise and professional.
                
                Portfolio Data:
                ${portfolioDataString}`
            },
            history: history,
        });

        const response = await chat.sendMessage({ message: newMessage });
        return response.text;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I encountered an error while processing your request. Please try again later.";
    }
};
