import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiMoreHorizontal } from 'react-icons/fi';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);

    const mainLinks = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    const dropdownLinks = [
        { name: 'Hobbies', path: '/hobbies' },
        { name: 'Playground', path: '/playground' },
        { name: 'Blog', path: '/blogs' },
    ];

    return (
        <nav className="bg-[#3c3c3c] shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl flex gap-6 justify-between md:justify-start items-center px-2 py-1">
                {/* Logo */}
                <p className="text-sm font-bold text-[#3b82f6] tracking-wide cursor-default select-none">
                    &lt;/TarekDev&gt;
                </p>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-3 items-center uppercase text-xs font-mono tracking-wide">
                    {mainLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="p-1 rounded-sm text-[#cccccc] hover:text-[#ffffff] hover:bg-[#4f4e4e] transition"
                                onMouseEnter={closeDropdown} // Close dropdown on hover
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="p-1 rounded-sm text-[#cccccc] hover:text-[#ffffff] hover:bg-[#4f4e4e] transition flex items-center"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                        >
                            <FiMoreHorizontal size={18} />
                        </button>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <ul className="absolute right-0 mt-1 w-40 bg-[#3c3c3c] shadow-md z-50">
                                {dropdownLinks.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            onClick={() => {
                                                closeDropdown();
                                                closeMenu();
                                            }}
                                            className="block px-2 py-1.5 text-[#cccccc] hover:text-[#ffffff] hover:bg-[#4f4e4e] transition"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Mobile Icon */}
                <button onClick={toggle} className="md:hidden text-2xl text-[#cccccc] cursor-pointer">
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden px-6 pb-4 flex flex-col text-center space-y-3 uppercase text-sm font-mono tracking-wide">
                    {mainLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={closeMenu}
                                className="block py-1 text-[#cccccc] hover:text-white transition"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {dropdownLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={closeMenu}
                                className="block py-1 text-[#cccccc] hover:text-white transition"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}