import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
    const { name, title, bio, contact } = PORTFOLIO_DATA;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 py-20">
                <img
                    src="profile-photo.jpg"
                    alt={name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-[var(--bg-secondary)] object-cover"
                />
                <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-3">
                    {name}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--accent-primary)] mb-6">
                    {title}
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] mb-8">
                    {bio}
                </p>
                <div className="flex justify-center items-center space-x-6">
                    <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                    </a>
                     <a href={contact.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                     <a href={contact.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.889 6.223l.232.362-1.078 3.931 4.032-1.057.347.214z"/>
                        </svg>
                    </a>
                     <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
                       </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;