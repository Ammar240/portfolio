
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AiAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if(isOpen && messages.length === 0){
             setMessages([{ sender: 'ai', text: "Hello! I'm Ammar's AI assistant. Ask me anything about his skills, projects, or experience." }]);
        }
    }, [isOpen, messages.length]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;
        
        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const chatHistory = messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        try {
            const aiText = await getAiResponse(chatHistory, input);
            const aiMessage: Message = { sender: 'ai', text: aiText };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: Message = { sender: 'ai', text: "Sorry, I'm having trouble connecting right now." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-[var(--accent-primary)] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--accent-primary-hover)] transition-transform transform hover:scale-110 z-50"
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-[var(--bg-secondary)] rounded-lg shadow-2xl flex flex-col z-50 border border-[var(--border-color)]">
                    <header className="bg-[var(--accent-primary)] text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-bold text-lg">Portfolio AI Assistant</h3>
                         <button onClick={() => setIsOpen(false)}>&times;</button>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto bg-[var(--bg-primary)]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-accent)] text-[var(--text-primary)]'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex justify-start mb-4">
                                <div className="max-w-[80%] p-3 rounded-lg bg-[var(--bg-accent)] text-[var(--text-primary)]">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-150"></div>
                                        <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-300"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-b-lg">
                        <div className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about skills, projects..."
                                className="flex-1 px-4 py-2 rounded-l-md bg-[var(--bg-accent)] border border-[var(--border-color)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                                disabled={isLoading}
                            />
                            <button onClick={handleSend} disabled={isLoading} className="bg-[var(--accent-primary)] text-white px-4 py-2 rounded-r-md hover:bg-[var(--accent-primary-hover)] disabled:bg-gray-400">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AiAssistant;