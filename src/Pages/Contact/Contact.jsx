import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#121212] text-white rounded-lg selection:bg-white/20">
            {/* Hero */}
            <header className="max-w-5xl mx-auto px-6 pt-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-5xl font-bold leading-tight"
                >
                    Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">Connect</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="opacity-70 mt-3 max-w-xl mx-auto"
                >
                    Have a project, collaboration idea, or just want to say hi? Reach out via the form or directly through my contacts below.
                </motion.p>
            </header>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-2 md:px-6 mt-12 grid lg:grid-cols-2 gap-10 pb-16">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-2 md:p-5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                    >
                        <FaEnvelope className="text-violet-400 text-2xl" />
                        <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:bekkaoui.tarel@gmail.com" className="text-sm opacity-80 hover:opacity-100">
                                bekkaoui.tarek2001@gmail.com
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-2 md:p-5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                    >
                        <FaPhone className="text-sky-400 text-2xl" />
                        <div>
                            <p className="font-medium">Phone</p>
                            <a href="tel:+212600000000" className="text-sm opacity-80 hover:opacity-100">
                                +212 7 21 66 75 21
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex gap-4 pt-2">
                        <a href="https://www.linkedin.com/in/tarek-bekkaoui/" target="_blank"
                           className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a href="https://github.com/kbqerat" target="_blank"
                           className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                >
                    <div>
                        <label className="block text-sm mb-1 opacity-80">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 focus:border-white/30 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 opacity-80">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 focus:border-white/30 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 opacity-80">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 focus:border-white/30 outline-none resize-none"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        disabled
                        className="w-full bg-gradient-to-r from-violet-500 to-sky-500 py-2.5 rounded-full font-medium hover:opacity-90 transition"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </section>
        </main>
    );
}
