import Image from "next/image";
import Link from "next/link";

const AMAZON_URL =
  "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/ref=sr_1_1?crid=GFFAEDKC30Y6&dib=eyJ2IjoiMSJ9.9Uvfmk11L-HqZOvB7qIVBtr-du2Ns_P2tnLP4FpA1WVNtybSwZNm6Hxym0OcjasyIqzL1Dn9XGJRJuOJ5qpZfPqZL1YtfPgwVcz15d5W1O9jWBYb441TGgA9Uf4DFf-Ak0KFfdNTEhQumJgr64ZAiNfVKHPRSSrDrcUdQAsKDuTVKv8K1z_KiEMGpyUGsXWqJ9beFt8aOSe6wcDrYDNpr8zLIhnW82_S30Vu6f3Ooa4.Nmt3kjZuDx9-auzV_gNkzlRekC25SCdjTjQyND1yBgI&dib_tag=se&keywords=the+portal+door&qid=1775861866&s=books&sprefix=the+portal+door%2Cstripbooks-intl-ship%2C173&sr=1-1";

const AMAZON_SAMPLE_URL =
  "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/ref=sr_1_1?crid=GFFAEDKC30Y6&dib=eyJ2IjoiMSJ9.9Uvfmk11L-HqZOvB7qIVBtr-du2Ns_P2tnLP4FpA1WVNtybSwZNm6Hxym0OcjasyIqzL1Dn9XGJRJuOJ5qpZfPqZL1YtfPgwVcz15d5W1O9jWBYb441TGgA9Uf4DFf-Ak0KFfdNTEhQumJgr64ZAiNfVKHPRSSrDrcUdQAsKDuTVKv8K1z_KiEMGpyUGsXWqJ9beFt8aOSe6wcDrYDNpr8zLIhnW82_S30Vu6f3Ooa4.Nmt3kjZuDx9-auzV_gNkzlRekC25SCdjTjQyND1yBgI&dib_tag=se&keywords=the+portal+door&qid=1775861866&s=books&sprefix=the+portal+door%2Cstripbooks-intl-ship%2C173&sr=1-1&asin=B0GB5S4T8Q&revisionId=9d767905&format=3&depth=1";

