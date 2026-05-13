import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'AI Systems Engineer',
    company: 'WESEE — Naval R&D Lab, Ministry of Defence',
    location: 'New Delhi',
    period: 'Jul 2023 — Present',
    highlights: [
      'Designed end-to-end satellite imagery analytics platform for maritime warship detection: orientation-aware detection models, geospatial analysis, API backend, operational dashboard — deployed across multiple naval commands',
      'Architected classified offline GenAI platform on air-gapped private cloud: RAG system with optimized inference, automated report and presentation generator — reduced analyst documentation turnaround by ~60%',
      'Engineered real-time multi-camera surveillance with sub-50ms latency via model quantization and hardware-accelerated pipelines on edge devices',
      'Built multimodal document intelligence system combining open-weight LLMs with neural TTS for podcast-style audio briefs',
      'Designed and deployed agentic coding assistant on self-hosted LLMs; reduced boilerplate authoring time by ~40% across engineering team',
      'Sole engineer responsible for building lab\'s complete AI/ML infrastructure from zero: GPU cluster, version control, project management, SMTP, distributed storage, all on fully air-gapped systems',
    ],
  },
  {
    role: 'AI Systems Engineer (Contract)',
    company: 'Safespace Global Corporation',
    location: 'Remote',
    period: '2024',
    highlights: [
      'Trained real-time weapon detection models, integrated a Vision-Language Model for automated investigation on the detection knowledge base across schools and public venues',
      'Built complete smart-investigation pipeline: real-time threat detection, evidence capture, automated incident report generation',
      'Built ML lifecycle infrastructure: data processing pipelines, model versioning, CI/CD deployment, and production monitoring across multi-tenant environments',
    ],
  },
  {
    role: 'Computer Vision Engineer (Contract)',
    company: 'Sponsorlytics',
    location: 'Remote',
    period: 'Nov 2024 — Mar 2025',
    highlights: [
      'Trained multi-stage logo detection system for brand placement analysis on live sports broadcast footage',
      'Delivered automated analytics: frame-level visibility duration, on-screen position heatmaps, sponsor ROI scoring at broadcast frame rates',
    ],
  },
  {
    role: 'AI Engineering Intern',
    company: 'Object Automation System Solutions',
    location: 'Chennai',
    period: 'Sep 2022 — Jan 2023',
    highlights: [
      'Built Flask-based collaborative filtering recommendation engine',
      'Administered Linux VPS-hosted LMS maintaining 24/7 uptime',
    ],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const expItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional History
          </h2>
          <p className="text-muted max-w-2xl">
            Building production AI systems for defense, public safety, and enterprise — from
            zero infrastructure to deployed platform.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {experiences.map((exp, i) => (
            <article key={`${exp.role}-${exp.period}`}>
            <motion.div variants={expItem} className="rounded-lg p-4 -mx-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-6">
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <p className="text-sm text-muted font-mono">{exp.period}</p>
                  <p className="text-sm text-muted">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted flex items-start gap-3 leading-relaxed">
                    <span className="text-accent mt-2 shrink-0">
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor">
                        <circle cx="2" cy="2" r="2" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              {i < experiences.length - 1 && <div className="h-px bg-border mt-16" />}
            </motion.div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
