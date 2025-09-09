
import React from 'react';
import type { Skill, Project, ExperienceItem, Goal, Service } from './types';
import { ProjectCategory } from './types';

// SVG Icons
const ManualTestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 12c0 2.42-.943 4.636-2.527 6.284M16.5 9.75a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h.008v.008H12V7.5zM12 15h.008v.008H12V15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0010.236 6.757" />
    </svg>
);

const AutomationTestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const ApiTestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

const JavaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--accent-primary)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.06,3.94L15.93,2.07L13.04,2.07L10.5,3.94L10.5,2.07L8.63,2.07L8.63,5.81L10.5,5.81L10.5,3.94L12.13,3.94L10.27,5.81L8.63,5.81L8.63,7.68L10.5,7.68L10.5,5.81L13.39,5.81L15.25,3.94L15.25,5.81L17.13,5.81L17.13,2.07L14.06,2.07V3.94M12.13,8.78L10.27,10.65L8.63,10.65L8.63,12.5L10.5,12.5L10.5,10.65L12.31,10.65L10.27,12.7L10.27,14.56L12.13,16.44L14.06,14.56L14.06,12.7L12,10.65L12.13,8.78M3,3V21H21V3H3M19.13,19.13H4.88V4.88H19.13V19.13Z" />
    </svg>
);

const OopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);


const BugIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 01-3-3m-3.75 3.75a3 3 0 003 3m-3.75-3.75h.008v.008H7.5v-.008zm0 0a3 3 0 013-3m-3 3a3 3 0 00-3 3m3-3a3 3 0 01-3-3" />
    </svg>
);

const SdlcIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DatabaseTestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
);

const TestCaseDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent-primary)]">
        <path d="M12 14.25c-3.75 0-7.5-2.25-7.5-3.75v-3c0-1.5 3.75-3.75 7.5-3.75s7.5 2.25 7.5 3.75v3c0 1.5-3.75 3.75-7.5 3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5v6.75a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v3.375c0 .621-.504 1.125-1.125 1.125h-2.25" />
    </svg>
);

const WorkshopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent-primary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ShortTermGoalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 18l-3.75-2.25m0 0a11.955 11.955 0 01-5.814 5.519L9 11.25" />
    </svg>
);

const MidTermGoalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-18 0h9.75m-9.75 0H21m-18 0h9.75m-9.75 0H21m-18 0h9.75m-9.75 0H21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LongTermGoalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--accent-primary)]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5a2.25 2.25 0 012.25 2.25v.75M9 12.75A3.75 3.75 0 1116.5 12.75a3.75 3.75 0 01-7.5 0z" />
    </svg>
);


// Portfolio Data
export const PORTFOLIO_DATA = {
    name: "Ammar Emad",
    title: "Junior Software Tester",
    bio: "Hello! I'm Ammar, a third-year Mathematics and Computer Science student with a deep passion for software development and the art of crafting bug-free, high-quality products. I am actively seeking an internship or an entry-level QA position where I can apply my knowledge, contribute to a dynamic team, and continue learning from experienced professionals.",
    resumeUrl: "https://drive.google.com/file/d/18IedDQJIqdFDDdYdSXELDXtfJMnf8mjd/view?usp=drive_link",
    contact: {
        email: "eammar240@gmail.com",
        social: {
            linkedin: "https://www.linkedin.com/in/ammar-emad-37027b21b",
            github: "https://github.com/Ammar240",
            whatsapp: "https://api.whatsapp.com/send/?phone=201099985569",
            facebook: "https://www.facebook.com/ammar.emad.338"
        }
    },
    about: {
        me: "I'm a third-year Mathematics and Computer Science student with a deep passion for software development and the art of crafting bug-free, high-quality products. Currently, I am honing my skills through the prestigious Digital Egypt Pioneers Initiative (DEPI), specializing in the Software Testing track. This journey has equipped me with a strong foundation in Java and Object-Oriented Programming (OOP), giving me a deeper understanding of the architecture behind the applications I test.",
        philosophy: "I believe that quality isn't just a final check; it's the foundation upon which every successful tech product is built. My approach is rooted in a deep understanding of software architecture, allowing for a more analytical and thorough testing process to discover and document bugs effectively."
    },
    services: [
        { icon: <ManualTestIcon />, name: 'Manual Testing' },
        { icon: <BugIcon />, name: 'Bug Reporting' },
        { icon: <TestCaseDesignIcon />, name: 'Test Case Design' },
    ] as Service[],
    skills: [
        {
            icon: <JavaIcon />,
            name: 'Java',
            description: 'Strong foundation in Java programming, essential for understanding application logic and writing test scripts.'
        },
        {
            icon: <OopIcon />,
            name: 'OOP Concepts',
            description: 'Solid understanding of Object-Oriented Programming principles, aiding in structural code analysis.'
        },
        {
            icon: <DatabaseTestIcon />,
            name: 'SQL (Basics)',
            description: 'Basic knowledge of SQL for database querying and validation to ensure data integrity.'
        },
        {
            icon: <TestCaseDesignIcon />,
            name: 'Test Case Design',
            description: 'Proficient in designing clear, concise, and effective test cases to ensure comprehensive coverage.'
        },
        {
            icon: <BugIcon />,
            name: 'Bug Reporting',
            description: 'Skilled in identifying, documenting, and tracking bugs with detailed and reproducible reports.'
        },
        {
            icon: <ManualTestIcon />,
            name: 'Manual Testing',
            description: 'Experienced in various manual testing techniques, including exploratory and usability testing.'
        },
        {
            icon: <SdlcIcon />,
            name: 'SDLC & STLC',
            description: 'Good understanding of Software Development Life Cycle and Software Testing Life Cycle methodologies.'
        },
        {
            icon: <AutomationTestIcon />,
            name: 'Future Interest: Automation',
            description: 'Eager to specialize in automation testing using modern tools like Selenium WebDriver and Cypress.'
        },
        {
            icon: <ApiTestIcon />,
            name: 'Future Interest: API Testing',
            description: 'Keen to develop skills in API testing with tools like Postman to validate backend services.'
        },
    ] as Skill[],
    projects: [
        {
            id: 'proj-1',
            image: 'https://picsum.photos/seed/project1/600/400',
            category: ProjectCategory.Functional,
            title: 'E-commerce Platform Testing',
            description: 'Ensured the functionality and usability of an e-commerce platform through rigorous testing.'
        },
        {
            id: 'proj-2',
            image: 'https://picsum.photos/seed/project2/600/400',
            category: ProjectCategory.Functional,
            title: 'Mobile App Testing',
            description: 'Conducted comprehensive testing of a mobile application for a seamless user experience.'
        },
        {
            id: 'proj-3',
            image: 'https://picsum.photos/seed/project3/600/400',
            category: ProjectCategory.API,
            title: 'API Testing',
            description: 'Performed API testing to validate the integration and functionality of backend services.'
        },
        {
            id: 'proj-4',
            image: 'https://picsum.photos/seed/project4/600/400',
            category: ProjectCategory.Automation,
            title: 'Web Application Testing',
            description: 'Tested a web application for functionality, performance, and security using automated scripts.'
        },
    ] as Project[],
    experience: {
        academic: [
            {
                icon: <GraduationCapIcon />,
                title: 'B.Sc. in Mathematics and Computer Science',
                institution: 'Fayoum University, Faculty of Science',
                date: 'Expected Graduation: 2027',
                description: 'Relevant coursework: Data Structures, Algorithms, Software Engineering. Continuously developing analytical and problem-solving skills.'
            }
        ],
        certifications: [] as ExperienceItem[],
        courses: [
            {
                icon: <WorkshopIcon />,
                title: 'Digital Egypt Pioneers Initiative (DEPI)',
                institution: 'Software Testing Track',
                date: '2024 - Present',
                description: 'Gained hands-on experience in software testing methodologies and developed a strong foundation in Java and Object-Oriented Programming.'
            }
        ]
    } as { academic: ExperienceItem[], certifications: ExperienceItem[], courses: ExperienceItem[] },
    goals: [
        {
            icon: <ShortTermGoalIcon />,
            title: 'Short-Term Goals',
            description: "Actively seeking an internship or an entry-level QA position to apply my knowledge in Java and testing fundamentals. Aim to contribute to a dynamic team and learn from experienced professionals."
        },
        {
            icon: <MidTermGoalIcon />,
            title: 'Mid-Term Goals',
            description: "To specialize in Automation Testing, gaining deep expertise in tools like Selenium and Cypress. I aim to take on more responsibilities in designing and implementing robust automation frameworks."
        },
        {
            icon: <LongTermGoalIcon />,
            title: 'Long-Term Goals',
            description: "Evolve into a senior QA automation engineer or a test architect, driving the quality strategy for complex software products and mentoring the next generation of testers."
        }
    ] as Goal[]
};