export default function Home() {
  return (
    <main className="relative min-h-screen cosmic-field">
      {/* Starfield layer */}
      <div className="pointer-events-none fixed inset-0 starfield opacity-60" />
      <div className="pointer-events-none fixed inset-0 starfield opacity-30 animate-twinkle" />

      {/* Top navigation */}
      <header className="relative z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-block h-8 w-8">
              <Image
                src="/portal-sigil.png"
                alt="Portal sigil"
                fill
                className="object-contain opacity-90"
              />
            </span>
            <span className="font-display text-lg tracking-widest text-mist">
              THE&nbsp;PORTAL&nbsp;DOOR
            </span>
          </Link>
          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.22em] text-frost/80 md:flex">
            <Link href="#remember" className="transition hover:text-white">
              Remembering
            </Link>
            <Link href="#author" className="transition hover:text-white">
              Author
            </Link>
          </div>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden md:inline-flex"
          >
            Order
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12">
          {/* Text column */}
          <div className="reveal md:col-span-7">
            <p className="eyebrow mb-6">
              A Story of Awakening · New Release
            </p>
            <h1 className="title-gold font-display whitespace-nowrap text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
              The Portal Door
            </h1>
            <p className="title-gold mt-5 max-w-xl font-display text-2xl font-bold italic leading-snug md:text-3xl">
              The Time of Remembering
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-parchment md:text-lg">
              There is a threshold in every life where the old explanations
              stop working, and something truer begins to rise from
              underneath. Quiet, unmistakable, ancient.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-parchment md:text-lg">
              Five strangers feel it at the same moment. An artist, a
              scientist, a healer, a musician, a storyteller. Each of them
              hears the same frequency from opposite corners of the world,
              and each of them follows it home.
            </p>
            <p className="mt-4 max-w-xl text-base italic leading-relaxed text-parchment md:text-lg">
              The Portal Door is the story of the five who answered that
              call, and an invitation for the one inside you who has been
              waiting.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Step Through · Order the Book
              </a>
              <a
                href={AMAZON_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Read a Sample
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.22em] text-frost/60">
              <span>By&nbsp;4&nbsp;Brooms</span>
              <span className="text-cyan/40">·</span>
              <span>English Edition</span>
              <span className="text-cyan/40">·</span>
              <span>Available Worldwide</span>
            </div>
          </div>

          {/* Book display column */}
          <div className="md:col-span-5">
            <div className="book-hero-wrap relative mx-auto w-full max-w-lg animate-drift">
              <div className="book-hero-glow" />
              <Image
                src="/book-hero.png"
                alt="The Portal Door — The Time of Remembering, hardcover and stacked copies"
                width={1200}
                height={1200}
                priority
                className="relative z-10 block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE QUOTE */}
      <section className="relative z-10 border-y border-cyan/10 bg-abyss/40 py-10 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-display text-xl italic text-parchment md:text-2xl">
            &ldquo;You were never lost. You were simply asleep inside a story
            that forgot your name.&rdquo;
          </p>
          <p className="title-gold mt-4 font-display text-xl font-bold italic md:text-2xl">
            A door was opened. It was always you. You are not imagining
            it; you are remembering.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section id="remember" className="relative z-10 px-6 pb-8 md:px-12 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-4">What You Will Remember</p>
              <h3 className="font-display text-3xl text-starlight md:text-4xl">
                Four passages through the door
              </h3>
            </div>
            <div className="hairline hidden w-48 md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <article key={p.title} className="card rounded-sm p-8 transition">
                <div className="mb-6 font-display text-3xl text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-3 font-display text-2xl text-starlight">
                  {p.title}
                </h4>
                <p className="text-sm leading-relaxed text-parchment/90">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERLUDE — portrait of the sigil */}
      <section className="relative z-10 overflow-hidden px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12">
          <div className="relative mx-auto w-full max-w-sm md:col-span-6">
            <div className="book-hero-glow" />
            <Image
              src="/book-single.png"
              alt="The Portal Door — hardcover book"
              width={800}
              height={1200}
              className="relative z-10 block h-auto w-full"
            />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">The Time of Remembering</p>
            <h3 className="font-display text-4xl leading-tight text-starlight md:text-5xl">
              A moment the planet has been waiting for.
            </h3>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-parchment">
              Across continents, languages, and traditions, the same whisper is
              rising: it is time. Time to remember why you came, what you
              carry, and how to walk softly through a world that is also
              waking up.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={AMAZON_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Begin Reading
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="relative z-10 px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">The Author</p>
            <h3 className="font-display text-5xl text-starlight">4 Brooms</h3>
            <div className="hairline my-6 w-24" />
            <p className="font-display text-xl italic text-parchment/90">
              A voice for the remembering.
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-parchment">
              4 Brooms writes from the quiet place where memory and meaning
              meet. The Portal Door — The Time of Remembering is a distillation
              of years spent listening: to the land, to the sky, and to the
              long-buried knowing that lives inside every one of us.
            </p>
          </div>
        </div>
      </section>

      {/* ORDER / CTA */}
      <section id="order" className="relative z-10 px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">The Door Is Open</p>
          <h3 className="font-display text-5xl leading-tight text-starlight md:text-7xl">
            Will you step <span className="italic text-cyan">through?</span>
          </h3>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-parchment">
            The Portal Door — The Time of Remembering is available now in
            English, shipping to readers around the planet.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Paperback
            </a>
            <a
              href={AMAZON_SAMPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Read a Sample
            </a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.24em] text-frost/50">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Amazon
            </a>{" "}
            · Barnes &amp; Noble · Independent Booksellers Worldwide
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-cyan/10 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative inline-block h-6 w-6">
              <Image
                src="/portal-sigil.png"
                alt="Portal sigil"
                fill
                className="object-contain opacity-80"
              />
            </span>
            <span className="font-display text-sm tracking-widest text-frost/70">
              THE PORTAL DOOR
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-frost/50">
            &copy; {new Date().getFullYear()} 4 Brooms · All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-frost/60">
            <Link href="#" className="transition hover:text-white">
              Contact
            </Link>
            <Link href="#" className="transition hover:text-white">
              Press
            </Link>
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

const PILLARS = [
  {
    title: "The Veil",
    body: "A clear seeing of the story you were handed — and a gentle parting of the curtain between noise and knowing.",
  },
  {
    title: "The Breath",
    body: "The simplest practice, returned to its original power: coming home to the body, the moment, the now.",
  },
  {
    title: "The Geometry",
    body: "Ancient patterns of coherence — how the cosmos writes itself through you, and how to read the language again.",
  },
  {
    title: "The Walk",
    body: "What remembering asks of a life: softness, courage, and the quiet courage to live as who you already are.",
  },
];

