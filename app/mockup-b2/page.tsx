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

// B2 — Minimal white, lots of space, centered, clean sans-serif, orange used sparingly
export default function MockupB2() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6">
        <Image src="/logo.png" alt="Selah Creative Media" width={190} height={46} priority />
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2 rounded-full transition-colors hover:bg-[#1a1a1a] hover:text-white"
          style={{ border: "1.5px solid #1a1a1a", color: "#1a1a1a" }}
        >
          Contact
        </a>
      </nav>

      {/* Hero — centered, lots of air */}
      <section className="flex flex-col items-center text-center px-8 pt-12 pb-14">
        <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: "#f05a1a" }}>
          Selah Creative Media
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl" style={{ letterSpacing: "-0.02em" }}>
          We build digital tools and content that help people do more.
        </h1>
        <p className="mt-8 text-lg max-w-md" style={{ color: "#888", lineHeight: "1.7" }}>
          A small company making practical things for real people.
        </p>
        <a
          href="#work"
          className="mt-6 text-sm font-semibold"
          style={{ color: "#f05a1a", letterSpacing: "0.05em" }}
        >
          See our work ↓
        </a>
      </section>

      {/* What We Do — horizontal rule list */}
      <section className="px-10 pt-6 pb-16 max-w-4xl mx-auto w-full">
        <div className="flex flex-col">
          {[
            { title: "Digital Products", desc: "Web apps and tools built around real workflows and real needs." },
            { title: "Content", desc: "Resources, guides, and media that inform, educate, and convert." },
            { title: "Web Management", desc: "We help select organizations keep their websites running and up to date." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center justify-between py-7"
              style={{ borderTop: i === 0 ? "1px solid #e5e5e5" : "1px solid #e5e5e5", borderBottom: i === 2 ? "1px solid #e5e5e5" : "none" }}
            >
              <h3 className="text-lg font-semibold w-48 flex-shrink-0">{item.title}</h3>
              <p className="mt-2 md:mt-0 text-sm leading-relaxed" style={{ color: "#888", maxWidth: "480px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="px-10 py-16" style={{ background: "#f9f9f9" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-12" style={{ color: "#f05a1a" }}>Our Work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl p-8 transition-all"
                style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#bbb" }}>{project.tag}</span>
                  <span className="text-lg group-hover:text-[#f05a1a] transition-colors" style={{ color: "#ccc" }}>↗</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#f05a1a] transition-colors">{project.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{project.description}</p>
                <p className="mt-5 text-xs font-semibold" style={{ color: "#f05a1a" }}>{project.domain}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-10 py-20 max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#f05a1a" }}>About</p>
        <p className="text-lg leading-relaxed" style={{ color: "#555" }}>
          Selah Creative Media is a small company focused on building useful things. We create digital tools, develop content, and occasionally help organizations manage their web presence. Good tools should be simple, practical, and built for the people who actually use them.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8" style={{ color: "#888" }}>Have a question or want to work together?</p>
        <a
          href="mailto:timothyehales@gmail.com"
          className="inline-block font-semibold px-10 py-4 rounded-full transition-colors"
          style={{ background: "#f05a1a", color: "white", fontSize: "15px" }}
        >
          Send a Message
        </a>
      </section>

      {/* Footer */}
      <footer className="px-10 py-6 text-sm text-center" style={{ color: "#bbb", borderTop: "1px solid #f0f0f0" }}>
        © {new Date().getFullYear()} Selah Creative Media LLC
      </footer>

    </main>
  );
}
