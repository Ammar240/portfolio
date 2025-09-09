
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { Goal } from '../types';

const GoalCard: React.FC<{ goal: Goal }> = ({ goal }) => (
    <div className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg border border-[var(--border-color)] h-full flex flex-col">
        <div className="mb-4">{goal.icon}</div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{goal.title}</h3>
        <p className="text-[var(--text-secondary)] flex-grow">{goal.description}</p>
    </div>
);


const Goals: React.FC = () => {
    return (
        <section id="goals" className="bg-[var(--bg-accent)]">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Career Goals</h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto">My professional aspirations and areas of interest for growth in the field of software testing.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                     {PORTFOLIO_DATA.goals.map(goal => (
                        <GoalCard key={goal.title} goal={goal} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Goals;
