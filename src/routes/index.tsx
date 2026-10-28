import { createFileRoute } from "@tanstack/react-router";
import { Lock, Music, Film, Shirt, Orbit, Sparkles, ArrowRight, Youtube, Instagram, Send, Disc3 } from "lucide-react";
import hero from "@/assets/hero-sha-coast.jpg";
import epCover from "@/assets/ep-cover.jpg";
import worldMusic from "@/assets/world-music.jpg";
import worldFilm from "@/assets/world-film.jpg";
import worldFashion from "@/assets/world-fashion.jpg";
import worldTech from "@/assets/world-tech.jpg";
import profile from "@/assets/sha-profile.png.asset.json";
import banner from "@/assets/sha-banner.png.asset.json";
import { tracks } from "@/lib/tracks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHA's Worlds — Multidimensional Creator of Worlds" },
      { name: "description", content: "SHA: where creativity meets consciousness. Music, film, fashion and immersive technology from New Earth." },
      { property: "og:title", content: "SHA's Worlds — Multidimensional Creator of Worlds" },
      { property: "og:description", content: "The Debut EP transmits sequentially starting January. Enter the era." },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#portal", label: "The Portal" },
  { href: "#ep", label: "Debut EP" },
  { href: "#worlds", label: "Multidimensional Worlds" },
  { href: "#saga", label: "The Saga" },
  { href: "#about", label: "About" },
];

const worlds = [
  { icon: Music, title: "Music", img: worldMusic, text: "The vibrational foundation and sonic transmissions." },
  { icon: Film, title: "Film & Narrative", img: worldFilm, text: "Cinematic universes, music video storylines, and transmedia world-building." },
  { icon: Shirt, title: "Fashion", img: worldFashion, text: "Wearable dimensional expressions, futuristic aesthetics, and physical-digital concepts." },
  { icon: Orbit, title: "Immersive Technology", img: worldTech, text: "Spatial computing, digital consciousness, and future media exploration." },
];

const XIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z"/></svg>
);

// Only X is a confirmed link; others are placeholders until SHA provides URLs.
const socials = [
  { label: "X", href: "https://x.com/shasworlds", icon: XIcon },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Spotify", href: "#", icon: Disc3 },
  { label: "Telegram", href: "#", icon: Send },
  { label: "Instagram", href: "#", icon: Instagram },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
      <Sparkles className="h-3.5 w-3.5 text-coral" /> {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <a href="#portal" className="font-display text-xl font-extrabold tracking-[0.35em] text-aura">SHA</a>
          <ul className="hidden gap-6 text-sm text-muted-foreground lg:flex">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="transition-colors hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
          <a href="#ep" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:shadow-glow">Enter the Era</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="portal" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-7">
          <Eyebrow>Multidimensional Creator of Worlds</Eyebrow>
          <h1 className="text-7xl font-extrabold tracking-[0.2em] text-aura md:text-9xl">SHA</h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Where creativity meets consciousness. Exploring the convergence of music, film, fashion, and immersive technology.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#ep" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:shadow-glow">
              Explore the Debut EP <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#saga" className="glass inline-flex items-center rounded-full px-6 py-3 font-medium transition hover:bg-card">
              The Journey & The Saga
            </a>
          </div>
        </div>
        <div className="shimmer-frame shadow-glow">
          <img src={hero} alt="SHA on the New Earth coastline" width={1600} height={1000} className="aspect-[16/10] w-full rounded-[calc(var(--radius-2xl)-2px)] object-cover" />
        </div>
      </section>

      {/* EP */}
      <section id="ep" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">The Debut EP</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">A four-track journey across New Earth. Transmitting sequentially starting January.</p>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="shimmer-frame mx-auto w-full max-w-md shadow-glow">
            <img src={epCover} alt="The Debut EP — era visual" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-[calc(var(--radius-2xl)-2px)] object-cover" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tracks.map((t) => (
              <article key={t.label} className={`glass lift rounded-2xl p-6 ${t.isLocked ? "opacity-60" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{t.label}</h3>
                  {t.isLocked ? <Lock className="h-4 w-4 text-muted-foreground" /> : <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-aqua" />}
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-coral">{t.status}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.details}</p>
                {!t.isLocked && (
                  t.preSaveUrl ? (
                    <a href={t.preSaveUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">Pre-Save</a>
                  ) : (
                    <span className="mt-5 inline-block cursor-not-allowed rounded-full border border-dashed px-4 py-2 text-sm text-muted-foreground">Pre-Save Link Coming Soon</span>
                  )
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Worlds */}
      <section id="worlds" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">Multidimensional Worlds</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {worlds.map(({ icon: Icon, title, img, text }) => (
            <article key={title} className="glass lift overflow-hidden rounded-2xl">
              <img src={img} alt={title} loading="lazy" width={800} height={1008} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <Icon className="h-5 w-5 text-lavender" />
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Saga */}
      <section id="saga" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">The Saga</h2>
          <p className="mt-4 text-muted-foreground">Historical milestones & origins.</p>
        </div>
        <ol className="relative space-y-8 border-l border-lavender pl-8">
          {[
            { n: "01", title: "STOP — The Prequel", tag: "Released as Sharlene", text: "Released under the artist identity Sharlene (separate Spotify/VEVO). The story of awakening from perceived limitation and becoming SHA." },
            { n: "02", title: "PYPD & The NDA Album", tag: "The Saga's first publication", text: "The Saga's first publication and personal unfolding — what was discovered and channeled. PYPD acts as a pre-publication leading into the wider NDA journey." },
          ].map((m) => (
            <li key={m.n} className="glass rounded-2xl p-6">
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-aura" />
              <div className="grid gap-5 md:grid-cols-[1fr_180px]">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">{m.n} · {m.tag}</p>
                  <h3 className="mt-2 text-2xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed p-3 text-center text-xs text-muted-foreground">
                  [Legacy Visual: {m.title}]
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="glass overflow-hidden rounded-3xl">
          <img src={banner.url} alt="SHA — Creator of Worlds" loading="lazy" className="aspect-[5/2] w-full object-cover" />
          <div className="grid gap-8 p-8 md:grid-cols-[160px_1fr] md:p-12">
            <img src={profile.url} alt="SHA" loading="lazy" className="-mt-24 h-36 w-36 rounded-full border-4 border-glass-border object-cover shadow-glow md:-mt-28" />
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">About SHA</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                SHA is an embodied wayshower, artist, and founder operating at the intersection of creative media and expanded consciousness.
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Creative Advisory & Ecosystem</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["CyreneAI", "0xMyriadFlow", "SeekNirvanaHQ"].map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="glass lift inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SHA's Worlds · New Earth
      </footer>
    </div>
  );
}
