import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="section-label mb-6">
            AI Systems Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
          >
            Rajesh K. Jat
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-2xl"
          >
            I design and build AI systems end-to-end — from model architecture and
            training data to deployed production applications. I've shipped across
            vision, language, and multimodal domains, in environments ranging from
            cloud to fully air-gapped. I own the full stack because the problems
            I work on don't come with a platform team attached.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-white text-surface font-medium rounded-lg hover:bg-white/90 transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="mailto:rajgadhwal99@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-border text-muted hover:text-white hover:border-white/20 rounded-lg transition-colors text-sm"
            >
              Contact
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/Rjaat', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rajgadhwal99@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-muted hover:text-white transition-colors"
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
