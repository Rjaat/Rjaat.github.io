import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajgadhwal99@gmail.com',
      href: 'mailto:rajgadhwal99@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 90577 95427',
      href: 'tel:+919057795427',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rjaat', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can 
            bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Send a Message
            </h3>
            <form 
              action="mailto:rajgadhwal99@gmail.com" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white/80 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full glass p-4 rounded-lg bg-transparent border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-white/50"
                    placeholder="John"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white/80 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full glass p-4 rounded-lg bg-transparent border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-white/50"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-white/80 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full glass p-4 rounded-lg bg-transparent border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-white/50"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-white/80 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full glass p-4 rounded-lg bg-transparent border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-white/50"
                  placeholder="Project Collaboration"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-white/80 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full glass p-4 rounded-lg bg-transparent border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-white/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass p-4 rounded-lg font-semibold glow-effect hover:glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Get in Touch
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                I'm always excited to discuss GenAI projects, defense applications, 
                and innovative AI solutions. Whether you need expertise in self-hosted LLM systems, 
                maritime surveillance, or secure AI deployments, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 glass p-4 rounded-lg group hover:glow-effect transition-all duration-300"
                >
                  <div className="glass-dark p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <info.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass p-4 rounded-full glow-effect hover:glow transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-dark p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-3 gradient-text">
                Available for
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• GenAI & LLM Consulting</li>
                <li>• Defence AI Solutions</li>
                <li>• Maritime Surveillance Systems</li>
                <li>• Research Collaborations</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-20 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-white/60">
          © 2024 AI Engineer Portfolio. Built with React, Three.js & ❤️
        </p>
      </motion.footer>
    </section>
  )
}

export default Contact