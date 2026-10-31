import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AlbumCover } from "@/components/album-cover";
import { FooterContent } from "@/components/site-footer";
import { ArrowRight, ArrowUpRight, Bell, LockIcon, Sparkle } from "@/components/sw-icons";
import { tracks } from "@/lib/tracks";
import heroPoster from "@/assets/sw/hero.webp";
import heroVideo1080 from "@/assets/sw/hero-1080.mp4";
import heroVideo720 from "@/assets/sw/hero-720.mp4";
import vault from "@/assets/sw/vault.webp";
import dome from "@/assets/sw/dome.webp";
import aboutCity from "@/assets/sw/about-city.webp";
import shaCutout from "@/assets/sw/sha-cutout.webp";
import blurMusic from "@/assets/sw/blur-music.webp";
import blurFashion from "@/assets/sw/blur-fashion.webp";
import blurFilm from "@/assets/sw/blur-film.webp";
import blurTech from "@/assets/sw/blur-tech.webp";
import blurPink from "@/assets/sw/blur-pink.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sha's Worlds — Where Creativity Meets Consciousness" },
      {
        name: "description",
        content:
          "SHA: music, film, fashion and immersive technology. One multidimensional world. The Debut EP transmits sequentially starting January.",
      },
      { property: "og:title", content: "Sha's Worlds — Where Creativity Meets Consciousness" },
      {
        property: "og:description",
        content: "The Debut EP transmits sequentially starting January. Enter the world.",
      },
      { property: "og:url", content: "https://shasworlds.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://shasworlds.com/og-shasworlds.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://shasworlds.com/og-shasworlds.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://shasworlds.com/" },
      { rel: "preload", as: "image", href: heroPoster, type: "image/webp" },
    ],
  }),
  component: Index,
});

// Sealed covers: the art is pre-blurred and blurred again in CSS, so no sharp art ships until release.
const trackCovers = [blurMusic, blurFashion, blurFilm, blurTech];
const trackLabels = [
  "Track 01",
  "Track 02 · Releasing next",
  "Track 03 · Coming soon",
  "Track 04 · Coming soon",
];

const forms = [
  {
    n: "01",
    title: "Music",
    text: "Sound as frequency. Elevated music that awakens, heals, and expands.",
  },
  {
    n: "02",
    title: "Fashion",
    text: "Wear the future. High-fashion as expression, identity, and art.",
  },
  {
    n: "03",
    title: "Film & Narrative",
    text: "Stories that shift realities. Cinematic worlds that mirror the journey within.",
  },
  {
    n: "04",
    title: "Immersive Technology",
    text: "Build the new Earth. Immersive experiences that connect, transform, and elevate.",
  },
];

