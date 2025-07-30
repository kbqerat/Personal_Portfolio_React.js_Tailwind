import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/resume.css";

const experience = [
    {
        title: "Full-Stack Developer (Internship)",
        company: "The University Hospital of Oujda",
        period: "Jan 2023 – Dec 2023",
        desc: "Tach Stack: Native PHP, Native JavaScript, Plain CSS, HTML5",
    },
    {
        title: "Full-Stack Developer (Internship)",
        company: "Colaimo: Dairy Cooperative of Eastern Morocco",
        period: "Dec 2022 – Dec 2022",
        desc: "Tech Stack: C#, ADO.NET, SQL Server",
    },
];

const education = [
    {
        degree: "4th Year – Software Engineering",
        school: "SUPMTI – Oujda, Morocco",
        period: "2023 – Present",
    },
    {
        degree: "Software Development",
        school: "Specialized Institute of Applied Technology (ISTA) – Oujda, Morocco",
        period: "2019 – 2021",
    },
    {
        degree: "High School Diploma – Science major",
        school: "",
        period: "2018 – 2019",
    },
];

const skills = [
    "Spring Boot & Django",
    "JavaScript / TypeScript",
    "React.js / Tailwind",
    "MySQL",
    "Docker / Git / Jira",
];

export default function Resume() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-white/20 background-gradient">
            {/* Header */}
            <header className="max-w-5xl mx-auto px-6 pt-12 text-center">
                <motion.img
                    src="/resume-profile.jpg"
                    alt="Profile"
                    className="w-25 h-25 mx-auto rounded-full border-2 border-white/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                />
                <h1 className="text-3xl font-bold mt-4">Tarek Bekkaoui</h1>
                <p className="opacity-70">Full-Stack Developer · Software Engineer</p>

                {/* Socials */}
                <div className="flex justify-center gap-4 mt-3 text-xl text-white/70">
                    <a href="https://github.com/kbqerat" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/tarek-bekkaoui/" target="_blank"><FaLinkedin /></a>
                </div>

                {/* Download button */}
                <div className="mt-6">
                    <a
                        href="/resume.pdf"
                        download
                        className="pointer-events-none inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-2.5 rounded-full font-medium hover:scale-105 transition"
                    >
                        <FaDownload /> Download CV (PDF)
                    </a>
                </div>
            </header>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 grid lg:grid-cols-3 gap-10 mt-12 pb-16">
                {/* Left column */}
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Skills</h2>
                        <ul className="space-y-2 text-sm opacity-80">
                            {skills.map((skill) => (
                                <li key={skill} className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Education</h2>
                        <ul className="space-y-3 text-sm opacity-80">
                            {education.map((edu) => (
                                <li key={edu.degree} className="border-l border-white/10 pl-3">
                                    <p className="font-medium">{edu.degree}</p>
                                    <p className="text-xs">{edu.school}</p>
                                    <p className="text-xs opacity-60">{edu.period}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Experience</h2>
                        <ul className="space-y-4">
                            {experience.map((exp) => (
                                <li key={exp.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium">{exp.title}</h3>
                                        <span className="text-xs opacity-60">{exp.period}</span>
                                    </div>
                                    <p className="text-sm opacity-80">{exp.company}</p>
                                    <p className="text-sm opacity-70 mt-1">{exp.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
