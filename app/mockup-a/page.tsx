import Image from "next/image";

const projects = [
  {
    name: "SoleScore",
    url: "https://solescore.app",
    domain: "solescore.app",
    description: "A shoe resell profit analyzer that helps resellers know their numbers before they buy.",
    tag: "Digital Product",
  },
  {
    name: "ResellingShoes.com",
    url: "https://resellingshoes.com",
    domain: "resellingshoes.com",
    description: "A content hub with guides, tips, and resources for shoe resellers at every level.",
    tag: "Content",
  },
];

export default function MockupA() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/logo.png" alt="Selah Creative Media" width={180} height={43} priority className="brightness-0 invert" />
        <a href="#contact" className="text-sm text-[#f05a1a] hover:underline font-medium">Contact →</a>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-20 pb-28 max-w-5xl">
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f05a1a] mb-6 border border-[#f05a1a] px-3 py-1 rounded-full">
          Selah Creative Media
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-white">
          We build digital<br />
          <span className="text-[#f05a1a]">tools</span> and content<br />
          that help people<br />
          do more.
        </h1>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10 mx-8" />

      {/* What We Do */}
      <section className="px-8 py-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-10">What We Do</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <div className="bg-[#0f0f0f] p-8">
            <div className="text-3xl font-bold text-[#f05a1a] mb-4">01</div>
            <h3 className="text-lg font-semibold mb-2">Digital Products</h3>
            <p className="text-white/50 text-sm leading-relaxed">Web apps and tools built around real workflows and real needs.</p>
          </div>
          <div className="bg-[#0f0f0f] p-8">
            <div className="text-3xl font-bold text-[#f05a1a] mb-4">02</div>
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            <p className="text-white/50 text-sm leading-relaxed">Resources, guides, and media that inform, educate, and convert.</p>
          </div>
          <div className="bg-[#0f0f0f] p-8">
            <div className="text-3xl font-bold text-[#f05a1a] mb-4">03</div>
            <h3 className="text-lg font-semibold mb-2">Web Management</h3>
            <p className="text-white/50 text-sm leading-relaxed">We help select organizations keep their websites running and up to date.</p>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="px-8 py-20 bg-[#161616]">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-10">Our Work</p>
        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-white/10 hover:bg-white/5 px-4 -mx-4 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="text-white/20 text-sm mt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl font-semibold group-hover:text-[#f05a1a] transition-colors">{project.name}</h3>
                  <p className="text-white/50 text-sm mt-1 max-w-md">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0 ml-10 md:ml-0">
                <span className="text-xs border border-white/20 text-white/40 px-3 py-1 rounded-full">{project.tag}</span>
                <span className="text-[#f05a1a] text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-20 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">About</p>
        <p className="text-xl text-white/70 leading-relaxed">
          Selah Creative Media is a small company focused on building useful things. We create digital tools, develop content, and occasionally help organizations manage their web presence. Good tools should be simple, practical, and built for the people who actually use them.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-[#f05a1a]">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Get in Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Have an idea?<br />Let&apos;s talk.</h2>
        <a
          href="mailto:timothyehales@gmail.com"
          className="inline-block bg-white text-[#f05a1a] font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          Send a Message
        </a>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-sm text-white/20 bg-[#0f0f0f]">
        © {new Date().getFullYear()} Selah Creative Media LLC
      </footer>

    </main>
  );
}
