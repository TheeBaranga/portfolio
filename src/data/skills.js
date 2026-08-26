import {
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaGitAlt,
    FaGithub,
    FaCode,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiPython,
    SiMysql,
    SiDjango,
    SiPostman,
    SiExpo,
    SiTypescript,
} from "react-icons/si";

export const skillGroups = [
    {
        title: "Core Stack",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "Django", icon: SiDjango },
            { name: "Django REST Framework", icon: SiDjango },
            { name: "JavaScript", icon: SiJavascript },
            { name: "SQL", icon: SiMysql },
        ],
    },

    {
        title: "Frontend & Mobile",
        skills: [
            { name: "React", icon: FaCode },
            { name: "Expo", icon: SiExpo },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Postman", icon: SiPostman },
            { name: "VS Code", icon: FaCode },
        ],
    },

    {
        title: "Also Worked With",
        skills: [
            { name: "Java", icon: FaJava },
        ],
    },
];