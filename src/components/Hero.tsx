import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="section-label mb-6">
            AI Systems Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
            Rajesh K. Jat
          </h1>

          <p className="text-base md:text-lg text-muted leading-relaxed mb-12 max-w-2xl">
            I design and build AI systems end-to-end — from model architecture and
            training data to deployed production applications. I've shipped across
            vision, language, and multimodal domains, in environments ranging from
            cloud to fully air-gapped. I own the full stack because the problems
            I work on don't come with a platform team attached.
          </p>

          <div className="flex items-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-white text-surface font-medium rounded-lg hover:bg-white/90 transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="mailto:rajgadhwal99@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-border text-muted hover:text-white hover:border-white/20 rounded-lg transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/Rjaat', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-choudharyy', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rajgadhwal99@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-muted hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
