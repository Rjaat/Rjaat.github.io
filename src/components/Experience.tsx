import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      title: 'AI Research Engineer',
      company: 'WESEE - Naval R&D Lab',
      location: 'New Delhi, India',
      period: 'Jul 2023 - Present',
      description: 'Leading development of cutting-edge AI systems for defense applications with focus on maritime surveillance and secure deployments.',
      achievements: [
        'Built AI podcast generator similar to Google\'s NotebookLM using LLaMA 3.1 + LangChain',
        'Deployed satellite image analytics for maritime object detection with YOLOv8 + OBB',
        'Managed high-end GPU server infrastructure and Linux system administration',
        'Set up private GitLab instance for secure version control in air-gapped environments',
        'Developed real-time surveillance analytics with automatic clip stitching',
        'Implemented FaceNet-based dockyard access control system'
      ],
      technologies: ['LLaMA 3.1', 'LangChain', 'vLLM', 'YOLOv8', 'Docker', 'CUDA', 'GitLab', 'AWS', 'Linux Admin'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      title: 'AI Intern',
      company: 'Object Automation System Solutions Pvt. Ltd.',
      location: 'Chennai, India',
      period: 'Sep 2022 - Jan 2023',
      description: 'Developed machine learning solutions and managed cloud infrastructure for enterprise applications.',
      achievements: [
        'Built collaborative filtering movie recommendation system with Flask backend',
        'Managed Linux-based Virtual Private Server infrastructure',
        'Integrated and hosted Learning Management System (LMS)',
        'Administered VPS environment for organizational needs'
      ],
      technologies: ['Flask', 'Machine Learning', 'Linux VPS', 'LMS Integration', 'System Administration'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      type: 'education',
      title: 'M.Tech in Artificial Intelligence & Data Science',
      company: 'IIIT Kota, MNIT Jaipur Campus',
      location: 'Rajasthan, India',
      period: '2021 - 2023',
      description: 'Advanced studies in AI/ML with focus on deep learning, computer vision, and data science applications.',
      achievements: [
        'Specialized in Generative AI and Large Language Models',
        'Research focus on computer vision and spatiotemporal analysis',
        'Thesis work on maritime surveillance systems'
      ],
      technologies: ['Deep Learning', 'Computer Vision', 'Data Science', 'Research Methodology'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science Engineering',
      company: 'Rajasthan Technical University',
      location: 'Rajasthan, India',
      period: '2017 - 2021',
      description: 'Foundation in computer science with emphasis on software development and system design.',
      achievements: [
        'Strong foundation in algorithms and data structures',
        'Software engineering and system design principles',
        'Database management and web technologies'
      ],
      technologies: ['C++', 'Java', 'Database Systems', 'Web Development'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const certifications = [
    {
      name: 'AWS Fundamentals',
      provider: 'Coursera',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'Developing Cloud Native Applications',
      provider: 'Coursera', 
      year: '2023',
      icon: '🚀'
    }
  ]

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
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
            <span className="text-sm font-mono text-cyan-300">PROFESSIONAL JOURNEY</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-primary">Experience &</span>
            <br />
            <span className="text-white">Education</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive journey through AI research, defense applications, and cutting-edge technology development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} p-4 flex items-center justify-center shadow-lg`}
                  >
                    {exp.type === 'work' ? (
                      <Briefcase size={24} className="text-white" />
                    ) : (
                      <GraduationCap size={24} className="text-white" />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                  className={`glass-card p-8 rounded-3xl ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  } group hover:glow-primary transition-all duration-500`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-cyan-400" />
                      <span className="text-sm font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-primary transition-all duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-semibold gradient-secondary">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold gradient-secondary mb-4 flex items-center">
                      <Award size={18} className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.2 + i * 0.1 }}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass-premium px-3 py-1 rounded-full text-xs text-cyan-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-4xl font-bold text-center gradient-primary mb-12">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-6 rounded-2xl group hover:glow-secondary transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 glass-premium rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:gradient-primary transition-all duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-cyan-400 font-medium">{cert.provider}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience