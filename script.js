
import { GoogleGenAI } from "@google/genai";

// --- SVG ICONS ---
const SvgIcons = {
    ManualTest: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 12c0 2.42-.943 4.636-2.527 6.284M16.5 9.75a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h.008v.008H12V7.5zM12 15h.008v.008H12V15z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0010.236 6.757" /></svg>`,
    AutomationTest: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
    ApiTest: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>`,
    Java: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[var(--accent-primary)]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.06,3.94L15.93,2.07L13.04,2.07L10.5,3.94L10.5,2.07L8.63,2.07L8.63,5.81L10.5,5.81L10.5,3.94L12.13,3.94L10.27,5.81L8.63,5.81L8.63,7.68L10.5,7.68L10.5,5.81L13.39,5.81L15.25,3.94L15.25,5.81L17.13,5.81L17.13,2.07L14.06,2.07V3.94M12.13,8.78L10.27,10.65L8.63,10.65L8.63,12.5L10.5,12.5L10.5,10.65L12.31,10.65L10.27,12.7L10.27,14.56L12.13,16.44L14.06,14.56L14.06,12.7L12,10.65L12.13,8.78M3,3V21H21V3H3M19.13,19.13H4.88V4.88H19.13V19.13Z" /></svg>`,
    Oop: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
    Bug: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 01-3-3m-3.75 3.75a3 3 0 003 3m-3.75-3.75h.008v.008H7.5v-.008zm0 0a3 3 0 013-3m-3 3a3 3 0 00-3 3m3-3a3 3 0 01-3-3" /></svg>`,
    Sdlc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    DatabaseTest: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
    TestCaseDesign: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    GraduationCap: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[var(--accent-primary)]"><path d="M12 14.25c-3.75 0-7.5-2.25-7.5-3.75v-3c0-1.5 3.75-3.75 7.5-3.75s7.5 2.25 7.5 3.75v3c0 1.5-3.75 3.75-7.5 3.75z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5v6.75a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-6.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v3.375c0 .621-.504 1.125-1.125 1.125h-2.25" /></svg>`,
    Workshop: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`,
    ShortTermGoal: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 18l-3.75-2.25m0 0a11.955 11.955 0 01-5.814 5.519L9 11.25" /></svg>`,
    MidTermGoal: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-18 0h9.75m-9.75 0H21m-18 0h9.75m-9.75 0H21m-18 0h9.75m-9.75 0H21" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    LongTermGoal: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--accent-primary)]"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5a2.25 2.25 0 012.25 2.25v.75M9 12.75A3.75 3.75 0 1116.5 12.75a3.75 3.75 0 01-7.5 0z" /></svg>`,
};

// --- PORTFOLIO DATA ---
const PORTFOLIO_DATA = {
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
        { icon: SvgIcons.ManualTest, name: 'Manual Testing' },
        { icon: SvgIcons.Bug, name: 'Bug Reporting' },
        { icon: SvgIcons.TestCaseDesign, name: 'Test Case Design' },
    ],
    skills: [
        { icon: SvgIcons.Java, name: 'Java', description: 'Strong foundation in Java programming, essential for understanding application logic and writing test scripts.' },
        { icon: SvgIcons.Oop, name: 'OOP Concepts', description: 'Solid understanding of Object-Oriented Programming principles, aiding in structural code analysis.' },
        { icon: SvgIcons.DatabaseTest, name: 'SQL (Basics)', description: 'Basic knowledge of SQL for database querying and validation to ensure data integrity.' },
        { icon: SvgIcons.TestCaseDesign, name: 'Test Case Design', description: 'Proficient in designing clear, concise, and effective test cases to ensure comprehensive coverage.' },
        { icon: SvgIcons.Bug, name: 'Bug Reporting', description: 'Skilled in identifying, documenting, and tracking bugs with detailed and reproducible reports.' },
        { icon: SvgIcons.ManualTest, name: 'Manual Testing', description: 'Experienced in various manual testing techniques, including exploratory and usability testing.' },
        { icon: SvgIcons.Sdlc, name: 'SDLC & STLC', description: 'Good understanding of Software Development Life Cycle and Software Testing Life Cycle methodologies.' },
        { icon: SvgIcons.AutomationTest, name: 'Future Interest: Automation', description: 'Eager to specialize in automation testing using modern tools like Selenium WebDriver and Cypress.' },
        { icon: SvgIcons.ApiTest, name: 'Future Interest: API Testing', description: 'Keen to develop skills in API testing with tools like Postman to validate backend services.' },
    ],
    projects: [
        { id: 'proj-1', image: 'https://picsum.photos/seed/project1/600/400', category: 'Functional Testing', title: 'E-commerce Platform Testing', description: 'Ensured the functionality and usability of an e-commerce platform through rigorous testing.' },
        { id: 'proj-2', image: 'https://picsum.photos/seed/project2/600/400', category: 'Functional Testing', title: 'Mobile App Testing', description: 'Conducted comprehensive testing of a mobile application for a seamless user experience.' },
        { id: 'proj-3', image: 'https://picsum.photos/seed/project3/600/400', category: 'API Testing', title: 'API Testing', description: 'Performed API testing to validate the integration and functionality of backend services.' },
        { id: 'proj-4', image: 'https://picsum.photos/seed/project4/600/400', category: 'Automation', title: 'Web Application Testing', description: 'Tested a web application for functionality, performance, and security using automated scripts.' },
    ],
    experience: {
        academic: [
            { icon: SvgIcons.GraduationCap, title: 'B.Sc. in Mathematics and Computer Science', institution: 'Fayoum University, Faculty of Science', date: 'Expected Graduation: 2027', description: 'Relevant coursework: Data Structures, Algorithms, Software Engineering. Continuously developing analytical and problem-solving skills.' }
        ],
        certifications: [],
        courses: [
            { icon: SvgIcons.Workshop, title: 'Digital Egypt Pioneers Initiative (DEPI)', institution: 'Software Testing Track', date: '2024 - Present', description: 'Gained hands-on experience in software testing methodologies and developed a strong foundation in Java and Object-Oriented Programming.' }
        ]
    },
    goals: [
        { icon: SvgIcons.ShortTermGoal, title: 'Short-Term Goals', description: "Actively seeking an internship or an entry-level QA position to apply my knowledge in Java and testing fundamentals. Aim to contribute to a dynamic team and learn from experienced professionals." },
        { icon: SvgIcons.MidTermGoal, title: 'Mid-Term Goals', description: "To specialize in Automation Testing, gaining deep expertise in tools like Selenium and Cypress. I aim to take on more responsibilities in designing and implementing robust automation frameworks." },
        { icon: SvgIcons.LongTermGoal, title: 'Long-Term Goals', description: "Evolve into a senior QA automation engineer or a test architect, driving the quality strategy for complex software products and mentoring the next generation of testers." }
    ]
};

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Goals', 'Contact'];

document.addEventListener('DOMContentLoaded', () => {

    // --- RENDER ALL DYNAMIC CONTENT ---
    renderHeader();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjectsAndFilters();
    renderExperience();
    renderGoals();
    renderContact();
    renderFooter();
    renderAiAssistant();
    
    // --- INITIALIZE ALL FUNCTIONALITY ---
    initTheme();
    initScrollSpy();
    initProjectFilters();
    initContactForm();
    initAiAssistant();

});

// --- RENDER FUNCTIONS ---

function renderHeader() {
    const { name, resumeUrl } = PORTFOLIO_DATA;
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" class="text-xl font-bold text-[var(--accent-primary)] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
                </svg>
                ${name}
            </a>
            <nav class="hidden md:flex items-center space-x-6">
                ${NAV_LINKS.map(link => `
                    <a href="#${link.toLowerCase()}" class="nav-link text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]" data-section="${link.toLowerCase()}">${link}</a>
                `).join('')}
            </nav>
            <div class="flex items-center space-x-4">
                <button id="theme-toggle" class="p-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-accent)]">
                    <span id="theme-icon-light">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </span>
                    <span id="theme-icon-dark" class="hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </span>
                </button>
                <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-block bg-[var(--accent-primary)] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors">Resume</a>
            </div>
        </div>
    `;
}

function renderHero() {
    const { name, title, bio, contact } = PORTFOLIO_DATA;
    const heroSection = document.getElementById('home');
    heroSection.innerHTML = `
        <div class="container mx-auto px-6 py-20">
            <img src="profile-photo.jpg" alt="${name}" class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-[var(--bg-secondary)] object-cover" />
            <h1 class="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-3">${name}</h1>
            <h2 class="text-xl md:text-2xl font-semibold text-[var(--accent-primary)] mb-6">${title}</h2>
            <p class="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] mb-8">${bio}</p>
            <div class="flex justify-center items-center space-x-6">
                <a href="${contact.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
                <a href="${contact.social.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" class="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                <a href="${contact.social.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.889 6.223l.232.362-1.078 3.931 4.032-1.057.347.214z"/></svg></a>
                <a href="${contact.social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" class="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
            </div>
        </div>
    `;
}

function renderAbout() {
    const { about, services } = PORTFOLIO_DATA;
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `
        <h2 class="text-4xl font-bold mb-4">About Me</h2>
        <p class="text-lg text-[var(--text-secondary)] mb-12">${about.me}</p>
        <h3 class="text-3xl font-bold mb-4">My Testing Philosophy</h3>
        <p class="text-lg text-[var(--text-secondary)] mb-16">${about.philosophy}</p>
        <h3 class="text-3xl font-bold mb-8">Services Offered</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${services.map(service => `
                <div class="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--border-color)] flex flex-col items-center text-center">
                    <div class="mb-4">${service.icon}</div>
                    <h3 class="text-lg font-semibold text-[var(--text-primary)]">${service.name}</h3>
                </div>
            `).join('')}
        </div>
    `;
}

function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = PORTFOLIO_DATA.skills.map(skill => `
        <div class="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[var(--border-color)]">
            <div class="flex items-start space-x-4">
                <div>${skill.icon}</div>
                <div>
                    <h3 class="text-xl font-semibold text-[var(--text-primary)] mb-2">${skill.name}</h3>
                    <p class="text-[var(--text-secondary)]">${skill.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjectsAndFilters() {
    const filtersContainer = document.getElementById('project-filters');
    const projectsGrid = document.getElementById('projects-grid');
    const categories = ['All', 'Functional Testing', 'Performance Testing', 'Automation', 'API Testing'];
    
    filtersContainer.innerHTML = categories.map(filter => `
        <button class="project-filter-btn px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === 'All' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--border-color)]'}" data-filter="${filter}">
            ${filter}
        </button>
    `).join('');

    projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="project-card group bg-[var(--bg-secondary)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--border-color)]" data-category="${project.category}">
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-[var(--text-primary)] mb-2">${project.title}</h3>
                <p class="text-[var(--text-secondary)] flex-grow mb-4">${project.description}</p>
                <a href="#" class="font-semibold text-[var(--accent-primary)] hover:underline self-start">
                    View Case Study &rarr;
                </a>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const { experience } = PORTFOLIO_DATA;
    const experienceContent = document.getElementById('experience-content');
    
    const createSection = (title, items) => {
        if (!items || items.length === 0) return '';
        return `
            <div class="mb-12">
                <h3 class="text-3xl font-bold mb-8 flex items-center">
                    ${items[0]?.icon || ''}
                    <span class="ml-4">${title}</span>
                </h3>
                <div class="relative border-l border-[var(--border-color)] ml-6 pl-10 py-4">
                    ${items.map(item => `
                        <div class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-[var(--accent-primary)] rounded-full -left-3 ring-8 ring-[var(--bg-primary)]">
                                <svg class="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/><path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h4 class="flex items-center mb-1 text-lg font-semibold text-[var(--text-primary)]">${item.title}</h4>
                            <time class="block mb-2 text-sm font-normal leading-none text-[var(--text-secondary)]">${item.institution} | ${item.date}</time>
                            <p class="mb-4 text-base font-normal text-[var(--text-secondary)]">${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };
    
    experienceContent.innerHTML = `
        ${createSection('Academic Qualifications', experience.academic)}
        ${createSection('Certifications', experience.certifications)}
        ${createSection('Courses & Workshops', experience.courses)}
    `;
}

function renderGoals() {
    const goalsGrid = document.getElementById('goals-grid');
    goalsGrid.innerHTML = PORTFOLIO_DATA.goals.map(goal => `
        <div class="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg border border-[var(--border-color)] h-full flex flex-col">
            <div class="mb-4">${goal.icon}</div>
            <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4">${goal.title}</h3>
            <p class="text-[var(--text-secondary)] flex-grow">${goal.description}</p>
        </div>
    `).join('');
}

function renderContact() {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `
        <div class="container mx-auto px-6 py-20">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold">Contact Me</h2>
                <p class="text-lg text-[var(--text-secondary)] mt-2 max-w-xl mx-auto">
                    Have a question or want to work together? Drop me a line.
                </p>
            </div>
            <div id="contact-card" class="max-w-2xl mx-auto bg-[var(--bg-secondary)] p-8 rounded-lg shadow-md border border-[var(--border-color)]">
                <!-- Form or Thank you message will be injected here -->
            </div>
        </div>
    `;
}

function renderFooter() {
    const footer = document.getElementById('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <div class="container mx-auto px-6 py-6 text-center text-[var(--text-secondary)]">
            <p>&copy; ${currentYear} ${PORTFOLIO_DATA.name}. All rights reserved.</p>
        </div>
    `;
}

function renderAiAssistant() {
    const container = document.getElementById('ai-assistant-container');
    container.innerHTML = `
        <button id="ai-assistant-toggle" class="fixed bottom-6 right-6 bg-[var(--accent-primary)] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--accent-primary-hover)] transition-transform transform hover:scale-110 z-50" aria-label="Open AI Assistant">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        </button>
        <div id="ai-assistant-window" class="hidden fixed bottom-24 right-6 w-96 h-[32rem] bg-[var(--bg-secondary)] rounded-lg shadow-2xl flex-col z-50 border border-[var(--border-color)]">
            <header class="bg-[var(--accent-primary)] text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 class="font-bold text-lg">Portfolio AI Assistant</h3>
                <button id="ai-assistant-close" class="text-2xl leading-none">&times;</button>
            </header>
            <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto bg-[var(--bg-primary)]">
                <!-- Messages will be injected here -->
            </div>
            <div class="p-4 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-b-lg">
                <div class="flex">
                    <input type="text" id="ai-chat-input" placeholder="Ask about skills, projects..." class="flex-1 px-4 py-2 rounded-l-md bg-[var(--bg-accent)] border border-[var(--border-color)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]" />
                    <button id="ai-chat-send" class="bg-[var(--accent-primary)] text-white px-4 py-2 rounded-r-md hover:bg-[var(--accent-primary-hover)] disabled:bg-gray-400">Send</button>
                </div>
            </div>
        </div>
    `;
}

// --- INITIALIZATION FUNCTIONS ---

function initTheme() {
    const toggleButton = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    };
    
    let currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    toggleButton.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });
}

function initScrollSpy() {
    const sections = NAV_LINKS.map(link => document.getElementById(link.toLowerCase()));
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 150;
        let currentSectionId = '';

        sections.forEach(section => {
            if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                currentSectionId = section.id;
            }
        });
        
        navLinks.forEach(link => {
            if (link.dataset.section === currentSectionId) {
                link.classList.add('nav-link-active', 'text-[var(--accent-primary)]');
                link.classList.remove('text-[var(--text-secondary)]');
            } else {
                link.classList.remove('nav-link-active', 'text-[var(--accent-primary)]');
                link.classList.add('text-[var(--text-secondary)]');
            }
        });
    });
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const noProjectsMessage = document.getElementById('no-projects-message');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update button styles
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-[var(--accent-primary)]', 'text-white');
                btn.classList.add('bg-[var(--bg-secondary)]', 'text-[var(--text-secondary)]', 'hover:bg-[var(--border-color)]');
            });
            button.classList.add('bg-[var(--accent-primary)]', 'text-white');
            button.classList.remove('bg-[var(--bg-secondary)]', 'text-[var(--text-secondary)]', 'hover:bg-[var(--border-color)]');

            let visibleProjects = 0;
            projectCards.forEach(card => {
                if (filter === 'All' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    visibleProjects++;
                } else {
                    card.classList.add('hidden');
                }
            });
            
            noProjectsMessage.classList.toggle('hidden', visibleProjects > 0);
        });
    });
}

function initContactForm() {
    const card = document.getElementById('contact-card');
    let isSubmitted = false;
    let isCopied = false;

    const renderForm = () => {
        card.innerHTML = `
            <form id="contact-form" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-[var(--text-primary)] mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your name" class="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-[var(--text-primary)] mb-2">Your Email</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" class="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]" />
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-[var(--text-primary)] mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required placeholder="What is the subject?" class="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]" />
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" required placeholder="Enter your message here" class="block w-full px-4 py-3 rounded-lg bg-[var(--bg-accent)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"></textarea>
                </div>
                <div class="text-center pt-4">
                    <button type="submit" class="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors w-full sm:w-auto">Send Message</button>
                </div>
            </form>
        `;

        card.querySelector('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(`Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`);
            
            window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
            
            isSubmitted = true;
            renderThankYou();
        });
    };

    const renderThankYou = () => {
        card.innerHTML = `
            <div class="text-center">
                <h3 class="text-2xl font-bold text-[var(--accent-primary)] mb-4">Thank you!</h3>
                <p class="text-[var(--text-secondary)] mb-6">
                    Your default email client should have opened with the message details pre-filled. Please review and send it from there. If it didn't open, you can manually send an email to:
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 bg-[var(--bg-accent)] p-4 rounded-lg">
                    <a href="mailto:${PORTFOLIO_DATA.contact.email}" class="font-semibold text-[var(--text-primary)] break-all">${PORTFOLIO_DATA.contact.email}</a>
                    <button id="copy-email-btn" class="text-sm bg-[var(--accent-primary)] text-white px-3 py-1 rounded-md hover:bg-[var(--accent-primary-hover)] transition-colors w-20">
                        ${isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <button id="reset-form-btn" class="mt-8 text-sm font-semibold text-[var(--accent-primary)] hover:underline">
                    Send another message
                </button>
            </div>
        `;

        card.querySelector('#reset-form-btn').addEventListener('click', () => {
            isSubmitted = false;
            isCopied = false;
            renderForm();
        });

        card.querySelector('#copy-email-btn').addEventListener('click', async (e) => {
            const button = e.target;
            try {
                await navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
                isCopied = true;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    isCopied = false;
                    if(button) button.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy email: ', err);
                alert('Failed to copy email address.');
            }
        });
    };
    
    renderForm();
}


function initAiAssistant() {
    const toggleButton = document.getElementById('ai-assistant-toggle');
    const closeButton = document.getElementById('ai-assistant-close');
    const windowEl = document.getElementById('ai-assistant-window');
    const messagesContainer = document.getElementById('ai-chat-messages');
    const inputEl = document.getElementById('ai-chat-input');
    const sendButton = document.getElementById('ai-chat-send');
    
    let isOpen = false;
    let isLoading = false;
    let messages = [];

    const toggleWindow = () => {
        isOpen = !isOpen;
        windowEl.classList.toggle('hidden');
        windowEl.classList.toggle('flex');
        if (isOpen && messages.length === 0) {
            addMessage('ai', "Hello! I'm Ammar's AI assistant. Ask me anything about his skills, projects, or experience.");
        }
    };

    toggleButton.addEventListener('click', toggleWindow);
    closeButton.addEventListener('click', toggleWindow);

    const addMessage = (sender, text) => {
        messages.push({ sender, text });
        const messageEl = document.createElement('div');
        messageEl.className = `flex mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        messageEl.innerHTML = `<div class="max-w-[80%] p-3 rounded-lg ${sender === 'user' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-accent)] text-[var(--text-primary)]'}">${text}</div>`;
        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const setLoading = (state) => {
        isLoading = state;
        inputEl.disabled = state;
        sendButton.disabled = state;
        
        const loadingEl = messagesContainer.querySelector('.loading-indicator');
        if (state && !loadingEl) {
            const el = document.createElement('div');
            el.className = 'loading-indicator flex justify-start mb-4';
            el.innerHTML = `<div class="max-w-[80%] p-3 rounded-lg bg-[var(--bg-accent)] text-[var(--text-primary)]"><div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-75"></div><div class="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-150"></div><div class="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-pulse delay-300"></div></div></div>`;
            messagesContainer.appendChild(el);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else if (!state && loadingEl) {
            loadingEl.remove();
        }
    };

    const handleSend = async () => {
        const text = inputEl.value.trim();
        if (text === '' || isLoading) return;

        addMessage('user', text);
        inputEl.value = '';
        setLoading(true);

        const chatHistory = messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        try {
            const aiText = await getAiResponse(chatHistory, text);
            addMessage('ai', aiText);
        } catch (error) {
            addMessage('ai', "Sorry, I'm having trouble connecting right now.");
        } finally {
            setLoading(false);
        }
    };

    sendButton.addEventListener('click', handleSend);
    inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
}

// --- Gemini API Service ---
const getAiResponse = async (history, newMessage) => {
    // This function will fail gracefully in environments where process is not defined.
    // On a real server or with a build tool, process.env.API_KEY would be set.
    // For client-side hosting like GitHub Pages, the key cannot be exposed securely.
    const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

    if (!apiKey) {
        return "The AI assistant is currently unavailable. The API key is not configured for this hosting environment.";
    }

    try {
        const ai = new GoogleGenAI({ apiKey });
        const portfolioDataString = JSON.stringify(PORTFOLIO_DATA, null, 2);

        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a helpful AI assistant for Ammar Emad's portfolio. Your goal is to answer questions about his skills, experience, and projects based ONLY on the following JSON data. Do not invent any information or discuss topics outside of this data. If the answer is not in the data, politely state that you don't have that information. Keep your answers concise and professional.
                
                Portfolio Data:
                ${portfolioDataString}`
            },
            history: history,
        });

        const response = await chat.sendMessage({ message: newMessage });
        return response.text;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I encountered an error while processing your request. Please try again later.";
    }
};
