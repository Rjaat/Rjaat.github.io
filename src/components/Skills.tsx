import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Computer Vision & Perception',
    skills: [
      'Multi-stage object detection and tracking — OBB, hardware-accelerated pipelines, pose/motion estimation',
      'Geospatial and satellite imagery analysis: tiled inference, coordinate extraction, orthorectification',
      'Real-time video analytics: multi-stream processing, trajectory prediction, behavioral pattern detection',
    ],
  },
  {
    title: 'LLM & GenAI Systems',
    skills: [
      'Open-weight LLM deployment and serving with optimized inference engines and continuous batching',
      'RAG pipeline architecture: retrieval orchestration, vector databases, hybrid search, re-ranking',
      'Agentic workflows: tool-use, code generation, multi-step reasoning with self-hosted models',
    ],
  },
  {
    title: 'Inference Engineering & Infrastructure',
    skills: [
      'GPU inference optimization: kernel fusion, quantization, tiled inference, latency budgeting',
      'Edge deployment with hardware-accelerated pipelines across NVIDIA, Apple Silicon, CPU backends',
      'Air-gapped and private-cloud infrastructure: bare metal to deployed service, zero external dependencies',
    ],
  },
  {
    title: 'Production Systems & MLOps',
    skills: [
      'Full ML lifecycle platform: data pipelines, model registry, CI/CD deployment, drift monitoring',
      'Distributed storage, GPU cluster provisioning, self-hosted version control and CI/CD',
      'Operational dashboards, real-time visualization, map integration for deployed AI systems',
    ],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const catItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Technical Competencies
          </h2>
          <p className="text-muted max-w-2xl">
            Deep expertise across the AI systems stack — model development, production inference,
            infrastructure, and domain-specific deployment.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={catItem}
              className="rounded-xl bg-surface-50 border border-border p-6"
            >
              <h3 className="text-sm font-semibold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
