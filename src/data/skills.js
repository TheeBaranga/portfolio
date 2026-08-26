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
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Django", icon: SiDjango, color: "#44B78B" },
            { name: "Django REST Framework", icon: SiDjango, color: "#A30000" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "SQL", icon: SiMysql, color: "#4479A1" },
        ],
    },

    {
        title: "Frontend & Mobile",
        skills: [
            { name: "React", icon: FaCode, color: "#61DAFB" },
            { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "VS Code", icon: FaCode, color: "#007ACC" },
        ],
    },

    {
        title: "Also Worked With",
        skills: [
            { name: "Java", icon: FaJava, color: "#ED8B00" },
        ],
    },
];