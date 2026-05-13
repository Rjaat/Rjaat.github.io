import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code, Zap, Target, Award, Users, Lightbulb, Rocket } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const expertise = [
    {
      icon: Brain,
      title: 'GenAI & LLM Systems',
      description: 'Expert in LLaMA, Mistral, vLLM, and LangChain for building secure self-hosted AI applications with RAG pipelines',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Defence-grade Deployments',
      description: 'Specialized in air-gapped environments, dockerized deployments, and secure AI system architecture',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Computer Vision & Analytics',
      description: 'Advanced object detection with YOLO, satellite image processing, and real-time surveillance systems',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Maritime & Surveillance AI',
      description: 'Specialized in naval applications, maritime object detection, and security-focused AI solutions',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const achievements = [
    { icon: Award, label: 'Years Experience', value: '2+', color: 'text-yellow-400' },
    { icon: Users, label: 'Defence Projects', value: '5+', color: 'text-blue-400' },
    { icon: Lightbulb, label: 'AI Innovations', value: '10+', color: 'text-purple-400' },
    { icon: Rocket, label: 'Systems Deployed', value: '8+', color: 'text-green-400' },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <span className="text-sm font-mono text-cyan-300">ABOUT ME</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-primary">Crafting Tomorrow's</span>
            <br />
            <span className="text-white">Intelligence Today</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            GenAI Engineer with 2+ years of experience building secure self-hosted LLM applications 
            using LLaMA, LangChain, and vLLM. Specialized in designing document-based RAG pipelines 
            and deploying GenAI systems in defence-grade air-gapped environments.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="glass-card p-8 rounded-3xl group hover:glow-primary transition-all duration-500"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                >
                  <item.icon size={32} className="text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-primary transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Story & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2 glass-card p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold gradient-secondary mb-6">
              My Journey in AI
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My journey in AI began during my M.Tech in Artificial Intelligence & Data Science at IIIT Kota, 
                where I developed a deep fascination for the potential of intelligent systems to solve 
                complex real-world problems. This academic foundation led me to specialize in GenAI and 
                large language model applications.
              </p>
              
              <p>
                Currently serving as an AI Research Engineer at WESEE - Naval R&D Lab, New Delhi, I've had 
                the unique opportunity to work on cutting-edge defense applications. Beyond AI development, 
                I manage high-end GPU server infrastructure, administer Linux systems, and have set up 
                private GitLab instances for secure version control in isolated network environments.
              </p>
              
              <p>
                What sets my work apart is the comprehensive approach combining AI development with 
                infrastructure expertise. I've built an AI podcast generator similar to Google's NotebookLM, 
                managed enterprise-grade server infrastructure, and deployed dockerized applications on 
                AWS. My experience includes a successful internship at Object Automation System Solutions 
                where I developed recommendation systems and managed VPS environments.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['Innovation', 'Excellence', 'Impact', 'Collaboration'].map((value) => (
                <span
                  key={value}
                  className="glass-premium px-4 py-2 rounded-full text-sm font-medium text-cyan-300"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-primary mb-6">
              Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass-premium p-6 rounded-2xl group hover:glow-secondary transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon size={24} className={achievement.color} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${achievement.color}`}>
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About