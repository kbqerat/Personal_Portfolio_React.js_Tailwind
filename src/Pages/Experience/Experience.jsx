import React, {useState} from "react";
import "../../styles/global.css";
import "../../styles/experience.css";
import { VscChevronDown } from "react-icons/vsc";

export default function Experience() {
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Centre Hospitalier Universitaire Mohammed VI",
            date: "January 2023 - May 2023",
            description: (
                <div>
                    <p>
                        Designed and delivered <strong>two production-grade web applications</strong> using
                        <strong> HTML, CSS, JavaScript, and PHP</strong> (with a MySQL backend).
                    </p>

                    <h4 style={{ marginTop: "0.75rem" }}>1) Medication Stock Management System (Hospital)</h4>
                    <ul style={{ marginLeft: "1.5rem", listStyle: "disc" }}>
                        <li>
                            Implemented full <strong>CRUD workflows</strong> for medications.
                        </li>
                        <li>
                            Built <strong>role-based access control</strong> (admin).
                        </li>
                        <li>
                            Developed <strong>search and filtering</strong> by drug name and expiry date.
                        </li>
                        <li>
                            Ensured <strong>data integrity</strong> with server-side validation, prepared statements/PDO, and meaningful
                            error handling to prevent inconsistent records.
                        </li>
                        <li>
                            Built a <strong>responsive UI</strong> for desktop and tablet use in hospital environments.
                        </li>
                    </ul>

                    <h4 style={{ marginTop: "0.75rem" }}>2) Medical Questionnaire Application (Patient Data Collection)</h4>
                    <ul style={{ marginLeft: "1.5rem", listStyle: "disc" }}>
                        <li>
                            Implemented <strong>client‑side and server‑side validation</strong> to minimize input errors and ensure high‑quality data.
                        </li>
                        <li>
                            Delivered a <strong>clean, accessible UI</strong> (keyboard navigation, form hints, clear validation states) to
                            improve completion speed and reduce abandonment.
                        </li>
                    </ul>

                    <p style={{marginTop: "1.5rem"}}>
                        <strong>Tech highlights:</strong> PHP (PDO), MySQL relational schema design and reusable UI components.
                    </p>
                </div>
            ),
            tech: ["PHP", "JavaScript", "CSS", "HTML5"],
        },
        {
            role: "Software Development Intern",
            company: "Coopérative laitière Maroc Oriental",
            date: "December 2022 - December 2022",
            description: (
                <div>
                    <p>
                        Developed a <strong>desktop application in C#</strong> dedicated to the efficient management of interns within the organization.
                        The solution was designed to streamline administrative processes and centralize all intern-related data.
                    </p>
                    <ul style={{ marginLeft: "1.5rem", marginTop: "0.75rem" ,listStyleType: "disc" }}>
                        <li>
                            Built an <strong>intuitive user interface</strong> allowing administrators to easily add, update, and delete intern records
                            with minimal training.
                        </li>
                        <li>
                            Implemented <strong>data validation</strong> and user-friendly error handling to reduce mistakes during data entry.
                        </li>
                        <li>
                            Designed a <strong>robust database structure</strong> using SQL Server, ensuring secure storage, data integrity, and
                            optimized query performance.
                        </li>
                        <li>
                            Integrated features for <strong>search and filtering</strong> of records, enabling quick access to relevant information.
                        </li>
                    </ul>
                    <p style={{marginTop: "1rem"}}>
                        This project significantly improved the organization's ability to track and manage intern data, reducing administrative workload and
                        improving data accuracy.
                    </p>
                </div>
            ),
            tech: ["C#", "ADO.NET", "SQL Server"],
        },
    ];

    const [openDescriptions, setOpenDescriptions] = useState([]);
    const toggleDescription = (index) => {
        setOpenDescriptions((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="experience selection:bg-white/20">
            <h2 className="heading-text">Industry Experience</h2>
            <p className="description-text">Real-world projects and internships demonstrating practical skills in software development</p>
            <div className="timeline-container">
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot">
                                <div className="timeline-content md:min-w-[800px]">
                                    <span className="timeline-date">{exp.date}</span>
                                    <div className="experience-title flex items-center gap-1 select-none">
                                        <VscChevronDown className={`cursor-pointer text-5xl md:text-2xl transition-transform duration-200 ${openDescriptions.includes(index) ? "rotate-180" : ""}`} onClick={() => toggleDescription(index)} />
                                        <h3>{exp.role} @ {exp.company}</h3>
                                    </div>
                                    {
                                        openDescriptions.includes(index) && (
                                            <div className="experience-description">
                                                <p>{exp.description}</p>
                                            </div>
                                        )
                                    }
                                    <div className="tech-stack">
                                        {
                                            exp.tech.map((t, i) => (
                                                <span className="tech-badge" key={i}>{t}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}