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
      'Linux system administration, GPU cluster provisioning, self-hosted GitLab/Jira, distributed storage (SeaweedFS)',
    ],
  },
  {
    title: 'Data & Frontend',
    skills: [
      'Relational and document databases: PostgreSQL, MySQL, MongoDB — schema design, query optimization',
      'Vector databases for production RAG: ChromaDB, FAISS — indexing strategies, hybrid search, re-ranking',
      'Operational dashboards and interfaces: ReactJS, Streamlit — real-time data visualization, map integration',
      'Languages: Python (primary), C++, JavaScript/TypeScript, SQL, R',
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

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Competencies
          </h2>
          <p className="text-muted max-w-2xl">
            Deep expertise across the AI systems stack — model development, production inference,
            infrastructure, and domain-specific deployment. I own the architecture, not just the implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
