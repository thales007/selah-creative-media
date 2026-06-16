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

export default function MockupB() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#1a1a1a]" style={{fontFamily: 'Georgia, serif'}}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b-2 border-[#1a1a1a]">
        <Image src="/logo.png" alt="Selah Creative Media" width={180} height={43} priority />
        <a href="#contact" className="text-sm font-sans font-medium bg-[#1a1a1a] text-white px-5 py-2 hover:bg-[#f05a1a] transition-colors" style={{fontFamily: 'Arial, sans-serif'}}>
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="px-8 py-24 border-b-2 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl">
            We build digital tools and content that help people do more.
          </h1>
          <p className="text-base text-[#555] max-w-xs leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
            Selah Creative Media is a small company creating practical tools and content for real people.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto w-full px-8 py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-[#f05a1a] mb-12" style={{fontFamily: 'Arial, sans-serif'}}>What We Do</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t-4 border-[#1a1a1a] pt-6">
            <h3 className="text-xl font-bold mb-3">Digital Products</h3>
            <p className="text-[#555] text-sm leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>Web apps and tools built around real workflows and real needs.</p>
          </div>
          <div className="border-t-4 border-[#f05a1a] pt-6">
            <h3 className="text-xl font-bold mb-3">Content</h3>
            <p className="text-[#555] text-sm leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>Resources, guides, and media that inform, educate, and convert.</p>
          </div>
          <div className="border-t-4 border-[#1a1a1a] pt-6">
            <h3 className="text-xl font-bold mb-3">Web Management</h3>
            <p className="text-[#555] text-sm leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>We help select organizations keep their sites running and up to date.</p>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="bg-[#f7f4f0] border-t-2 border-b-2 border-[#1a1a1a] py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#f05a1a] mb-12" style={{fontFamily: 'Arial, sans-serif'}}>Our Work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border-2 border-[#1a1a1a] p-8 hover:border-[#f05a1a] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#f05a1a]" style={{fontFamily: 'Arial, sans-serif'}}>{project.tag}</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-[#555] text-sm leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>{project.description}</p>
                <p className="text-xs text-[#f05a1a] font-bold mt-6" style={{fontFamily: 'Arial, sans-serif'}}>{project.domain}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto w-full px-8 py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-[#f05a1a] mb-6" style={{fontFamily: 'Arial, sans-serif'}}>About</p>
        <p className="text-2xl leading-relaxed max-w-2xl">
          Selah Creative Media is a small company focused on building useful things. We create digital tools, develop content, and occasionally help organizations manage their web presence.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t-2 border-[#1a1a1a] px-8 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#f05a1a] mb-4" style={{fontFamily: 'Arial, sans-serif'}}>Get in Touch</p>
            <h2 className="text-4xl font-bold">Have an idea?<br />Let&apos;s talk.</h2>
          </div>
          <a
            href="mailto:timothyehales@gmail.com"
            className="inline-block bg-[#f05a1a] text-white font-semibold px-10 py-4 hover:bg-[#d44e15] transition-colors text-lg"
            style={{fontFamily: 'Arial, sans-serif'}}
          >
            Send a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#1a1a1a] px-8 py-6 text-sm text-[#999]" style={{fontFamily: 'Arial, sans-serif'}}>
        © {new Date().getFullYear()} Selah Creative Media LLC
      </footer>

    </main>
  );
}
