import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

const links = [
  { icon: Mail, href: 'mailto:rajgadhwal99@gmail.com', label: 'rajgadhwal99@gmail.com' },
  { icon: Github, href: 'https://github.com/Rjaat', label: 'github.com/Rjaat' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'rajesh-choudharyy' },
  { icon: MapPin, href: '#', label: 'New Delhi, India' },
]

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted max-w-2xl">
            Working on AI infrastructure for constrained environments? I'm always open to 
            discussing defense AI, edge deployments, and systems that need to work where 
            the internet doesn't.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-md">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors group"
            >
              <Icon size={16} className="shrink-0 group-hover:text-accent transition-colors" />
              {label}
            </a>
          ))}
        </div>

        <div className="h-px bg-border mt-24 mb-8" />

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Rajesh K. Jat
        </p>
      </div>
    </section>
  )
}

export default Contact
