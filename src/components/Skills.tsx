const categories = [
  {
    title: 'ML Systems',
    skills: [
      'Object Detection & Tracking (OBB, multi-stage)',
      'Pose & Motion Estimation',
      'Model Training & Fine-Tuning',
      'Geospatial & Satellite Imagery Analysis',
      'OpenCV, FFmpeg, Rasterio, QGIS',
    ],
  },
  {
    title: 'GenAI & LLM Infrastructure',
    skills: [
      'Open-Weight LLMs (LLaMA, Mistral)',
      'RAG System Design (LangChain, LlamaIndex, ChromaDB)',
      'Agentic Workflows & Prompt Engineering',
      'vLLM Serving & Optimization',
      'Neural TTS & Multimodal Systems',
    ],
  },
  {
    title: 'GPU & Inference',
    skills: [
      'NVIDIA CUDA, TensorRT (INT8/FP16)',
      'DeepStream SDK',
      'NVIDIA Jetson Edge Deployment',
      'Quantization, Tiled Inference, Low-Latency Serving',
      'Inference Benchmarking & Optimization',
    ],
  },
  {
    title: 'Backend & Infrastructure',
    skills: [
      'FastAPI, Flask, REST APIs',
      'Docker, Microservices Architecture',
      'Air-Gapped & Private-Cloud Deployments',
      'AWS (EC2, S3), Azure',
      'Linux Administration, Self-Hosted GitLab, Jira',
      'SeaweedFS Distributed Storage',
    ],
  },
  {
    title: 'Frontend & Data',
    skills: [
      'ReactJS, Streamlit, JavaScript',
      'PostgreSQL, MySQL, MongoDB',
      'Vector Databases (ChromaDB, FAISS)',
      'Python, C++, R',
    ],
  },
  {
    title: 'Specialized Systems',
    skills: [
      'Maritime Surveillance Analytics',
      'Defense-Grade Secure Deployments',
      'Satellite Image Processing Pipelines',
      'Real-Time Video Analytics at Edge',
      'Internal PKI & Mail Infrastructure',
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Competencies
          </h2>
          <p className="text-muted max-w-2xl">
            Full-stack AI engineering — from model training and quantized edge deployment to 
            air-gapped infrastructure and operational dashboards.
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
