import Image from "next/image";

const projects = [
  {
    name: "SoleScore",
    url: "https://solescore.app",
    domain: "solescore.app",
    description: "A shoe resell profit analyzer that helps resellers know their numbers before they buy.",
  },
  {
    name: "ResellingShoes.com",
    url: "https://resellingshoes.com",
    domain: "resellingshoes.com",
    description: "A content hub with guides, tips, and resources for shoe resellers at every level.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Image
          src="/logo.png"
          alt="Selah Creative Media"
          width={220}
          height={53}
          priority
        />
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#f05a1a] text-[#f05a1a] hover:bg-[#f05a1a] hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] max-w-2xl leading-tight">
          We build digital tools and content that help people do more.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Selah Creative Media is a small company that creates practical tools and content for real people.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d2d2d] mb-10 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#f05a1a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital Products</h3>
              <p className="text-gray-500 text-sm">Web apps and tools built around real workflows and real needs.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#f05a1a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Content</h3>
              <p className="text-gray-500 text-sm">Resources, guides, and media that inform, educate, and convert.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#f05a1a] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Web Management</h3>
              <p className="text-gray-500 text-sm">We help select organizations keep their websites running and up to date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d2d2d] mb-10 text-center">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#f05a1a] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-[#2d2d2d]">{project.name}</h3>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#f05a1a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                <span className="text-xs text-[#f05a1a] font-medium">{project.domain}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d2d2d] mb-6">About</h2>
          <p className="text-gray-600 leading-relaxed">
            Selah Creative Media is a small company focused on building useful things. We create digital tools, develop content, and occasionally help organizations manage their web presence. We believe good tools should be simple, practical, and built for the people who actually use them.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d2d2d] mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-8">Have a question or want to work together? Send us a message.</p>
          <a
            href="mailto:timothyehales@gmail.com"
            className="inline-block bg-[#f05a1a] text-white font-medium px-8 py-3 rounded-full hover:bg-[#d44e15] transition-colors"
          >
            Send a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Selah Creative Media LLC. All rights reserved.
      </footer>

    </main>
  );
}
