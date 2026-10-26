import Image from "next/image";

// Web content leads; publishing is second.
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

const books = [
  {
    title: "ABCs of GIS",
    author: "By Timothy Hales",
    description: "An A-to-Z book that introduces kids to maps, data, and the technology that connects them.",
    cover: "/covers/abcs-of-gis.jpg",
    // TODO: change to https://timothyhales.com/books/abcs-of-gis once that page is live.
    url: "https://timothyhales.com/books",
  },
];

// TODO: replace [BOOKS_EMAIL] with the contact address. No personal Gmail on this page.
const BOOKS_EMAIL = "[BOOKS_EMAIL]";

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
          Content for the web. Books for young readers.
        </h1>
        <p className="mt-8 text-lg max-w-xl" style={{ color: "#888", lineHeight: "1.7" }}>
          Selah Creative Media is a small company that creates websites and content, and publishes children&apos;s books.
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

      {/* Publishing */}
      <section id="publishing" className="px-6 md:px-10 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className={label} style={{ color: "#f05a1a" }}>Publishing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 items-center rounded-2xl p-6 transition-all"
                style={cardStyle}
              >
                <Image
                  src={book.cover}
                  alt={`${book.title} by Timothy Hales`}
                  width={80}
                  height={80}
                  className="flex-shrink-0 w-20 h-20 rounded-lg object-cover"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
                />
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#f05a1a] transition-colors">{book.title}</h3>
                  <p className="text-sm" style={{ color: "#888" }}>{book.author}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#888" }}>{book.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-10 py-16 max-w-2xl mx-auto text-center" style={{ borderTop: "1px solid #f0f0f0" }}>
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#f05a1a" }}>About</h2>
        <p className="text-lg leading-relaxed" style={{ color: "#555" }}>
          Selah Creative Media LLC creates content for the web, publishes children&apos;s books, and manages websites for select clients. More titles are on the way.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-6 md:px-10 py-6 text-sm text-center" style={{ color: "#bbb", borderTop: "1px solid #f0f0f0" }}>
        <p>© {new Date().getFullYear()} Selah Creative Media LLC</p>
        <p className="mt-1">
          Contact: <a href={`mailto:${BOOKS_EMAIL}`} style={{ color: "#888" }}>{BOOKS_EMAIL}</a>
        </p>
      </footer>

    </main>
  );
}
