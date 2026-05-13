const projects = [
  {
    title: 'Satellite Imagery Analytics Platform',
    role: 'Sole Engineer · WESEE Naval R&D Lab',
    summary:
      'End-to-end satellite imagery analytics platform for maritime warship detection, deployed across multiple naval commands.',
    challenge:
      'Build a production-grade system that detects vessels in high-resolution satellite imagery, computes geolocation coordinates and physical dimensions, and serves results through an operational dashboard — all within an air-gapped environment.',
    approach: [
      'Trained YOLOv8 with Oriented Bounding Boxes (OBB) for rotated ship detection in overhead imagery',
      'Built automated geolocation pipeline using Rasterio + QGIS for coordinate extraction and vessel length measurement',
      'Architected FastAPI backend with ReactJS operational dashboard for real-time querying and visualization',
      'Containerized entire stack with Docker for air-gapped deployment across naval command infrastructure',
    ],
    outcome: 'System is active across multiple naval commands, reducing manual analysis time and enabling rapid vessel identification.',
    tags: ['YOLOv8', 'OBB', 'Rasterio', 'QGIS', 'FastAPI', 'ReactJS', 'Docker', 'CUDA'],
  },
  {
    title: 'Offline GenAI Platform (Classified)',
    role: 'Sole Engineer · WESEE Naval R&D Lab',
    summary:
      'Full-stack Generative AI platform for classified naval documentation, deployed on air-gapped private cloud with zero external dependencies.',
    challenge:
      'Deliver secure LLM capabilities — document Q&A, automated report generation, presentation creation — on a completely isolated network with no internet access, no cloud APIs, and no vendor dependencies.',
    approach: [
      'Deployed open-weight LLaMA models with vLLM serving engine, achieving 40% lower memory footprint vs baseline',
      'Built RAG pipeline with LangChain + ChromaDB for retrieval-augmented question answering over classified corpora',
      'Engineered automated report and presentation generator from institutional document templates',
      'Designed FastAPI backend + ReactJS interface for operational usability by non-technical personnel',
    ],
    outcome: 'Reduced analyst documentation turnaround by an estimated 60%. Zero external vendor dependency — fully sovereign AI capability.',
    tags: ['LLaMA', 'LangChain', 'vLLM', 'ChromaDB', 'FastAPI', 'ReactJS', 'Docker', 'CUDA', 'Air-Gapped'],
  },
  {
    title: 'Real-Time Multi-Camera Surveillance Engine',
    role: 'Sole Engineer · WESEE Naval R&D Lab',
    summary:
      'Real-time surveillance analytics engine with multi-object tracking, trajectory prediction, and behavioral pattern detection on edge devices.',
    challenge:
      'Build a system that processes multiple simultaneous video feeds for vessel and human motion detection, generates event-level metadata (timestamp, duration, type), and runs on NVIDIA Jetson edge devices with strict latency requirements.',
    approach: [
      'Architected DeepStream pipeline on NVIDIA Jetson + CUDA Linux servers for multi-stream inference',
      'Applied TensorRT INT8 quantization and tiled inference strategies, achieving sub-50ms end-to-end latency',
      'Integrated multi-object tracking with trajectory prediction and behavioral pattern classification',
      'Built automatic clip stitching and metadata logging for post-mission review and analysis',
    ],
    outcome: 'Sub-50ms inference latency on edge hardware. Production deployment on naval surveillance vessels.',
    tags: ['TensorRT', 'DeepStream', 'NVIDIA Jetson', 'CUDA', 'YOLO', 'Multi-Object Tracking', 'Docker'],
  },
  {
    title: 'Agentic Coding Assistant (Self-Hosted)',
    role: 'Sole Engineer · WESEE Naval R&D Lab',
    summary:
      'Agentic coding assistant powered by self-hosted open-weight LLMs, integrated into the lab\'s secure engineering workflow.',
    challenge:
      'Create a secure, air-gapped coding assistant that can generate code, write tests, and produce documentation — without sending any code to external APIs.',
    approach: [
      'Deployed open-weight LLMs on private GPU infrastructure with vLLM serving',
      'Built agentic workflow for automated code generation, test scaffolding, and inline documentation',
      'Integrated into the lab\'s existing engineering workflow via internal tooling',
    ],
    outcome: 'Reduced boilerplate authoring time by ~40% across the lab\'s engineering team.',
    tags: ['LLaMA', 'vLLM', 'Agentic AI', 'Air-Gapped', 'GPU Inference'],
  },
  {
    title: 'Vision-Language Model for Public Safety',
    role: 'AI Systems Engineer (Contract) · Safespace Global',
    summary:
      'Custom VLM for 911-inform alerting system covering real-time threat detection, evidence capture, and automated incident reporting across schools and public venues.',
    challenge:
      'Build a complete smart-investigation pipeline that detects threats in real-time, captures forensic evidence, and generates incident reports — reducing manual investigation time from minutes to seconds.',
    approach: [
      'Trained and deployed custom Vision-Language Model for scene understanding and threat classification',
      'Built end-to-end pipeline: real-time detection → evidence capture → automated incident report generation',
      'Architected MLOps platform with model versioning, CI/CD, containerized deployments, automated rollback, and production drift monitoring',
    ],
    outcome: 'Alert-to-report latency reduced from minutes to under 15 seconds. Zero-downtime model updates across multi-tenant environments.',
    tags: ['VLM', 'MLOps', 'CI/CD', 'Docker', 'Real-Time Inference', 'Drift Monitoring'],
  },
  {
    title: 'Sponsor Analytics for Broadcast Sports',
    role: 'Computer Vision Engineer (Contract) · Sponsorlytics',
    summary:
      'Multi-stage logo detection and brand placement analysis system for live sports broadcast footage.',
    challenge:
      'Accurately detect brand logos in live broadcast footage and deliver analytics including frame-level visibility duration, on-screen position heatmaps, and sponsor ROI scoring — all at broadcast frame rates.',
    approach: [
      'Trained multi-stage YOLO-based detection pipeline for brand logo identification across varied lighting and angles',
      'Computed frame-level visibility metrics, spatial position analysis, and aggregate sponsor ROI scoring',
      'Processed full-match footage at real-time frame rates with optimized inference pipeline',
    ],
    outcome: 'Automated sponsor analytics at broadcast frame rates, replacing manual frame-by-frame analysis.',
    tags: ['YOLO', 'Object Detection', 'Video Analytics', 'Real-Time Processing', 'ROI Analytics'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering Case Studies
          </h2>
          <p className="text-muted max-w-2xl">
            Production systems built from scratch — satellite analytics, air-gapped GenAI platforms,
            real-time surveillance engines, and MLOps infrastructure.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <div key={project.title} className="group">
              <div className="mb-4">
                <p className="text-xs text-accent font-mono">0{i + 1}</p>
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

              {i < projects.length - 1 && (
                <div className="h-px bg-border mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
