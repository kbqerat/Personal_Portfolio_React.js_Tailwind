import {Link} from "react-router-dom";
import {useState} from "react";
import {VscChevronDown} from "react-icons/vsc";
import { FaJs, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiSocialblade } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import "../styles/SidebarExpander.css";

export default function SidebarSecondary() {
    const [openSections, setOpenSections] = useState({
        about: true,
        projects: true,
        contact: true,
        playground: false,
        blogs: false
    });
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }
    return (
        <div className="sideBarSecondary hidden md:flex flex-col px-2 py-1 text-sm bg-[#252526] text-[#cccccc] shadow-sm max-w-[200px]">
            <div className="header px-5 mb-2 mt-2">
                <p className="uppercase">Explorer</p>
            </div>
            <div className="body">
                <ul className="space-y-1">
                    <li>
                        <div className="linksExpander" onClick={() => toggleSection("about")}>
                            <VscChevronDown className={`transition-transform duration-200 ${
                                openSections.about ? "rotate-100" : ""
                            }`} />
                            <span>About</span>
                        </div>
                        {
                            openSections.about && (
                                <ul className="linksContainer">
                                    <li>
                                        <FaJs className="text-amber-300" />
                                        <Link to="/experience">Experience.js</Link></li>
                                    <li>
                                        <SiSpringboot className="text-green-300" />
                                        <Link to="/skills">Skills.java</Link>
                                    </li>
                                    <li>
                                        <FaReact className="text-blue-400"/>
                                        <Link to="/resume">Resume.jsx</Link>
                                    </li>
                                    <li>
                                        <FaCss3Alt className="text-blue-400"/>
                                        <Link to="/hobbies">Hobbies.css</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </li>

                    <li>
                        <div className="linksExpander" onClick={() => toggleSection("projects")}>
                            <VscChevronDown className={`transition-transform duration-200 ${
                                openSections.projects ? "rotate-100" : ""
                            }`} />
                            <span>Projects</span>
                        </div>
                        {
                            openSections.projects && (
                                <ul className="linksContainer">
                                    <li>Working on it...</li>
                                </ul>
                            )
                        }
                    </li>

                    <li>
                        <div className="linksExpander" onClick={() => toggleSection("contact")}>
                            <VscChevronDown className={`transition-transform duration-200 ${
                                openSections.contact ? "rotate-100" : ""
                            }`} />
                            <span>Contact</span>
                        </div>
                        {
                            openSections.contact && (
                                <ul className="linksContainer">
                                    <li>
                                        <GrContact className={`text-white`} />
                                        <Link to="/contact">Message Me!</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </li>

                    <li>
                        <div className="linksExpander" onClick={() => toggleSection("playground")}>
                            <VscChevronDown className={`transition-transform duration-200 ${
                                openSections.playground ? "rotate-100" : ""
                            }`} />
                            <span>Playground</span>
                        </div>
                        {
                            openSections.playground && (
                                <ul className="linksContainer">
                                    <li>Working on it...</li>
                                </ul>
                            )
                        }
                    </li>

                    <li>
                        <div className="linksExpander" onClick={() => toggleSection("blogs")}>
                            <VscChevronDown className={`transition-transform duration-200 ${
                                openSections.blogs ? "rotate-100" : ""
                            }`} />
                            <span>Blogs</span>
                        </div>
                        {
                            openSections.blogs && (
                                <ul className="linksContainer">
                                    <li>Working on it...</li>
                                </ul>
                            )
                        }
                    </li>
                </ul>
            </div>
            <div className="footer mt-4 flex flex-col text-xs text-gray-500">
                <span>&copy; {new Date().getFullYear()}.</span>
                <span>{"#>"} bytes well deployed 🚀</span>
            </div>
        </div>
    )
}