function Index() {
  const live = tracks.find((t) => !t.isLocked);

  return (
    <main>
      {/* Hero */}
      <section id="portal" className="hero">
        <div className="hero-media">
          <img
            src={heroPoster}
            alt="New Earth coastline framed by luminous arches, flowering gardens and a marble terrace"
            fetchPriority="high"
            decoding="async"
          />
          <video
            className="hero-video"
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroVideo720} type="video/mp4" media="(max-width: 760px)" />
            <source src={heroVideo1080} type="video/mp4" />
          </video>
        </div>
        <div className="hero-scrim" />
        <div className="hero-content">
          <div style={{ maxWidth: 640 }}>
            <p className="tagline">
              <span>
                Music
                <Sparkle style={{ color: "var(--lilac-soft)" }} />
                Film
              </span>
              <span className="tag-sep">
                <Sparkle style={{ color: "var(--sparkle-pink)" }} />
              </span>
              <span>
                Fashion
                <Sparkle style={{ color: "var(--lilac-soft)" }} />
                Technology
              </span>
            </p>
            <h1 className="display-xl">Sha&apos;s Worlds</h1>
            <p className="hero-lead">Beyond imagination.</p>
            <p className="hero-sub">Step into the higher timelines.</p>
            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Button asChild variant="pill" size="pill">
                <a href="#ep">
                  Next release
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="pillOutline" size="pill">
                <Link to="/story-arc">The Story Arc</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Status strip */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-group">
            <p className="strip-item">
              <span aria-hidden="true" className="live-dot" />
              <span className="strip-label">Now transmitting</span>{" "}
              <span className="strip-dash" style={{ color: "var(--ink-soft)" }}>
                —
              </span>{" "}
              <span style={{ color: "var(--rose)" }}>Track 01 unlocks January</span>
            </p>
            {live?.preSaveUrl ? (
              <a className="strip-alert" href={live.preSaveUrl} target="_blank" rel="noreferrer">
                <Bell />
                Pre-save Track 01
              </a>
            ) : (
              <p className="strip-alert">
                <Bell />
                Pre-save link coming soon
              </p>
            )}
          </div>
          <a
            className="pypd-link"
            href="https://pypd.shasworlds.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Sparkle
              size={14}
              style={{
                color: "var(--lilac)",
                filter: "drop-shadow(0 0 5px rgb(156 134 232 / 80%))",
              }}
            />
            Enter PYPD World
            <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
          </a>
        </div>
      </div>

      {/* 4-track vault */}
      <section id="ep" className="vault">
        <img
          className="vault-bg"
          src={vault}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="vault-scrim" aria-hidden="true" />
        <div className="shell" style={{ position: "relative" }}>
          <div className="vault-copy">
            <p className="eyebrow">The Debut EP</p>
            <h2 className="display-lg">4-Track Rollout Vault</h2>
            <p className="body">
              The rollout begins with four transmissions — each one unlocking a frequency, a theme,
              and a deeper layer of SHA&apos;s multidimensional identity.
            </p>
            <p className="body">
              Tracks release monthly, leading up to the full EP and an expanded body of work across
              music, film, fashion and immersive experiences.
            </p>
          </div>
          <div className="vault-grid">
            {tracks.map((t, i) => (
              <article key={t.label} className={`track ${t.isLocked ? "" : "is-live"}`}>
                <div className="tk-cover" onContextMenu={(e) => e.preventDefault()}>
                  <img
                    className="art"
                    src={trackCovers[i]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  {t.isLocked ? (
                    <div className="cover-center">
                      <span className="lock-chip">
                        <LockIcon size={20} />
                      </span>
                    </div>
                  ) : (
                    <p className="tk-badge">Coming in January</p>
                  )}
                </div>
                <div className="tk-text">
                  <p className={`tk-label ${i >= 2 ? "muted" : ""}`}>{trackLabels[i] ?? t.label}</p>
                  <h3 className="tk-title">{t.isLocked ? "Encrypted" : t.status}</h3>
                  <p className="tk-desc">{t.details}</p>
                  {!t.isLocked && (
                    <p className="tk-presave">
                      <Bell size={16} />
                      {t.preSaveUrl ? (
                        <a href={t.preSaveUrl} target="_blank" rel="noreferrer">
                          Pre-save now
                        </a>
                      ) : (
                        "Pre-save link coming soon"
                      )}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Four forms of creation */}
      <section id="worlds" className="forms">
        <div className="shell">
          <div className="forms-head">
            <div>
              <p className="eyebrow">One vision</p>
              <h2 className="display-lg">Four Forms of Creation</h2>
            </div>
            <p className="kicker" style={{ margin: 0, letterSpacing: "0.24em" }}>
              Infinite expressions
            </p>
          </div>
          <div className="forms-img">
            <img
              src={dome}
              alt="A pink lounge under a glass dome filled with rainbow sound waves, framed by rainbow arches and palms"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="forms-grid">
            {forms.map((f) => (
              <article key={f.n}>
                <div className="form-head">
                  <span>{f.n}</span>
                  <h3>{f.title}</h3>
                </div>
                <p className="form-text">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story arc teaser */}
      <section id="saga" className="sec-pad">
        <div className="shell saga-wrap">
          <div className="saga-covers">
            <div>
              <AlbumCover art={blurPink}>
                <span className="lock-chip">
                  <LockIcon />
                </span>
              </AlbumCover>
            </div>
            <div className="is-main">
              <AlbumCover art={vault} spinning />
            </div>
            <div>
              <AlbumCover art={heroPoster}>
                <span className="lock-chip">
                  <LockIcon />
                </span>
              </AlbumCover>
            </div>
          </div>
          <div className="saga-copy">
            <p className="eyebrow">The Journey</p>
            <h2 className="display-lg">The Story Arc</h2>
            <p className="kicker tight">Origins · Evolution · Expansion</p>
            <ol className="chapters">
              <li className="is-live">
                <span className="n">01</span>
                <span className="t">4-Track Debut EP</span>
                <span className="s">January</span>
              </li>
              <li className="is-locked">
                <span className="n">02</span>
                <span className="t">The Next Chapter</span>
                <span className="s">Encrypted</span>
              </li>
              <li className="is-locked">
                <span className="n">03</span>
                <span className="t">The Next Chapter</span>
                <span className="s">Encrypted</span>
              </li>
              <li>
                <span className="n star">
                  <Sparkle size={16} />
                </span>
                <span className="t">PYPD &amp; The NDA Album</span>
                <span className="s">The unfolding</span>
              </li>
              <li>
                <span className="n pre">Pre</span>
                <span className="t">
                  STOP <span className="by">— by Sharlene</span>
                </span>
                <span className="s">Released</span>
              </li>
            </ol>
            <Button asChild variant="pill" size="pill" className="mt-10">
              <Link to="/story-arc">
                Enter the Story Arc
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About + footer share the city image so the marble floor runs into the footer */}
      <div className="city">
        <img
          className="city-bg"
          src={aboutCity}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="city-veil" aria-hidden="true" />
        <section id="about" className="about-sec">
          <img
            className="about-cut"
            src={shaCutout}
            alt="SHA, rainbow-haired, gazing upward"
            loading="lazy"
            decoding="async"
          />
          <div className="about-inner">
            <div>
              <p className="eyebrow">Intergalactic creator</p>
              <h2 className="display-lg">About SHA</h2>
              <p className="about-lead">
                SHA is a multidimensional creator, wayshower, and visionary architect of New Earth.
                She merges music, film, fashion, and immersive technology to channel frequencies
                that awaken consciousness and elevate culture.
              </p>
              <p className="about-body">
                Through art and innovation, SHA builds worlds that remember who we are — inspiring a
                global movement of creators and dreamers to embody love, freedom, and unity in the
                new era.
              </p>
              <Button asChild variant="pillOutline" size="pill" className="mt-10">
                <Link to="/contact">
                  Contact SHA
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <footer id="connect" className="site-footer">
          <FooterContent />
        </footer>
      </div>
    </main>
  );
}
