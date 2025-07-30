import {useEffect, useState} from "react";
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx'
import Folders from "./Pages/Folders/Folders.jsx";
import Experience from "./Pages/Experience/Experience.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import Hobbies from "./Pages/Hobbies/Hobbies.jsx";
import Terminal from "./Pages/Terminal/Terminal.jsx";
import Search from "./Pages/Search/Saerch.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import SidebarSecondary from "./components/SidebarSecondary.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {

    // toggling the sidebar explorer
    const folderRelatedPaths = [
        '/folders',
        '/experience',
        '/skills',
        '/resume',
        '/hobbies',
        '/contact'
    ];
    const location = useLocation();
    const isFolderRelatedPage = folderRelatedPaths.includes(location.pathname);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        if(location.pathname === '/folders') {
            setIsSidebarOpen(prev => !prev);
        }
    };

    // set a timer for the spinner loader
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    if(isLoading) return <Loader />

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen pb-6">
                <Sidebar toggleSidebar={toggleSidebar} />
                {isFolderRelatedPage && isSidebarOpen && <SidebarSecondary />}
                <main className="flex-1 bg-[#1e1e1e] p-4 text-[#ffffff]">
                    <Routes>
                        <Route path="/" element={<Navigate to="/folders" replace/>}></Route>
                        <Route path="/folders" element={<Experience />}></Route>
                        <Route path="/experience" element={<Experience />}></Route>
                        <Route path="/skills" element={<Skills />}></Route>
                        <Route path="/resume" element={<Resume />}></Route>
                        <Route path="/hobbies" element={<Hobbies />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/terminal" element={<Terminal />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default App;
