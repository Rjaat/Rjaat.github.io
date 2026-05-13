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
      'Satellite imagery → Tiled inference pipeline → YOLOv8 OBB detection → Rasterio geolocation engine → QGIS validation → FastAPI REST layer → ReactJS operational dashboard → PostgreSQL event store',
    approach: [
      'Trained YOLOv8 with Oriented Bounding Boxes (OBB) for rotated ship detection in overhead imagery across varied lighting and resolution conditions',
      'Built automated geolocation pipeline using Rasterio + QGIS for coordinate extraction, vessel length measurement, and real-world dimension computation from pixel space',
      'Architected FastAPI backend with ReactJS operational dashboard for real-time querying, filtering, and geospatial visualization',
      'Containerized entire stack with Docker for air-gapped deployment across naval command infrastructure with no external dependencies',
    ],
    outcome: 'Active across multiple naval commands. Reduces manual analysis time from hours to minutes for vessel identification and measurement tasks.',
    tags: ['YOLOv8', 'OBB', 'Rasterio', 'QGIS', 'FastAPI', 'ReactJS', 'Docker', 'CUDA'],
  },
  {
    title: 'Offline GenAI Platform (Classified)',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Full-stack Generative AI platform for classified naval documentation, deployed on air-gapped private cloud with zero external dependencies.',
    challenge:
      'Deliver secure LLM capabilities — document Q&A, automated report generation, presentation creation — on a completely isolated network with no internet access, no cloud APIs, and no vendor dependencies.',
    architecture:
      'Classified documents → OCR preprocessing → LangChain RAG pipeline (Chunking → ChromaDB embedding → Hybrid retrieval) → LLaMA inference via vLLM → Template engine → FastAPI → ReactJS + Streamlit interfaces',
    approach: [
      'Deployed open-weight LLaMA models with vLLM serving engine + continuous batching, achieving 40% lower memory footprint and 2.3x throughput vs baseline vLLM defaults',
      'Built RAG pipeline with LangChain for retrieval orchestration, ChromaDB for vector storage, and hybrid search (dense + keyword) for improved retrieval accuracy on domain-specific terminology',
      'Engineered automated report and presentation generator from institutional document templates, reducing analyst documentation turnaround by an estimated 60%',
      'Designed FastAPI backend with ReactJS interface for operational use by non-technical personnel',
    ],
    outcome: '~60% reduction in analyst documentation turnaround. Zero external vendor dependency — fully sovereign AI capability on classified networks.',
    tags: ['LLaMA', 'LangChain', 'vLLM', 'ChromaDB', 'FastAPI', 'ReactJS', 'Docker', 'CUDA', 'Air-Gapped'],
  },
  {
    title: 'Real-Time Multi-Camera Surveillance Engine',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Real-time surveillance analytics engine with multi-object tracking, trajectory prediction, and behavioral pattern detection on edge devices.',
    challenge:
      'Build a system that processes multiple simultaneous video feeds for vessel and human motion detection, generates event-level metadata (timestamp, duration, type), and runs on NVIDIA Jetson edge devices with strict latency requirements.',
    architecture:
      'Multi-camera RTSP feeds → NVIDIA DeepStream pipeline → TensorRT-accelerated YOLO inference → Multi-object tracker (BoT-SORT) → Trajectory estimator → Behavioral classifier → Metadata logger → Clip stitcher → FastAPI event API → PostgreSQL timeseries',
    approach: [
      'Architected DeepStream pipeline on NVIDIA Jetson AGX Orin + CUDA Linux servers for multi-stream inference across 8+ simultaneous camera feeds',
      'Applied TensorRT INT8 quantization with tiled inference, achieving sub-50ms p99 end-to-end latency per frame',
      'Integrated BoT-SORT multi-object tracker with trajectory prediction and rule-based behavioral pattern classification',
      'Built automatic clip stitching with event-aligned metadata (timestamp, duration, object class, trajectory) for post-mission forensic review',
    ],
    outcome: 'Sub-50ms p99 inference latency on Jetson edge hardware. Production deployment on naval surveillance vessels. Replaces manual footage review with automated event logging.',
    tags: ['TensorRT', 'DeepStream', 'NVIDIA Jetson', 'CUDA', 'YOLO', 'BoT-SORT', 'Multi-Object Tracking', 'Docker'],
  },
  {
    title: 'Self-Hosted Agentic Coding Assistant',
    role: 'AI Research Engineer · WESEE Naval R&D Lab',
    summary:
      'Agentic coding assistant powered by self-hosted open-weight LLMs, integrated into the lab\'s air-gapped engineering workflow for code generation, testing, and documentation.',
    challenge:
      'Create a secure coding assistant that can generate code, write tests, and produce documentation — without sending any proprietary code to external APIs — while maintaining context across multi-file codebases.',
    architecture:
      'Self-hosted LLaMA 70B → vLLM serving with continuous batching → Agent framework (LangGraph) with tool definitions → Code sandbox for execution validation → GitLab MR integration → Feedback loop via human review',
    approach: [
      'Deployed LLaMA-70B on private GPU infrastructure with vLLM serving and PagedAttention for efficient memory management',
      'Built agentic workflow using LangGraph: plan → generate → validate → iterate loop with tools for file read/write, git operations, and test execution in isolated sandbox',
      'Designed multi-turn context management to handle repository-level understanding across files — not just single-file completions',
      'Integrated into the lab\'s existing GitLab workflow via merge request comments, enabling engineers to trigger code generation from issue descriptions',
    ],
    outcome: 'Reduced boilerplate and test scaffolding authoring time by ~40% across the lab\'s engineering team. Particularly effective for data processing scripts and API endpoint generation.',
    tags: ['LLaMA 70B', 'vLLM', 'LangGraph', 'Agentic AI', 'Air-Gapped', 'GitLab', 'CUDA'],
  },
  {
    title: 'Vision-Language Model for Public Safety',
    role: 'AI Systems Engineer (Contract) · Safespace Global',
    summary:
      'VLM-powered alerting system combining real-time weapon detection with automated vision-language investigation across schools and public venues.',
    challenge:
      'Build a complete smart-investigation pipeline that detects threats in real-time, captures forensic evidence, and generates incident reports — reducing manual investigation time from minutes to seconds.',
    approach: [
      'Trained real-time weapon detection models (YOLO-based) optimized for surveillance camera perspectives with varied lighting and occlusion',
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
