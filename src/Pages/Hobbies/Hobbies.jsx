import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ----------------------
// Données d'exemple
// ----------------------
const CATEGORIES = [
    { id: "Sport",   icon: "⚽", color: "from-emerald-400 to-lime-400", dot: "bg-emerald-400" },
    { id: "Art",     icon: "🎨", color: "from-fuchsia-400 to-pink-400", dot: "bg-fuchsia-400" },
    { id: "Tech",    icon: "🛰️", color: "from-sky-400 to-blue-400",    dot: "bg-sky-400" },
    { id: "Culture", icon: "📚", color: "from-amber-400 to-orange-400", dot: "bg-amber-400" },
];

const HOBBIES = [
    { id: 1, title: "Musculation",     category: "Sport",   cover: "", desc: "Séances régulières, focus force & mobilité." },
    { id: 2, title: "Randonnée",       category: "Sport",   cover: "", desc: "Montagnes & forêts, photos au lever du soleil." },
    { id: 3, title: "Photographie",    category: "Art",     cover: "", desc: "Street & paysages, retouches légères." },
    { id: 4, title: "Design UI",       category: "Art",     cover: "", desc: "Layouts minimalistes sur Figma." },
    { id: 5, title: "Veille Tech",     category: "Tech",    cover: "", desc: "Lecture hebdo, tests de libs & POCs." },
    { id: 6, title: "Bidouilles Web",  category: "Tech",    cover: "", desc: "Micro‑apps React, automations, APIs." },
    { id: 7, title: "Lecture",         category: "Culture", cover: "", desc: "Psycho & Nietzsche, 20 pages/jour." },
    { id: 8, title: "Voyages",         category: "Culture", cover: "", desc: "Découverte de villes & cultures." },
];

// Image de fond fallback (dégradé) si pas d'image
const gradientBg =
    "bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10";

function useParallax() {
    const ref = useRef(null);
    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;  // 0..1
        const py = (e.clientY - rect.top) / rect.height;  // 0..1
        const dx = (px - 0.5) * 10; // tilt range
        const dy = (py - 0.5) * 10;
        el.style.setProperty("--rx", `${-dy}deg`);
        el.style.setProperty("--ry", `${dx}deg`);
        el.style.setProperty("--tx", `${(px - 0.5) * 6}px`);
        el.style.setProperty("--ty", `${(py - 0.5) * 6}px`);
    };
    const onMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
    };
    return { ref, onMouseMove, onMouseLeave };
}

