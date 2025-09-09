
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[var(--bg-accent)] border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6 py-6 text-center text-[var(--text-secondary)]">
                <p>&copy; {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
