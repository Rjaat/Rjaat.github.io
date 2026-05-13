import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Satellite Imagery Analytics Platform',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'End-to-end satellite imagery analytics platform for maritime warship detection, deployed across multiple naval commands.',
    challenge:
      'Build a production-grade system that detects vessels in high-resolution satellite imagery, computes geolocation coordinates and physical dimensions, and serves results through an operational dashboard — all within an air-gapped environment.',
    architecture:
      'Satellite imagery → Tiled inference pipeline → Orientation-aware object detection → Geolocation engine → Spatial validation → API layer → Operational dashboard → Event store',
    approach: [
      'Trained orientation-aware object detection models for rotated ship detection in overhead imagery across varied lighting and resolution conditions',
      'Built automated geolocation pipeline using geospatial libraries for coordinate extraction, vessel length measurement, and real-world dimension computation from pixel space',
      'Architected API backend with operational dashboard for real-time querying, filtering, and geospatial visualization',
      'Containerized entire stack for air-gapped deployment across naval command infrastructure with no external dependencies',
    ],
    outcome: 'Active across multiple naval commands. Reduces manual analysis time from hours to minutes for vessel identification and measurement tasks.',
    tags: ['Object Detection', 'Oriented Bounding Boxes', 'Geospatial Analysis', 'API Design', 'Dashboard', 'Docker', 'GPU Acceleration'],
  },
  {
    title: 'Offline GenAI Platform (Classified)',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Full-stack Generative AI platform for classified naval documentation, deployed on air-gapped private cloud with zero external dependencies.',
    challenge:
      'Deliver secure LLM capabilities — document Q&A, automated report generation, presentation creation — on a completely isolated network with no internet access, no cloud APIs, and no vendor dependencies.',
    architecture:
      'Classified documents → Preprocessing → RAG pipeline (Chunking → Vector embedding → Hybrid retrieval) → LLM inference via optimized engine → Template engine → API → Operational interface',
    approach: [
      'Deployed open-weight LLMs with optimized inference engine and continuous batching, achieving 40% lower memory footprint and 2.3x throughput vs baseline defaults',
      'Built RAG pipeline with retrieval orchestration, vector storage, and hybrid search (dense + keyword) for improved retrieval accuracy on domain-specific terminology',
      'Engineered automated report and presentation generator from institutional document templates, reducing analyst documentation turnaround by an estimated 60%',
      'Designed API backend with web interface for operational use by non-technical personnel',
    ],
    outcome: '~60% reduction in analyst documentation turnaround. Zero external vendor dependency — fully sovereign AI capability on classified networks.',
    tags: ['LLM Deployment', 'RAG', 'Vector Databases', 'API Design', 'Web Interface', 'Docker', 'GPU Acceleration', 'Air-Gapped'],
  },
  {
    title: 'Real-Time Multi-Camera Surveillance Engine',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Real-time surveillance analytics engine with multi-object tracking, trajectory prediction, and behavioral pattern detection on edge devices.',
    challenge:
      'Build a system that processes multiple simultaneous video feeds for vessel and human motion detection, generates event-level metadata (timestamp, duration, type), and runs on edge devices with strict latency requirements.',
    architecture:
      'Multi-camera feeds → Hardware-accelerated video pipeline → Optimized detection inference → Multi-object tracker → Trajectory estimator → Behavioral classifier → Metadata logger → Clip stitcher → Event API → Timeseries store',
    approach: [
      'Architected hardware-accelerated video pipeline on edge devices for multi-stream inference across 8+ simultaneous camera feeds',
      'Applied model quantization with tiled inference, achieving sub-50ms p99 end-to-end latency per frame',
      'Integrated multi-object tracker with trajectory prediction and rule-based behavioral pattern classification',
      'Built automatic clip stitching with event-aligned metadata (timestamp, duration, object class, trajectory) for post-mission forensic review',
    ],
    outcome: 'Sub-50ms p99 inference latency on edge hardware. Production deployment on naval surveillance vessels. Replaces manual footage review with automated event logging.',
    tags: ['Video Analytics', 'Multi-Object Tracking', 'Edge Deployment', 'Model Quantization', 'GPU Acceleration', 'Docker', 'Real-Time Systems'],
  },
  {
    title: 'Self-Hosted Agentic Coding Assistant',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Agentic coding assistant powered by self-hosted open-weight LLMs, integrated into the lab\'s air-gapped engineering workflow for code generation, testing, and documentation.',
    challenge:
      'Create a secure coding assistant that can generate code, write tests, and produce documentation — without sending any proprietary code to external APIs — while maintaining context across multi-file codebases.',
    architecture:
      'Self-hosted LLMs → Optimized inference serving → Agent orchestration framework with tool definitions → Code sandbox for execution validation → Version control integration → Feedback loop via human review',
    approach: [
      'Deployed large open-weight LLMs on private GPU infrastructure with optimized inference serving and efficient memory management',
      'Built agentic workflow using orchestration framework: plan → generate → validate → iterate loop with tools for file read/write, version control operations, and test execution in isolated sandbox',
      'Designed multi-turn context management to handle repository-level understanding across files — not just single-file completions',
      'Integrated into the lab\'s existing version control workflow via merge request comments, enabling engineers to trigger code generation from issue descriptions',
    ],
    outcome: 'Reduced boilerplate and test scaffolding authoring time by ~40% across the lab\'s engineering team. Particularly effective for data processing scripts and API endpoint generation.',
    tags: ['LLM Deployment', 'Agentic AI', 'Code Generation', 'Air-Gapped', 'Version Control Integration', 'GPU Inference'],
  },
  {
    title: 'Vision-Language Model for Public Safety',
    role: 'AI Systems Engineer (Contract) · Safespace Global',
    summary:
      'VLM-powered alerting system combining real-time weapon detection with automated vision-language investigation across schools and public venues.',
    challenge:
      'Build a complete smart-investigation pipeline that detects threats in real-time, captures forensic evidence, and generates incident reports — reducing manual investigation time from minutes to seconds.',
    approach: [
      'Trained real-time weapon detection models optimized for surveillance camera perspectives with varied lighting and occlusion',
      'Integrated a Vision-Language Model that performs automated reasoning on the detection knowledge base — not raw video, but structured detection events with temporal context',
      'VLM deployment processed thousands of frames per hour across multiple camera feeds, generating structured knowledge base entries for each detection event',
      'Architected full ML lifecycle platform: data processing and augmentation pipelines, dataset versioning, model training orchestration, model registry, CI/CD for deployment, automated rollback, and production drift monitoring',
    ],
    outcome: 'Alert-to-report latency reduced from minutes to under 15 seconds. Zero-downtime model updates across multi-tenant environments.',
    tags: ['Weapon Detection', 'VLM', 'Real-Time Inference', 'MLOps', 'CI/CD', 'Docker', 'Drift Monitoring'],
  },
]

function useTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -8, y: x * 8 })
  }, [])
  const resetTilt = useCallback(() => setTilt({ x: 0, y: 0 }), [])
  return { tilt, handleMouse, resetTilt }
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { tilt, handleMouse, resetTilt } = useTilt()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="group"
        onMouseMove={handleMouse}
        onMouseLeave={resetTilt}
        style={{ perspective: '1000px' }}
      >
        <div
          className="transition-transform duration-200 ease-out"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <div className="mb-4">
            <p className="text-xs text-accent font-mono">0{index + 1}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-accent font-mono mb-6">{project.role}</p>
              <p className="text-muted leading-relaxed mb-8">{project.summary}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">
                    Challenge
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {project.architecture && (
                  <div>
                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">
                      Pipeline
                    </h4>
                    <div className="text-xs text-muted font-mono bg-white/[0.03] border border-border rounded-lg p-4 leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">
                    Approach
                  </h4>
                  <ul className="space-y-2">
                    {project.approach.map((step, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-3">
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">
                    Outcome
                  </h4>
                  <p className="text-sm text-white/80 font-medium">{project.outcome}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:pt-12">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border px-3 py-1.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {index < projects.length - 1 && (
            <div className="h-px bg-border mt-24" />
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering Case Studies
          </h2>
          <p className="text-muted max-w-2xl">
            Five production systems shipped in defense, public safety, and enterprise environments.
            I owned every layer — from model architecture to operational dashboard.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
