import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering Philosophy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-muted leading-relaxed"
          >
            <p>
              I design and build AI systems end-to-end. That means training custom
              vision models, fine-tuning LLMs, wiring up RAG pipelines, and shipping
              the backend infrastructure and interfaces that put those capabilities
              into production. I work across vision, language, and multimodal domains
              — whatever the problem demands.
            </p>
            <p>
              What sets my work apart is that I also own the infrastructure — not
              because I'm an infra engineer, but because the environments I work in
              don't have one. GPU cluster provisioning, self-hosted version control
              and project management, distributed storage, internal networking — all
              on systems with no internet access and no vendor dependencies.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white">M.Tech — AI & Data Science</p>
                  <p className="text-xs text-muted">IIIT Kota · MNIT Jaipur Campus · 2021–2023</p>
                </div>
                <div>
                  <p className="text-sm text-white">B.Tech — Computer Science & Engineering</p>
                  <p className="text-xs text-muted">Rajasthan Technical University · 2017–2021</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Certifications</h3>
              <ul className="space-y-1 text-sm text-muted">
                <li>AWS Fundamentals — Coursera</li>
                <li>Developing Cloud Native Applications — Coursera</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Currently</h3>
              <p className="text-sm text-muted leading-relaxed">
                AI Systems Engineer at WESEE Naval R&D Lab, Ministry of Defence. Building
                production-grade AI infrastructure for India's maritime security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
