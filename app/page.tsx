import Image from "next/image";

const EMAIL = "timothyehales@gmail.com";

// Each book links to timothyhales.com/books (the permanent books URL).
// cover: path under /public once the cover exists, e.g. "/covers/abcs-of-gis.jpg".
const books = [
  {
    title: "ABCs of GIS",
    author: "Timothy Hales",
    cover: "[COVER_IMAGE]",
    color: "#3A3A3A",
  },
];

const isTodo = (v: string) => v.startsWith("[");

export default function Home() {
  return (
    <div className="wrap">
      <header className="head">
        <Image src="/logo.png" alt="Selah Creative Media" width={210} height={50} priority />
      </header>

      <main>
        <section className="intro">
          <h1>An independent imprint publishing books that help young readers discover the world.</h1>
        </section>

        <section aria-labelledby="books-label">
          <p className="label" id="books-label">Books</p>
          <div className="books">
            {books.map((b) => (
              <a key={b.title} href="https://timothyhales.com/books" className="book">
                <div className="book__cover" style={{ background: b.color }}>
                  {isTodo(b.cover) ? (
                    <>
                      <span className="book__cover-title">{b.title}</span>
                      <span className="todo">{b.cover}</span>
                    </>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.cover} alt={`${b.title} cover`} />
                  )}
                </div>
                <p className="book__title">{b.title}</p>
                <p className="book__by">{b.author}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="order">
          <h2>Libraries and booksellers</h2>
          <p>
            For library, bookstore, or classroom orders, email{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} Selah Creative Media LLC</footer>
    </div>
  );
}
