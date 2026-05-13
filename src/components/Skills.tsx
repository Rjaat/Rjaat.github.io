import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Computer Vision & Perception',
    skills: [
      'Multi-stage object detection and tracking (OBB, DeepStream pipelines, pose/motion estimation)',
      'Geospatial and satellite imagery analysis — Rasterio, QGIS, tiled inference, coordinate extraction',
      'Real-time video analytics: multi-stream processing, trajectory prediction, behavioral pattern detection',
      'Model training, fine-tuning, and deployment for vision tasks at the edge',
    ],
  },
  {
    title: 'LLM & GenAI Systems',
    skills: [
      'Open-weight LLM deployment and serving with optimized inference engines (vLLM, SGLang, TensorRT-LLM)',
      'RAG pipeline architecture: retrieval orchestration, vector databases, hybrid search, re-ranking',
      'Agentic workflows: tool-use, code generation, multi-step reasoning with self-hosted models',
      'Multimodal systems: vision-language models, neural TTS, document intelligence pipelines',
    ],
  },
  {
    title: 'Inference Engineering',
    skills: [
      'GPU inference optimization: CUDA, TensorRT, kernel fusion, quantization, tiled inference',
      'Edge deployment on NVIDIA Jetson with hardware-accelerated pipelines',
      'Cross-platform inference strategy: target-dependent optimization for NVIDIA, Apple Silicon, and CPU backends',
      'End-to-end latency budgeting, throughput benchmarking, memory footprint optimization',
    ],
  },
  {
    title: 'Backend & Infrastructure',
    skills: [
      'API design and microservices: FastAPI, Flask, RESTful architectures, containerized with Docker',
      'Air-gapped and private-cloud infrastructure: full system design from bare metal to deployed service',
      'Cloud platforms: AWS (EC2, S3), Azure — provisioning, networking, IAM, cost optimization',
      'Full-stack infrastructure ownership: GPU cluster provisioning, distributed storage, self-hosted CI/CD and project management, all on air-gapped networks',
    ],
  },
  {
    title: 'Data & Frontend',
    skills: [
      'Relational and document databases: PostgreSQL, MySQL, MongoDB — schema design, query optimization',
      'Vector databases for production RAG: ChromaDB, FAISS — indexing strategies, hybrid search, re-ranking',
      'Operational dashboards and interfaces: ReactJS, Streamlit — real-time data visualization, map integration',
      'Polyglot engineering: Python, C++, TypeScript, SQL — whatever the system demands',
    ],
  },
  {
    title: 'Domain-Deployed Systems',
    skills: [
      'Maritime surveillance and vessel detection: radar-optical fusion, AIS integration, geofencing',
      'Defense-grade deployments: air-gapped architecture, DISA STIG hardening, zero-trust networking',
      'Satellite image processing pipelines: orthorectification, pan-sharpening, change detection',
      'Internal PKI, SMTP infrastructure, and secure enclave design for classified environments',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Competencies
          </h2>
          <p className="text-muted max-w-2xl">
            Deep expertise across the AI systems stack — model development, production inference,
            infrastructure, and domain-specific deployment. I own the architecture, not just the implementation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={catItem}>
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
