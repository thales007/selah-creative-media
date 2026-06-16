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

// B1 — Warm cream background, orange hero stripe, bold sections
export default function MockupB1() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#faf8f5", color: "#1a1a1a", fontFamily: "Arial, sans-serif" }}>

      {/* Orange top stripe */}
      <div style={{ background: "#f05a1a", height: "5px", width: "100%" }} />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5">
        <Image src="/logo.png" alt="Selah Creative Media" width={200} height={48} priority />
        <a
          href="#contact"
          className="text-sm font-semibold hover:text-[#f05a1a] transition-colors"
          style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-16 pb-20 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
          We build digital tools<br />and content that help<br />people do more.
        </h1>
        <div style={{ width: "60px", height: "4px", background: "#f05a1a", marginBottom: "24px" }} />
        <p className="text-lg text-gray-500 max-w-lg">
          Selah Creative Media creates practical tools and content for real people.
        </p>
      </section>

      {/* What We Do */}
      <section style={{ background: "#1a1a1a", color: "white" }} className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-10" style={{ color: "#f05a1a" }}>What We Do</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Digital Products", desc: "Web apps and tools built around real workflows and real needs." },
              { title: "Content", desc: "Resources, guides, and media that inform, educate, and convert." },
              { title: "Web Management", desc: "We help select organizations keep their sites running and up to date." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="px-8 py-16 max-w-5xl mx-auto w-full">
        <p className="text-xs font-bold tracking-widest uppercase mb-10" style={{ color: "#f05a1a" }}>Our Work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 transition-all hover:border-[#f05a1a]"
              style={{ background: "white", border: "1px solid #e5e0d8" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#f05a1a" }}>{project.tag}</p>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f05a1a] transition-colors" style={{ fontFamily: "Georgia, serif" }}>{project.name}</h3>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.7" }}>{project.description}</p>
              <p className="mt-5 text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform" style={{ color: "#f05a1a" }}>{project.domain} →</p>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-16" style={{ background: "#f0ece6" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "#f05a1a" }}>About</p>
          <p className="text-xl leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#333" }}>
            Selah Creative Media is a small company focused on building useful things. We create digital tools, develop content, and occasionally help organizations manage their web presence.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16" style={{ background: "#f05a1a" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
            Have an idea?<br />Let&apos;s talk.
          </h2>
          <a
            href="mailto:timothyehales@gmail.com"
            className="inline-block font-bold px-10 py-4 transition-colors"
            style={{ background: "white", color: "#f05a1a", fontSize: "15px" }}
          >
            Send a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-5 text-sm" style={{ color: "#999", borderTop: "1px solid #e5e0d8" }}>
        © {new Date().getFullYear()} Selah Creative Media LLC
      </footer>

    </main>
  );
}
