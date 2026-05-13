import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, FileText, Eye, Satellite, Play, Users, Target } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = [
    {
      title: 'Multimodal PDF Assistant',
      description: 'LLaMA 3.1 Instruct + LangChain + Coqui TTS powered RAG system for document Q&A, summary generation, and speech output. Creates podcast-style content experience with natural language processing.',
      icon: FileText,
      tags: ['LLaMA 3.1', 'LangChain', 'ChromaDB', 'Coqui TTS', 'Streamlit', 'RAG'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
      metrics: ['<2s Response Time', 'Multi-format Support', 'Natural Speech Output'],
      company: 'WESEE - Naval R&D Lab'
    },
    {
      title: 'Flying Object Flow Tracker',
      description: 'Advanced CV pipeline analyzing airborne object motion, computing velocity vectors and trajectory paths using OpenCV + NumPy. Real-time spatiotemporal analysis with trajectory estimation.',
      icon: Target,
      tags: ['OpenCV', 'NumPy', 'Computer Vision', 'Trajectory Analysis', 'Real-time Processing'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
      metrics: ['Real-time Tracking', 'Velocity Computation', 'Trajectory Prediction'],
      company: 'WESEE - Naval R&D Lab'
    },
  ]

  const otherProjects = [
    {
      title: 'Satellite Object Detection',
      description: 'YOLOv8 + OBB + Rasterio model for ship detection and geospatial measurement computation on high-resolution satellite imagery.',
      icon: Satellite,
      tags: ['YOLOv8', 'OBB', 'Rasterio', 'Geospatial Analysis', 'Maritime Detection'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      company: 'WESEE - Naval R&D Lab',
    },
    {
      title: 'Sponsor Analytics for Sports',
      description: 'Automated logo detection and ROI tracking system for evaluating sponsor visibility metrics in real-time sports broadcast feeds.',
      icon: Play,
      tags: ['YOLO', 'Brand Detection', 'ROI Analysis', 'Real-time Processing', 'Sports Analytics'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      company: 'Academic Project',
    },
    {
      title: 'Real-time Surveillance Analytics',
      description: 'Object detection and tracking in video feeds with automatic clip stitching and metadata appending for maritime surveillance vessels.',
      icon: Eye,
      tags: ['Computer Vision', 'Real-time Processing', 'Video Analytics', 'Surveillance'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      company: 'WESEE - Naval R&D Lab',
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'FaceNet-based automated dockyard access system enhancing security and operational control with real-time face recognition.',
      icon: Users,
      tags: ['FaceNet', 'Face Recognition', 'Security Systems', 'Access Control'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      company: 'WESEE - Naval R&D Lab',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Collaborative filtering-based recommendation engine with Flask backend, deployed on Linux VPS with comprehensive user analytics.',
      icon: Play,
      tags: ['Machine Learning', 'Flask', 'Collaborative Filtering', 'VPS Management'],
      github: 'https://github.com/Rjaat',
      demo: '#',
      company: 'Object Automation System Solutions',
    },
  ]

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block glass-premium px-6 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-mono text-cyan-300">FEATURED WORK</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-primary">Real-World</span>
            <br />
            <span className="text-white">AI Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing cutting-edge AI solutions deployed in defense, maritime surveillance, 
            and real-world applications with proven impact and technical excellence
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="glass-card rounded-3xl overflow-hidden group hover:glow-primary transition-all duration-500"
            >
              {/* Project Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <project.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass-premium p-3 rounded-xl hover:glow-secondary transition-all duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass-premium p-3 rounded-xl hover:glow-accent transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-mono text-cyan-400 mb-2 block">
                    {project.company}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-primary transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-premium px-3 py-1 rounded-full text-sm text-cyan-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual */}
              <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-30">
                  <project.icon size={80} />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-secondary">More Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-8 rounded-2xl group cursor-pointer hover:glow-secondary transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-all duration-300"
                  >
                    <project.icon size={24} className="text-indigo-400" />
                  </motion.div>
                  
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.2 }}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.2 }}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono text-cyan-400 mb-2 block">
                    {project.company}
                  </span>
                  <h4 className="text-lg font-semibold text-white group-hover:gradient-primary transition-all duration-300 mb-3">
                    {project.title}
                  </h4>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="glass-premium px-2 py-1 rounded text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-white/50 px-2 py-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 space-y-8"
        >
          <h3 className="text-4xl font-bold text-center gradient-primary mb-12">
            Professional Experience
          </h3>
          
          {/* Current Role */}
          <div className="glass-card p-10 rounded-3xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  AI Research Engineer
                </h4>
                <p className="text-cyan-400 font-semibold text-lg">
                  WESEE - Naval R&D Lab, New Delhi
                </p>
              </div>
              <div className="text-right">
                <span className="glass-premium px-4 py-2 rounded-full text-sm font-mono text-cyan-300">
                  Jul 2023 - Present
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold gradient-secondary mb-4">Key Achievements</h5>
                <ul className="space-y-3 text-gray-300">
                  <li>• Led development of offline LLM web applications with RAG pipelines</li>
                  <li>• Built AI podcast generator similar to Google's NotebookLM</li>
                  <li>• Deployed satellite image analytics for maritime surveillance</li>
                  <li>• Managed high-end GPU server infrastructure and Linux administration</li>
                  <li>• Set up private GitLab instance for secure version control</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold gradient-secondary mb-4">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'LLaMA3.1', 'LangChain', 'vLLM', 'YOLOv8', 'Docker', 
                    'CUDA', 'GitLab', 'AWS', 'Linux Admin', 'FastAPI'
                  ].map((tech) => (
                    <span key={tech} className="glass-premium px-3 py-1 rounded-full text-xs text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div className="glass-card p-10 rounded-3xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  AI Intern
                </h4>
                <p className="text-cyan-400 font-semibold text-lg">
                  Object Automation System Solutions Pvt. Ltd., Chennai
                </p>
              </div>
              <div className="text-right">
                <span className="glass-premium px-4 py-2 rounded-full text-sm font-mono text-cyan-300">
                  Sep 2022 - Jan 2023
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold gradient-secondary mb-4">Key Achievements</h5>
                <ul className="space-y-3 text-gray-300">
                  <li>• Developed collaborative filtering movie recommendation system</li>
                  <li>• Managed Linux-based Virtual Private Server infrastructure</li>
                  <li>• Integrated and hosted Learning Management System (LMS)</li>
                  <li>• Administered VPS environment for organizational needs</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold gradient-secondary mb-4">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Flask', 'Machine Learning', 'Linux VPS', 'LMS Integration', 
                    'System Administration', 'Collaborative Filtering'
                  ].map((tech) => (
                    <span key={tech} className="glass-premium px-3 py-1 rounded-full text-xs text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects