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
              Most AI systems are built expecting reliable internet, cloud APIs, and endless
              compute. I build for the opposite — air-gapped networks, NVIDIA Jetson edge
              devices, and environments where every megabyte and millisecond counts.
            </p>
            <p>
              My work spans the full stack: training custom vision models for satellite
              imagery, quantizing them to run at sub-50ms on edge hardware, deploying RAG
              pipelines on classified networks with zero external dependencies, and building
              the GPU infrastructure that makes it all possible.
            </p>
            <p>
              I don't just train models — I architect systems. At WESEE Naval R&D Lab, I
              built the entire AI/ML infrastructure from zero: GPU cluster provisioning,
              self-hosted GitLab and Jira, distributed object storage, internal SMTP and
              PKI — all on fully air-gapped systems with no vendor dependency.
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
