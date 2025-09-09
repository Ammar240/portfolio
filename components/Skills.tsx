
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[var(--border-color)]">
        <div className="flex items-start space-x-4">
            <div>{skill.icon}</div>
            <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{skill.name}</h3>
                <p className="text-[var(--text-secondary)]">{skill.description}</p>
            </div>
        </div>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">My Skills</h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto">A comprehensive overview of my technical and soft skills relevant to software testing.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PORTFOLIO_DATA.skills.map(skill => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