export default function Hobbies() {
    const [activeCats, setActiveCats] = useState(new Set(["Sport"]));
    const [query, setQuery] = useState("");

    const toggleCat = (id) => {
        setActiveCats((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            if (next.size === 0) next.add(id); // toujours au moins 1
            return next;
        });
    };

    const filtered = useMemo(() => {
        const list = HOBBIES.filter(h => activeCats.has(h.category));
        if (!query.trim()) return list;
        const q = query.toLowerCase();
        return list.filter(h =>
            h.title.toLowerCase().includes(q) ||
            h.desc.toLowerCase().includes(q)
        );
    }, [activeCats, query]);

    return (
        <main className="min-h-screen text-white selection:bg-white/20 pb-16">
            {/* HERO */}
            <header className="max-w-6xl mx-auto px-6 pt-3">
                <p className="heading-text">Hobbies Explorer</p>
                <h1 className="text-3xl font-semibold mt-10 leading-tight">
                    Explore my <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">passions</span> with a single click
                </h1>
                <p className="opacity-70 mt-3 max-w-2xl">
                    An interactive visual of what I love to do beyond coding.
                </p>

                {/* Barre d'actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search a hobby…"
                            className="bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-white/30 min-w-[300px]"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm opacity-50">⌘K</span>
                    </div>

                    {/* Chips Mobile */}
                    <div className="flex gap-2 overflow-x-auto md:hidden py-1">
                        {CATEGORIES.map(cat => {
                            const active = activeCats.has(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => toggleCat(cat.id)}
                                    className={`whitespace-nowrap px-3 py-1.5 rounded-full border text-sm transition
                    ${active ? "border-white/30 bg-white/10" : "border-white/10 hover:border-white/20"}`}
                                >
                                    <span className="mr-1">{cat.icon}</span>{cat.id}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            {/* MENU RADIAL (desktop) */}
            <section className="hidden md:block max-w-6xl mx-auto px-6 mt-10">
                <RadialMenu activeCats={activeCats} onToggle={toggleCat} />
            </section>

            {/* GRID des hobbies */}
            <section className="max-w-6xl mx-auto px-6 mt-10">
                <AnimatePresence mode="popLayout">
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((h) => (
                            <motion.li
                                key={h.id}
                                layout
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
                            >
                                <HobbyCard hobby={h} />
                            </motion.li>
                        ))}
                    </ul>
                </AnimatePresence>
                {filtered.length === 0 && (
                    <p className="opacity-60 text-sm mt-6">Aucun hobby trouvé pour ces filtres.</p>
                )}
            </section>
        </main>
    );
}

// ----------------------
// Menu Radial Desktop
// ----------------------
function RadialMenu({ activeCats, onToggle }) {
    const radius = 140; // px
    const center = { x: 0, y: 0 }; // on translate via CSS
    const angleStep = (2 * Math.PI) / CATEGORIES.length;

    return (
        <div className="relative h-[320px] flex items-center justify-center">
            {/* cercle central */}
            <div className="absolute w-[220px] h-[220px] rounded-full border border-white/10" />
            <div className="absolute w-[120px] h-[120px] rounded-full border border-white/10" />

            {CATEGORIES.map((cat, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const x = center.x + radius * Math.cos(angle);
                const y = center.y + radius * Math.sin(angle);
                const active = activeCats.has(cat.id);

                return (
                    <motion.button
                        key={cat.id}
                        onClick={() => onToggle(cat.id)}
                        className={`
              group absolute -translate-x-1/2 -translate-y-1/2
              rounded-full p-0.5
              bg-gradient-to-br ${cat.color}
              shadow-[0_0_0_1px_rgba(255,255,255,0.08)]`}
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className={`rounded-full bg-[#161616] px-4 py-2 flex items-center gap-2
              transition border ${active ? "border-white/30" : "border-white/10"}`}>
                            <span className="text-lg">{cat.icon}</span>
                            <span className="text-sm">{cat.id}</span>
                            <span className={`ml-1 h-2 w-2 rounded-full ${cat.dot} opacity-80`} />
                        </div>
                    </motion.button>
                );
            })}
        </div>
    );
}

// ----------------------
// Carte Hobby (parallax + dégradé)
// ----------------------
function HobbyCard({ hobby }) {
    const { ref, onMouseMove, onMouseLeave } = useParallax();

    const cat = CATEGORIES.find(c => c.id === hobby.category);
    const badge = (
        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full
      bg-white/5 border border-white/10`}>
      <span>{cat?.icon}</span> {hobby.category}
    </span>
    );

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="group relative rounded-2xl border border-white/10 overflow-hidden
                 [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))_translate(var(--tx),var(--ty))]
                 transition-transform will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Couche bg image / gradient */}
            <div className={`h-40 ${gradientBg} bg-[url('/placeholder.jpg')] bg-cover bg-center`} />
            {/* Overlay dégradé de catégorie */}
            <div className={`absolute inset-0 pointer-events-none mix-blend-screen
        bg-gradient-to-br ${cat?.color || "from-white/10 to-white/0"} opacity-30`} />

            {/* Contenu */}
            <div className="p-4 bg-[#101010]">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium">{hobby.title}</h3>
                    {badge}
                </div>
                <p className="text-sm opacity-70 mt-1">{hobby.desc}</p>

                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="text-xs px-2 py-1 rounded-lg border border-white/10 hover:border-white/20">
                        Galerie
                    </button>
                </div>
            </div>
        </div>
    );
}
