import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import ScrollReveal from "@/components/ScrollReveal";

const AMAZON_URL =
  "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/ref=sr_1_1?crid=GFFAEDKC30Y6&dib=eyJ2IjoiMSJ9.9Uvfmk11L-HqZOvB7qIVBtr-du2Ns_P2tnLP4FpA1WVNtybSwZNm6Hxym0OcjasyIqzL1Dn9XGJRJuOJ5qpZfPqZL1YtfPgwVcz15d5W1O9jWBYb441TGgA9Uf4DFf-Ak0KFfdNTEhQumJgr64ZAiNfVKHPRSSrDrcUdQAsKDuTVKv8K1z_KiEMGpyUGsXWqJ9beFt8aOSe6wcDrYDNpr8zLIhnW82_S30Vu6f3Ooa4.Nmt3kjZuDx9-auzV_gNkzlRekC25SCdjTjQyND1yBgI&dib_tag=se&keywords=the+portal+door&qid=1775861866&s=books&sprefix=the+portal+door%2Cstripbooks-intl-ship%2C173&sr=1-1";

const AMAZON_SAMPLE_URL =
  "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/ref=sr_1_1?crid=GFFAEDKC30Y6&dib=eyJ2IjoiMSJ9.9Uvfmk11L-HqZOvB7qIVBtr-du2Ns_P2tnLP4FpA1WVNtybSwZNm6Hxym0OcjasyIqzL1Dn9XGJRJuOJ5qpZfPqZL1YtfPgwVcz15d5W1O9jWBYb441TGgA9Uf4DFf-Ak0KFfdNTEhQumJgr64ZAiNfVKHPRSSrDrcUdQAsKDuTVKv8K1z_KiEMGpyUGsXWqJ9beFt8aOSe6wcDrYDNpr8zLIhnW82_S30Vu6f3Ooa4.Nmt3kjZuDx9-auzV_gNkzlRekC25SCdjTjQyND1yBgI&dib_tag=se&keywords=the+portal+door&qid=1775861866&s=books&sprefix=the+portal+door%2Cstripbooks-intl-ship%2C173&sr=1-1&asin=B0GB5S4T8Q&revisionId=9d767905&format=3&depth=1";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen cosmic-field">
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
            <Link href="#author" className="transition hover:text-white">
              Authors
            </Link>
            <Link href="#order" className="transition hover:text-white">
              The Door Is Open
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
          <MobileNav />
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
              scientist, a healer, a musician and a storyteller. Each of them
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
      <section className="relative z-10 overflow-hidden border-y border-cyan/10 bg-abyss/40 py-10 pb-14 backdrop-blur">
        <div className="mx-auto w-full px-6 text-center">
          <p className="font-display italic text-parchment text-xl md:text-[clamp(1.1rem,2vw,2.25rem)]">
            &ldquo;You were never lost. You were simply asleep inside a story
            that forgot your name.&rdquo;
          </p>
          <p className="title-gold mt-4 font-display font-bold italic text-xl md:text-[clamp(1.1rem,2vw,2.25rem)]">
            A door was opened. It was always you. You are not imagining
            it; you are remembering.
          </p>
        </div>
      </section>

      {/* AUTHOR */}
      <ScrollReveal>
      <section id="author" className="relative z-10 px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">The Authors</p>
          <h3 className="font-display text-5xl text-starlight">4 Brooms</h3>
          <div className="hairline mx-auto my-6 w-24" />
          <p className="font-display text-xl italic text-parchment/90">
            A voice for the remembering.
          </p>
          <div className="mt-10 space-y-4 text-lg leading-relaxed text-parchment">
            <p>
              We met at a retreat-workshop, where what began as a shared
              creative experience quietly unfolded into something far deeper.
              From that moment, a connection took root. It felt like
              recognition, as though some part of us had been waiting to find
              the others. Over time, that recognition grew into a friendship
              rooted in trust, creativity, and a shared sense of purpose.
            </p>
            <p>
              For two of us, Ray and Cosmina, now lovingly known as Raymina,
              that connection went further still. It became a lifelong
              partnership.
            </p>
            <p>
              Oceans and continents stretch between us. Ray and Cosmina
              (Raymina) write from Calgary, Alberta. Iliana writes from Port
              Angeles, near Seattle, with her family beside her. Pania writes
              from Russell, in North Auckland, with her family there too.
              Distance has never thinned what we share. Across time zones and
              changing skies, an unseen thread continues to draw us together,
              weaving our lives and our gifts into something meaningful and
              alive.
            </p>
            <p>
              Along the way, we found ourselves laughing about the &ldquo;brooms.&rdquo;
              A playful nod to witches and wizardry, and a quiet symbol of
              something deeper. For us, the broom came to represent the act of
              clearing space, of gently sweeping away what no longer serves,
              making room for growth, clarity, and creation.
            </p>
            <p>
              Each of us felt called to write in our own way, and that calling
              first led us toward a simple idea: a children&rsquo;s book, an
              invitation to reconnect with the wonder of our inner child. As
              the story began to unfold, it revealed a life of its own. It
              expanded beyond what we had imagined, reaching toward readers of
              all ages.
            </p>
            <p>And so, this journey began.</p>
            <p>
              What started as a spark between friends has grown into a shared
              creation, shaped by imagination, by connection, by intention, and
              by the quiet unfolding of something greater than ourselves.
            </p>
            <p>
              We invite you to step through this door with us, and we hope you
              experience the journey as deeply as we have in bringing it to
              life.
            </p>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ORDER / CTA */}
      <ScrollReveal>
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
            </a>
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-cyan/10 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <Link
            href="#top"
            className="group flex items-center gap-3 transition"
            aria-label="Back to top"
          >
            <span className="relative inline-block h-6 w-6">
              <Image
                src="/portal-sigil.png"
                alt="Portal sigil"
                fill
                className="object-contain opacity-80 transition group-hover:opacity-100"
              />
            </span>
            <span className="font-display text-sm tracking-widest text-frost/70 transition group-hover:text-white">
              THE PORTAL DOOR
            </span>
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-frost/50">
            &copy; {new Date().getFullYear()} 4 Brooms · All Rights Reserved
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-frost/60 transition hover:text-white"
          >
            Available on Amazon
          </a>
        </div>
      </footer>
    </main>
  );
}


