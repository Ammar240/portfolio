import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const TimelineItem: React.FC<{ item: ExperienceItem, isLast?: boolean }> = ({ item, isLast }) => (
    <div className="relative">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-[var(--bg-secondary)] rounded-full ring-8 ring-[var(--bg-primary)] border border-[var(--border-color)]">
                {item.icon}
            </div>
            {!isLast && <div className="hidden sm:block w-full bg-[var(--border-color)] h-0.5"></div>}
        </div>
        <div className="mt-4 sm:pr-8">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-[var(--text-secondary)]">{item.institution} | {item.date}</time>
            <p className="text-base font-normal text-[var(--text-secondary)]">{item.description}</p>
        </div>
    </div>
);

const ExperienceSection: React.FC<{ title: string, items: ExperienceItem[] }> = ({ title, items }) => (
    <div className="mb-12">
        <h3 className="text-3xl font-bold mb-8 flex items-center">
             {items[0]?.icon}
            <span className="ml-4">{title}</span>
        </h3>
        <div className="relative border-l border-[var(--border-color)] ml-6 pl-10 py-4">
             {items.map((item, index) => (
                <div key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-[var(--accent-primary)] rounded-full -left-3 ring-8 ring-[var(--bg-primary)]">
                        <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                            <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
                    <time className="block mb-2 text-sm font-normal leading-none text-[var(--text-secondary)]">{item.institution} | {item.date}</time>
                    <p className="mb-4 text-base font-normal text-[var(--text-secondary)]">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const Experience: React.FC = () => {
    const { experience } = PORTFOLIO_DATA;
    return (
        <section id="experience" className="bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Education & Training</h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto">My academic background, certifications, and commitment to continuous learning.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experience.academic && experience.academic.length > 0 && (
                        <ExperienceSection title="Academic Qualifications" items={experience.academic} />
                    )}
                    {experience.certifications && experience.certifications.length > 0 && (
                        <ExperienceSection title="Certifications" items={experience.certifications} />
                    )}
                    {experience.courses && experience.courses.length > 0 && (
                        <ExperienceSection title="Courses & Workshops" items={experience.courses} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;