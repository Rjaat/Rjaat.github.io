import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'GenAI & LLM Technologies',
      skills: [
        { name: 'LLaMA & Mistral', level: 95 },
        { name: 'LangChain & LlamaIndex', level: 90 },
        { name: 'vLLM & H2OGPT', level: 88 },
        { name: 'RAG Pipelines', level: 92 },
        { name: 'CrewAI & VLMs', level: 85 },
        { name: 'HuggingFace Transformers', level: 90 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 82 },
      ],
    },
    {
      title: 'AI/ML Frameworks',
      skills: [
        { name: 'PyTorch', level: 88 },
        { name: 'TensorFlow', level: 85 },
        { name: 'OpenCV', level: 90 },
        { name: 'YOLO (Object Detection)', level: 92 },
        { name: 'OCR Technologies', level: 85 },
        { name: 'Coqui TTS', level: 80 },
      ],
    },
    {
      title: 'Web & DevOps',
      skills: [
        { name: 'FastAPI', level: 92 },
        { name: 'ReactJS', level: 85 },
        { name: 'Streamlit', level: 90 },
        { name: 'Docker', level: 88 },
        { name: 'Git/GitLab', level: 85 },
        { name: 'Linux Administration', level: 87 },
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      skills: [
        { name: 'Linux System Administration', level: 92 },
        { name: 'High-end GPU Server Management', level: 90 },
        { name: 'Docker & Containerization', level: 88 },
        { name: 'AWS Cloud Services', level: 80 },
        { name: 'GitLab Setup & Management', level: 85 },
        { name: 'VPS Administration', level: 87 },
      ],
    },
    {
      title: 'Specialized Systems',
      skills: [
        { name: 'Air-gapped Deployments', level: 95 },
        { name: 'Maritime Surveillance', level: 90 },
        { name: 'Satellite Image Analytics', level: 88 },
        { name: 'Interactive Podcast Generation', level: 92 },
        { name: 'Defence-grade Security', level: 90 },
        { name: 'Private Network Infrastructure', level: 87 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      
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
            <span className="text-sm font-mono text-cyan-300">TECHNICAL EXPERTISE</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-primary">Skills &</span>
            <br />
            <span className="text-white">Technologies</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise spanning GenAI, machine learning, full-stack development, 
            and specialized defense applications with proven deployment experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:glow-primary transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-8 gradient-secondary group-hover:gradient-primary transition-all duration-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="glass-premium rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-50 blur-sm" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        {/* Key Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold gradient-secondary mb-8">
            Key Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AI Podcast Generation (NotebookLM-style)',
              'Self-hosted LLM Applications',
              'High-end GPU Server Management',
              'Private GitLab Infrastructure',
              'Defence-grade AI Systems',
              'Maritime Surveillance Analytics',
              'Dockerized AI Deployments',
              'Linux System Administration',
            ].map((specialization, index) => (
              <motion.span
                key={specialization}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                className="glass-premium px-6 py-3 rounded-full text-sm font-medium text-cyan-300 hover:glow-accent transition-all duration-300"
              >
                {specialization}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills