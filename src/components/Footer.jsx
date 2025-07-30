import {useState, useEffect} from 'react';

export default function Footer() {
    const footerTech = ["ReactJs"];

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval);
    }, [])

    const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <div className="hidden sm:flex fixed bottom-0 left-0 w-full z-50 justify-between px-4 bg-[#3b82f6] text-[#ffffff]">
            <div className="footerTech flex gap-2">
                <span>Made with :</span>
                <ul>
                    {footerTech.map((tech) => (
                        <li key={tech}>{tech}</li>
                        )
                    )}
                </ul>
            </div>
            <div className="footerCalendar flex gap-5">
                <span>{formattedDate}</span>
                <span>{formattedTime}</span>
                <span>UTF-8</span>
                <span>Port: 5173</span>
            </div>
        </div>
    )
}