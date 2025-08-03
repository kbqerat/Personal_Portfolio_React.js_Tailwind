import "../../styles/skills.css";
import {FaJava, FaPython, FaReact, FaSass, FaHtml5, FaGithub, FaDocker, FaLinux} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiSpringboot, SiDjango, SiPhp, SiMysql, SiJira } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {DiMongodb, DiScrum} from "react-icons/di";
import {MdDesignServices} from "react-icons/md";

export default function Skills() {
    const skills = [
        {
            field: "Programming Languages",
            skills: [
                {
                    name: "Java",
                    icon: <FaJava className="text-amber-700 icon" />
                },
                {
                    name: "Python",
                    icon: <FaPython className="icon text-cyan-950" />
                },
                {
                    name: "JavaScript",
                    icon: <IoLogoJavascript className="icon text-yellow-500"/>
                }
            ]
        },
        {
            field: "Frontend Development",
            skills: [
                {
                    name: "React.js",
                    icon: <FaReact className="icon text-blue-500" />
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="icon text-blue-600"/>
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="icon text-blue-400" />
                },
                {
                    name: "SCSS",
                    icon: <FaSass className="icon text-pink-600"/>
                },
                {
                    name: "HTML5",
                    icon: <FaHtml5  className="icon text-orange-500"/>
                }
            ]
        },
        {
            field: "Backend Development",
            skills: [
                {
                    name: "Spring Boot",
                    icon: <SiSpringboot className="icon text-green-500" />
                },
                {
                    name: "Django",
                    icon: <SiDjango className="icon text-green-900" />
                },
                {
                    name: "PHP",
                    icon: <SiPhp className="icon text-cyan-800"/>
                },
                {
                    name: "Node.js / Next.js (Loading...)",
                    icon: <RiNextjsFill className="icon text-black"/>
                }
            ]
        },
        {
            field: "Databases",
            skills: [
                {
                    name: "MySQL",
                    icon: <SiMysql className="icon text-cyan-700" />
                },
                {
                    name: "MongoDB (Loading...)",
                    icon: <DiMongodb  className="icon text-green-700" />
                }
            ]
        },
        {
            field: "DevOps & Tools",
            skills: [
                {
                    name: "Docker",
                    icon: <FaDocker className="icon text-blue-400" />
                },
                {
                    name: "Git / GitHub",
                    icon: <FaGithub className="icon text-black" />
                },
                {
                    name: "JIRA",
                    icon: <SiJira className="icon text-blue-700" />
                }
            ]
        },
        {
            field: "Other Skills",
            skills: [
                {
                    name: "Agile / Scrum",
                    icon: <DiScrum className="icon text-blue-700" />
                },
                {
                    name: "UI/UX Design basics",
                    icon: <MdDesignServices className="icon text-red-400" />
                },
                {
                    name: "Linux command line",
                    icon: <FaLinux className="icon text-black" />
                }
            ]
        }
    ];
    return(
        <div className="skills selection:bg-white/20">
            <h2 className="heading-text">Tech Stack</h2>
            <p className="description-text">A collection of the tools, technologies, and languages I work with to build modern web applications.</p>
            <div className="skills-container">
                {
                    skills.map((skill, index) => (
                        <ul className="skills-items">
                            <li className="skill-item md:ps-5">
                                <span className="skill-field">{skill.field}</span>
                                <ul className="skill-name-container">
                                    {skill.skills.map((skill) => (
                                        <li className="skill-name">{skill.icon} {skill.name}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}