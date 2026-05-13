import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Sparkles, Code2, Brain } from 'lucide-react'

const Hero = () => {
    const floatingElements = [
        { icon: Brain, delay: 0, position: 'top-20 left-20' },
        { icon: Code2, delay: 1, position: 'top-40 right-32' },
        { icon: Sparkles, delay: 2, position: 'bottom-40 left-32' },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
            {/* Floating Background Elements */}
            {floatingElements.map(({ icon: Icon, delay, position }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, delay }}
                    className={`absolute ${position} float-animation`}
                >
                    <Icon size={120} className="text-indigo-500/20" />
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="space-y-12"
                >
                    {/* Greeting */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-premium px-6 py-3 rounded-full inline-block"
                    >
                        <span className="text-sm font-mono text-cyan-300">
                            👋 Hello, I'm a passionate
                        </span>
                    </motion.div> */}

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                            <motion.span
                                className="gradient-primary block"
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            >
                                Rajesh K. Jat
                            </motion.span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
                            AI Engineer — GenAI, Computer Vision & Edge Systems
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto max-w-md rounded-full"
                        />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Building{' '}
                        <span className="gradient-secondary font-semibold">Real-Time Intelligence for the Edge</span>{' '}
                        — Specialized in self-hosted LLM applications, maritime surveillance systems, and{' '}
                        <span className="gradient-secondary font-semibold">defense-grade AI deployments</span>{' '}
                        with proven expertise in air-gapped environments
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-12"
                    >
                        {[
                            { number: '2+', label: 'Years Experience' },
                            { number: '10+', label: 'AI Projects' },
                            { number: 'M.Tech', label: 'AI & Data Science' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-primary">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400 font-mono">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="flex justify-center space-x-6"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/Rjaat', label: 'GitHub', color: 'hover:text-gray-300' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'LinkedIn', color: 'hover:text-blue-400' },
                            { icon: Mail, href: 'mailto:rajgadhwal99@gmail.com', label: 'Contact', color: 'hover:text-green-400' },
                        ].map(({ icon: Icon, href, label, color }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`glass-premium p-4 rounded-2xl transition-all duration-300 ${color} glow-primary hover:glow-accent group`}
                            >
                                <Icon size={24} className="group-hover:scale-110 transition-transform" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-card px-10 py-4 rounded-2xl font-semibold text-lg glow-primary hover:glow-accent transition-all duration-500 group inline-block text-center"
                        >
                            <span className="gradient-primary group-hover:gradient-secondary">
                                Explore My Work
                            </span>
                        </motion.a>
                        <motion.a
                            href="mailto:rajgadhwal99@gmail.com?subject=Resume%20Request&body=Hi%20Rajesh,%0A%0AI%20would%20like%20to%20request%20your%20resume.%0A%0AThank%20you!"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-premium px-10 py-4 rounded-2xl font-semibold text-lg border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 inline-block text-center"
                        >
                            Request Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center space-y-2"
                >
                    <div className="text-xs text-gray-400 font-mono">SCROLL</div>
                    <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-3 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                            opacity: [0, 0.3, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero