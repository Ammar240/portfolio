
export interface Skill {
    icon: JSX.Element;
    name: string;
    description: string;
}

export enum ProjectCategory {
    All = 'All',
    Functional = 'Functional Testing',
    Performance = 'Performance Testing',
    Automation = 'Automation',
    API = 'API Testing'
}

export interface Project {
    id: string;
    image: string;
    category: ProjectCategory;
    title: string;
    description: string;
}

export interface ExperienceItem {
    icon: JSX.Element;
    title: string;
    institution: string;
    date: string;
    description: string;
}

export interface Goal {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface Service {
    icon: JSX.Element;
    name: string;
}