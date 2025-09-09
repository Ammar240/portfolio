
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from '../constants';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI Assistant will not function.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getAiResponse = async (history: { role: string, parts: { text: string }[] }[], newMessage: string): Promise<string> => {
    if (!process.env.API_KEY) {
        return "The AI assistant is currently unavailable. The API key is not configured.";
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