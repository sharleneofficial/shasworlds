import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Film, Shirt, Orbit, ArrowRight, Youtube, Instagram, Disc3, AudioWaveform, CircleHelp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/sha-cinematic.png.asset.json";
import epRoom from "@/assets/ep-room.png.asset.json";
import vaultRoom from "@/assets/vault-pink-staircase.png.asset.json";
import worldMusic from "@/assets/world-music.jpg";
import worldFilm from "@/assets/world-film.jpg";
import worldFashionAsset from "@/assets/world-fashion-runway-4.png.asset.json";
const worldFashion = worldFashionAsset.url;
import worldTech from "@/assets/world-tech.jpg";
import { tracks } from "@/lib/tracks";
import pypdVideo from "@/assets/pypd-space.mp4.asset.json";
import stopVideo from "@/assets/stop-pilot.mp4.asset.json";
import profile from "@/assets/sha-about-frameless.jpg";
import aboutBg from "@/assets/about-bright-pink.jpg";
import cover01Asset from "@/assets/track-01-sealed.jpg.asset.json";
import cover02Asset from "@/assets/track-02-sealed.jpg.asset.json";
import cover03Asset from "@/assets/track-03-sealed.jpg.asset.json";
import cover04Asset from "@/assets/track-04-sealed.jpg.asset.json";

// Sealed covers: the blur is baked into the files, so the sharp art is never online until a track is published.
const covers = [cover01Asset.url, cover02Asset.url, cover03Asset.url, cover04Asset.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sha's Worlds — Where Creativity Meets Consciousness" },
      { name: "description", content: "SHA: music, film, fashion and immersive technology. One multidimensional world. The Debut EP transmits sequentially starting January." },
      { property: "og:title", content: "Sha's Worlds — Where Creativity Meets Consciousness" },
      { property: "og:description", content: "The Debut EP transmits sequentially starting January. Enter the world." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Index,
});

const worlds = [
  { icon: AudioWaveform, title: "Music", img: worldMusic, text: "Sound as frequency. Elevated music that awakens, heals, and expands." },
  { icon: Shirt, title: "Fashion", img: worldFashion, text: "Wear the future. High-fashion as expression, identity, and art." },
  { icon: Film, title: "Film & Narrative", img: worldFilm, text: "Stories that shift realities. Cinematic worlds that mirror the journey within." },
  { icon: Orbit, title: "Immersive Technology", img: worldTech, text: "Build the new Earth. Immersive experiences that connect, transform, and elevate." },
];

const saga: { n: string; tag: string; title: string; text: string; img: string | null; video?: string; imgRight: string | null; locked: boolean; mystery: boolean; featured: boolean; href?: string; links?: { label: string; href: string }[] }[] = [
  { n: "??", tag: "The Ultimate Unfolding", title: "PYPD & The NDA Album", text: "The ultimate publication and personal unfolding. The journey will reveal all.", img: null, video: pypdVideo.url, imgRight: null, locked: false, mystery: true, featured: false, href: "https://pypd.shasworlds.com/" },
  { n: "??", tag: "Coming Soon", title: "The Next Chapter", text: "Details remain encrypted. The next frequency is being prepared.", img: null, imgRight: epRoom.url, locked: true, mystery: false, featured: false },
  { n: "??", tag: "Coming Soon", title: "The Next Chapter", text: "Details remain encrypted. The next frequency is being prepared.", img: null, imgRight: hero.url, locked: true, mystery: false, featured: false },
  { n: "02", tag: "Sha's First Publication", title: "4-Track Debut EP", text: "The rollout of four transmissions unlocking frequencies, themes, and deeper layers of SHA's multidimensional identity.", img: profile, imgRight: vaultRoom.url, locked: false, mystery: false, featured: true },
  // STOP publication: same Listen / Watch / Collect destinations as the live shasworlds.com release page.
  { n: "01", tag: "Released as Sharlene", title: "STOP — The Prequel", text: "Released under the artist identity Sharlene (separate Spotify/VEVO). The awakening from limitation to becoming SHA.", img: null, video: stopVideo.url, imgRight: null, locked: false, mystery: false, featured: false, links: [
    { label: "Listen", href: "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B" },
    { label: "Watch", href: "https://www.youtube.com/@ShasWorldsVEVO" },
    { label: "Collect", href: "https://www.tensor.trade/trade/stop" },
  ] },
];

const XIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z"/></svg>
);

// Only X is a confirmed link; others are placeholders until SHA provides URLs.
const socials = [
  { label: "X", href: "https://x.com/shasworlds", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@ShasWorldsVEVO", icon: Youtube },
  { label: "Spotify", href: "https://open.spotify.com/album/1uN5nOcxylApUOlYhAkGuH", icon: Disc3 },
  { label: "Instagram", href: "https://www.instagram.com/shasworlds", icon: Instagram },
];

function Index() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="portal" className="cinematic-hero relative isolate flex min-h-screen w-full items-center overflow-hidden">
        <img src={hero.url} alt="New Earth coastline framed by luminous arches, flowering gardens and a marble terrace" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="hero-content mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-10">
          <h1 className="hero-title text-[clamp(3rem,8vw,6.5rem)] font-medium leading-none">Sha&apos;s Worlds</h1>
          <p className="hero-tagline mt-6 max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
            Where creativity<br />meets consciousness.
          </p>
          <p className="hero-sub mt-4 max-w-md text-sm leading-relaxed sm:text-base">
            Music. Film. Fashion. Technology.<br />One multidimensional world.
          </p>
          <div className="mt-9">
            <Button asChild variant="neon" size="lg" className="h-12 rounded-full px-8 uppercase"><a href="#ep">Enter the World <ArrowRight /></a></Button>
          </div>
        </div>
        <a href="#ep" aria-label="Discover the Debut EP" className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2"><ArrowRight className="h-5 w-5 rotate-90" /></a>
      </section>

      {/* EP */}
      <section id="ep" className="ep-section relative isolate scroll-mt-24 overflow-hidden">
        <div className="ep-room-frame absolute inset-y-0 right-0 -z-20 w-full overflow-hidden lg:w-[62%]">
          <img src={vaultRoom.url} alt="" aria-hidden="true" loading="lazy" className="ep-room-art h-full w-full object-cover" />
        </div>
        <div className="ep-scrim absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 pb-6 pt-16">
          <div className="max-w-md">
            <p className="eyebrow eyebrow-pill text-xs uppercase">The Debut EP</p>
            <h2 className="glow-heading mt-4 font-display text-3xl font-medium uppercase md:text-4xl">4-Track Rollout Vault</h2>
            <p className="mt-5 text-sm leading-relaxed">
              The rollout begins with four transmissions — each one unlocking a frequency, a theme, and a deeper layer of SHA's multidimensional identity.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Tracks will be released monthly, leading up to the full EP and an expanded body of work that spans across music, film, fashion and immersive experiences.
            </p>
            <p className="eyebrow mt-8 text-xs uppercase">Track Highlights</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((t, index) => (
              <article key={t.label} className={`vault-card vault-${index + 1} lift relative isolate overflow-hidden rounded-xl p-4 ${t.isLocked ? "" : "vault-live"}`}>
                <div className="flex h-14 items-center justify-end pb-3">
                  {!t.isLocked && <p className="release-stamp"><span>Coming in</span><strong>January</strong></p>}
                </div>
                <div className="vault-cover relative aspect-square w-full overflow-hidden rounded-lg">
                  <div role="presentation" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} className="sealed-cover h-full w-full" style={{ backgroundImage: `url(${covers[index]})` }} />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="vault-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                    {t.isLocked ? <Lock className="h-3.5 w-3.5" /> : <AudioWaveform className="h-4 w-4" />}
                  </span>
                  <h3 className="font-sans text-xs uppercase opacity-80">{t.label}</h3>
                </div>
                <p className="mt-1 text-base font-semibold">{t.isLocked ? "Locked / Encrypted" : "Unlocking January"}</p>
                {!t.isLocked ? (
                  <p className="vault-status mt-1 text-[11px] uppercase">Coming in January</p>
                ) : (
                  <p className={`vault-status mt-1 text-[11px] uppercase ${index === 1 ? "transmitting" : ""}`}>
                    {index === 1 ? "Releasing Next" : "Coming Soon"}
                  </p>
                )}
                <p className="mt-3 text-xs leading-relaxed opacity-90">{t.details}</p>
                {!t.isLocked && (
                  t.preSaveUrl ? (
                    <Button asChild variant="neon" className="mt-4 rounded-full uppercase"><a href={t.preSaveUrl} target="_blank" rel="noreferrer">Pre-Save</a></Button>
                  ) : (
                    <p className="mt-3 text-[11px] uppercase opacity-70">Pre-save link coming soon</p>
                  )
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Worlds */}
      <section id="worlds" className="scroll-mt-24">
        <div className="creation-heading-band px-5 pb-12 pt-20">
          <h2 className="text-center font-display text-3xl font-medium uppercase md:text-4xl">4 Forms of Creation</h2>
          <p className="mt-3 text-center text-sm uppercase sm:text-base">One vision. Infinite expressions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {worlds.map(({ icon: Icon, title, img, text }) => (
            <article key={title} className="world-tile relative isolate overflow-hidden">
              <img src={img} alt={title} loading="lazy" width={800} height={1000} className="h-[440px] w-full object-cover sm:h-[500px] lg:h-[580px]" />
              <div className="world-tile-overlay absolute inset-0 flex flex-col items-center justify-end p-6 pb-10 text-center">
                <div className="vault-icon flex h-14 w-14 items-center justify-center rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-sm font-extrabold uppercase">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Saga */}
      <section id="saga" className="relative isolate scroll-mt-24 px-5 pb-24 pt-20">
        <div className="relative mx-auto max-w-4xl">
          <div className="saga-rail" aria-hidden="true" />
          <h2 className="glow-heading text-center font-display text-3xl font-medium uppercase md:text-4xl">The Story Arc</h2>
          <p className="mt-3 text-center text-sm uppercase sm:text-base">Origins. Evolution. Expansion.</p>
          <ol className="relative mt-12 space-y-5 sm:pl-14">
            {saga.map((m, i) => {
              const body = (
                <>
                  {m.video ? (
                    <video src={m.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className={`saga-thumb shrink-0 rounded-xl object-cover ${m.mystery ? "h-28 w-36 sm:h-36 sm:w-52" : "h-20 w-24"}`} />
                  ) : m.img ? (
                    <img src={m.img} alt="" aria-hidden="true" loading="lazy" className="saga-thumb h-20 w-24 shrink-0 rounded-xl object-cover" />
                  ) : (
                    <div className="vault-icon flex h-20 w-24 shrink-0 items-center justify-center rounded-xl"><Lock className="h-6 w-6" /></div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="saga-tag text-[10px] font-bold uppercase opacity-75">{m.n} · {m.tag}</p>
                    <h3 className="mt-1 text-xl font-extrabold">{m.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed opacity-90">{m.text}</p>
                    {m.href && <Button asChild variant="neon" size="sm" className="mt-3 rounded-full uppercase"><a href={m.href} target="_blank" rel="noreferrer">Enter the World <ArrowRight /></a></Button>}
                    {m.links && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.links.map((l) => (
                          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="saga-link text-[10px] font-bold uppercase">{l.label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                  {m.imgRight && (
                    <img src={m.imgRight} alt="" aria-hidden="true" loading="lazy" className={`saga-thumb hidden h-20 w-24 shrink-0 rounded-xl object-cover sm:block ${m.locked ? "saga-thumb-blur" : ""}`} />
                  )}
                  {m.mystery && (
                    <div className="vault-icon hidden h-14 w-14 shrink-0 items-center justify-center rounded-full sm:flex"><CircleHelp className="h-6 w-6" /></div>
                  )}
                </>
              );
              return (
                <li key={i} className={`saga-card lift flex items-center gap-5 rounded-2xl p-5 ${m.locked ? "saga-locked" : ""} ${m.featured ? "saga-card-featured" : ""}`}>
                  {body}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* About + Footer */}
      <section id="about" className="about-section relative isolate scroll-mt-24 overflow-hidden px-5 pb-10 pt-24">
        <img src={aboutBg} style={{ filter: "saturate(0.8) brightness(0.96)" }} alt="" aria-hidden="true" loading="lazy" width={1376} height={768} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-start">
          <img src={profile} alt="SHA portrait" loading="lazy" className="about-portrait h-60 w-60 shrink-0 rounded-full object-cover md:h-72 md:w-72" />
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-light uppercase md:text-4xl">About SHA</h2>
            <p className="mt-4 leading-relaxed opacity-95">SHA is a multidimensional creator, wayshower, and visionary architect of New Earth. She merges music, film, fashion, and immersive technology to channel frequencies that awaken consciousness and elevate culture.</p>
            <p className="mt-4 leading-relaxed opacity-95">Through art and innovation, SHA builds worlds that remember who we are — inspiring a global movement of creators and dreamers to embody love, freedom, and unity in the new era.</p>
            <Button asChild variant="outline" size="lg" className="portal-outline mt-7 h-12 rounded-full px-8 uppercase"><Link to="/contact">Contact Sha <ArrowRight /></Link></Button>
          </div>
        </div>
        <footer id="connect" className="footer-panel mx-auto mt-20 grid max-w-6xl scroll-mt-24 gap-8 rounded-3xl px-8 py-8 md:grid-cols-3 md:divide-x md:divide-white/40">
          <div>
            <p className="font-display text-3xl font-light uppercase">Sha&apos;s Worlds</p>
            <p className="mt-3 text-sm opacity-90">Where creativity meets consciousness.</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <Button asChild variant="ghost" size="sm" className="px-0"><a href="https://pypd.shasworlds.com/" target="_blank" rel="noreferrer">PYPD World ↗</a></Button>
              <Button asChild variant="ghost" size="sm" className="px-0"><Link to="/contact">Contact <ArrowRight /></Link></Button>
            </div>
            <p className="mt-4 text-xs opacity-80">© {new Date().getFullYear()} SHA. All Worlds Reserved.</p>
          </div>
          <div className="text-center md:px-6">
            <p className="text-sm uppercase tracking-widest">Connect</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-orb flex h-11 w-11 items-center justify-center rounded-full">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:pl-8">
            <p className="text-sm uppercase tracking-widest">Join the Portal</p>
            <p className="mt-2 text-xs leading-relaxed opacity-90">Be the first to access releases, worlds, and multidimensional experiences.</p>
            {joined ? (
              <p className="mt-4 rounded-full px-4 py-3 text-xs font-semibold glass-chip">The portal opens soon — you're on the list.</p>
            ) : (
              <form className="portal-form mt-4 flex items-center rounded-full pr-1" onSubmit={(e) => { e.preventDefault(); setJoined(true); }}>
                <input required type="email" placeholder="Enter your email" aria-label="Email address" className="h-11 w-full bg-transparent px-4 text-sm outline-none placeholder:opacity-70" />
                <Button type="submit" variant="ghost" size="icon" className="rounded-full" aria-label="Join the portal"><ArrowRight /></Button>
              </form>
            )}
          </div>
        </footer>
      </section>
    </div>
  );
}
