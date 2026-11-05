import Image from "next/image";

const sites = [
  {
    name: "SteelBlue Kitchen",
    url: "https://steelbluekitchen.com",
    domain: "steelbluekitchen.com",
    description: "Honest reviews of kitchen knives and cooking gear, tested in a real kitchen.",
  },
  {
    name: "ResellingShoes.com",
    url: "https://resellingshoes.com",
    domain: "resellingshoes.com",
    description: "Guides, strategies, and resources for everyday shoe resellers sourcing from thrift stores and yard sales.",
  },
];

const label = "text-xs font-semibold tracking-widest uppercase mb-10";
const card = "group block rounded-2xl p-8 transition-all";
const cardStyle = { background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" };

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Header */}
      <header className="flex items-center px-6 md:px-10 py-6">
        <Image src="/logo.png" alt="Selah Creative Media" width={190} height={46} priority />
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 md:px-8 pt-12 pb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl" style={{ letterSpacing: "-0.02em" }}>
          Websites and content for the web.
        </h1>
        <p className="mt-8 text-lg max-w-xl" style={{ color: "#888", lineHeight: "1.7" }}>
          Selah Creative Media is a small company that creates websites and content.
        </p>
      </section>

      {/* Content */}
      <section id="content" className="px-6 md:px-10 py-16" style={{ background: "#f9f9f9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className={label} style={{ color: "#f05a1a" }}>Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={card}
                style={cardStyle}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[#f05a1a] transition-colors">{site.name}</h3>
                  <span className="text-lg group-hover:text-[#f05a1a] transition-colors" style={{ color: "#ccc" }}>↗</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{site.description}</p>
                <p className="mt-5 text-xs font-semibold" style={{ color: "#f05a1a" }}>{site.domain}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-10 py-16 max-w-2xl mx-auto text-center" style={{ borderTop: "1px solid #f0f0f0" }}>
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#f05a1a" }}>About</h2>
        <p className="text-lg leading-relaxed" style={{ color: "#555" }}>
          Selah Creative Media LLC creates content for the web and manages websites for select clients.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-6 md:px-10 py-6 text-sm text-center" style={{ color: "#bbb", borderTop: "1px solid #f0f0f0" }}>
        <p>© {new Date().getFullYear()} Selah Creative Media LLC</p>
      </footer>

    </main>
  );
}
