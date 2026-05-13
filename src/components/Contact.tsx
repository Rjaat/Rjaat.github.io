import { Mail, Github, Linkedin, MapPin, FileText } from 'lucide-react'

const links = [
  { icon: Mail, href: 'mailto:rajgadhwal99@gmail.com', label: 'rajgadhwal99@gmail.com' },
  { icon: Github, href: 'https://github.com/Rjaat', label: 'github.com/Rjaat' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'linkedin.com/in/rajesh-choudharyy' },
  { icon: MapPin, href: 'https://maps.google.com/?q=New+Delhi+India', label: 'New Delhi, India' },
  { icon: FileText, href: '/Rajesh_Jat_Resume.pdf', label: 'Resume (PDF)' },
]

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-muted max-w-2xl">
            Working on AI systems for constrained environments? I respond within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-md">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 py-2 text-sm text-muted hover:text-white transition-colors group border-b border-border/50 last:border-0"
            >
              <Icon size={14} className="shrink-0 text-muted/50 group-hover:text-white/70 transition-colors" />
              {label}
            </a>
          ))}
        </div>

        <div className="h-px bg-border/50 mt-24 mb-8" />

        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Rajesh K. Jat
        </p>
      </div>
    </section>
  )
}

export default Contact
