
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ProjectCategory } from '../types';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group bg-[var(--bg-secondary)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--border-color)] flex flex-col">
        <div className="relative">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
            <p className="text-[var(--text-secondary)] flex-grow mb-4">{project.description}</p>
            <a href="#" className="font-semibold text-[var(--accent-primary)] hover:underline self-start">
                View Case Study &rarr;
            </a>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.All);

    const filters = Object.values(ProjectCategory);

    const filteredProjects = useMemo(() => {
        if (activeFilter === ProjectCategory.All) {
            return PORTFOLIO_DATA.projects;
        }
        return PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="bg-[var(--bg-accent)]">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className="text-lg text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto">Explore a selection of my software testing projects, showcasing my skills and experience.</p>
                </div>
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {filters.map(filter => (
                         <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                activeFilter === filter
                                    ? 'bg-[var(--accent-primary)] text-white'
                                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--border-color)]'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 px-6 bg-[var(--bg-secondary)] rounded-lg shadow-md border border-[var(--border-color)]">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">No projects found for this category.</h3>
                        <p className="text-[var(--text-secondary)] mt-2">Try selecting another category!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
