import { createFileRoute } from "@tanstack/react-router";
import { Lock, Music, Film, Shirt, Orbit, Sparkles, ArrowRight, Youtube, Instagram, Send, Disc3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/sha-cinematic.png.asset.json";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    <span className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-medium uppercase sm:text-xs">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="min-h-screen">
      <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-10">
          <a href="#portal" className="font-display text-2xl font-extrabold">SHA</a>
          <ul className="hidden gap-7 text-xs font-medium lg:flex">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="nav-link">{n.label}</a></li>)}
          </ul>
          <Button asChild className="rounded-full px-5"><a href="#ep">Enter the Era <ArrowRight /></a></Button>
        </nav>
      </header>

      <section id="portal" className="cinematic-hero relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
        <img src={hero.url} alt="New Earth coastline framed by luminous arches, flowering gardens and a marble terrace" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="hero-content mx-auto flex max-w-3xl flex-col items-center px-5 pb-24 pt-32 text-center">
          <Eyebrow>Multidimensional Creator of Worlds</Eyebrow>
          <h1 className="hero-title mt-6 font-sans text-8xl font-extrabold sm:text-9xl">SHA</h1>
          <p className="hero-tagline mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            Where creativity meets consciousness. Exploring the convergence of music, film, fashion, and immersive technology.
          </p>
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="electric" size="lg" className="h-12 w-full rounded-full px-6 sm:w-auto"><a href="#ep">Explore the Debut EP <ArrowRight /></a></Button>
            <Button asChild variant="hero" size="lg" className="h-12 w-full rounded-full px-6 sm:w-auto"><a href="#saga">The Journey & The Saga</a></Button>
          </div>
        </div>
        <a href="#ep" aria-label="Discover the Debut EP" className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2"><ArrowRight className="h-5 w-5 rotate-90" /></a>
      </section>

      {/* EP */}
      <section id="ep" className="ep-section scroll-mt-24 px-5 py-20">
        <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">The Debut EP</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">A four-track journey across New Earth. Transmitting sequentially starting January.</p>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="artwork-frame mx-auto w-full max-w-md">
            <img src={epCover} alt="The Debut EP — era visual" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-lg object-cover" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tracks.map((t, index) => (
              <article key={t.label} className={`track-card vault-card vault-${index + 1} lift relative isolate overflow-hidden rounded-lg p-6 ${t.isLocked ? "" : "featured-card"}`}>
                <img src={epCover} alt="" aria-hidden="true" loading="lazy" className="vault-art absolute inset-0 -z-20 h-full w-full object-cover" />
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold uppercase">{t.label}</h3>
                  {t.isLocked ? <Lock className="vault-lock h-7 w-7" /> : <Sparkles className="vault-lock h-6 w-6" />}
                </div>
                <p className={`vault-status mt-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-bold uppercase ${t.isLocked ? "" : "transmitting"}`}>
                  {!t.isLocked && <span className="status-dot h-1.5 w-1.5 rounded-full" />}
                  {t.isLocked ? t.status : "Transmitting January"}
                </p>
                <p className="vault-details mt-4 text-sm leading-relaxed">{t.details}</p>
                {!t.isLocked && (
                  t.preSaveUrl ? (
                    <Button asChild className="mt-5 rounded-full"><a href={t.preSaveUrl} target="_blank" rel="noreferrer">Pre-Save</a></Button>
                  ) : (
                    <Button disabled variant="outline" className="mt-5 h-auto min-h-9 whitespace-normal rounded-full text-xs">Pre-Save Link Coming Soon</Button>
                  )
                )}
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Worlds */}
      <section id="worlds" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">Multidimensional Worlds</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {worlds.map(({ icon: Icon, title, img, text }) => (
            <article key={title} className="content-card lift overflow-hidden rounded-lg">
              <img src={img} alt={title} loading="lazy" width={800} height={1008} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <Icon className="h-5 w-5 text-primary" />
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
        <ol className="relative space-y-8 border-l border-border pl-8">
          {[
            { n: "01", title: "STOP — The Prequel", tag: "Released as Sharlene", text: "Released under the artist identity Sharlene (separate Spotify/VEVO). The story of awakening from perceived limitation and becoming SHA." },
            { n: "02", title: "PYPD & The NDA Album", tag: "The Saga's first publication", text: "The Saga's first publication and personal unfolding — what was discovered and channeled. PYPD acts as a pre-publication leading into the wider NDA journey." },
          ].map((m) => (
            <li key={m.n} className="content-card rounded-lg p-6">
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-aqua" />
              <div className="grid gap-5 md:grid-cols-[1fr_180px]">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{m.n} · {m.tag}</p>
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
        <div className="overflow-hidden border-y border-border">
          <img src={banner.url} alt="SHA — Creator of Worlds" loading="lazy" className="aspect-[5/2] w-full object-cover" />
          <div className="grid gap-8 p-8 md:grid-cols-[160px_1fr] md:p-12">
            <img src={profile.url} alt="SHA" loading="lazy" className="relative -mt-24 h-36 w-36 rounded-full border-4 border-background object-cover md:-mt-28" />
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
                  <Button key={label} asChild variant="outline" className="rounded-full"><a href={href} target="_blank" rel="noreferrer"><Icon className="h-4 w-4" /> {label}</a></Button>
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
