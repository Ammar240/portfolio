
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--border-color)] flex flex-col items-center text-center">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{service.name}</h3>
    </div>
);

const About: React.FC = () => {
    const { about, services } = PORTFOLIO_DATA;
    return (
        <section id="about" className="bg-[var(--bg-accent)]">
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-12">{about.me}</p>

                    <h3 className="text-3xl font-bold mb-4">My Testing Philosophy</h3>
                    <p className="text-lg text-[var(--text-secondary)] mb-16">{about.philosophy}</p>

                    <h3 className="text-3xl font-bold mb-8">Services Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map(service => (
                            <ServiceCard key={service.name} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
