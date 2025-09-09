import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Goals', 'Contact'];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => document.getElementById(link.toLowerCase()));
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-sm shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold text-[var(--accent-primary)] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
                    </svg>
                    {PORTFOLIO_DATA.name}
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    {NAV_LINKS.map(link => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors ${activeSection === link.toLowerCase() ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button onClick={toggleTheme} className="p-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-accent)]">
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        )}
                    </button>
                    <a href={PORTFOLIO_DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-[var(--accent-primary)] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors">
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;