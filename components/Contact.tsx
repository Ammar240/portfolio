import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy email: ', err);
            alert('Failed to copy email address.');
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        
        const mailtoSubject = encodeURIComponent(subject);
        const mailtoBody = encodeURIComponent(
            `Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`
        );
        
        window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        setIsSubmitted(true);
    };
    
    const resetForm = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
    }

    return (
        <section id="contact" className="bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Contact Me</h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-2 max-w-xl mx-auto">
                        Have a question or want to work together? Drop me a line.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-[var(--bg-secondary)] p-8 rounded-lg shadow-md border border-[var(--border-color)]">
                    {isSubmitted ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Thank you!</h3>
                            <p className="text-[var(--text-secondary)] mb-6">
                                Your default email client should have opened with the message details pre-filled. Please review and send it from there. If it didn't open, you can manually send an email to:
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 bg-[var(--bg-accent)] p-4 rounded-lg">
                                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="font-semibold text-[var(--text-primary)] break-all">{PORTFOLIO_DATA.contact.email}</a>
                                <button onClick={handleCopyToClipboard} className="text-sm bg-[var(--accent-primary)] text-white px-3 py-1 rounded-md hover:bg-[var(--accent-primary-hover)] transition-colors w-20">
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <button onClick={resetForm} className="mt-8 text-sm font-semibold text-[var(--accent-primary)] hover:underline">
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What is the subject?"
                                    className="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    placeholder="Enter your message here"
                                    className="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                                />
                            </div>
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors w-full sm:w-auto"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;