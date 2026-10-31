import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AlbumCover } from "@/components/album-cover";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, ArrowUpRight, LockIcon, Sparkle } from "@/components/sw-icons";
import signature from "@/assets/sw/signature.png";
import vault from "@/assets/sw/vault.webp";
import heroPoster from "@/assets/sw/hero.webp";
import blurPink from "@/assets/sw/blur-pink.webp";
import pypd from "@/assets/sw/pypd.webp";
import spacePastel from "@/assets/sw/space-pastel.webp";
import stopCover from "@/assets/sw/stop-cover.webp";

export const Route = createFileRoute("/story-arc")({
  head: () => ({
    meta: [
      { title: "The Story Arc — Sha's Worlds" },
      {
        name: "description",
        content:
          "Origins, evolution, expansion: SHA's Debut EP, the encrypted chapters to come, PYPD & The NDA Album, and STOP — the prequel released as Sharlene.",
      },
      { property: "og:title", content: "The Story Arc — Sha's Worlds" },
      {
        property: "og:description",
        content:
          "From SHA's first publication to the ultimate unfolding — and the prequel where it all began.",
      },
      { property: "og:url", content: "https://shasworlds.com/story-arc" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://shasworlds.com/og-shasworlds.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://shasworlds.com/og-shasworlds.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://shasworlds.com/story-arc" }],
  }),
  component: StoryArcPage,
});

const stopLinks = [
  { label: "Watch", href: "https://www.youtube.com/@ShasWorldsVEVO" },
  { label: "Listen", href: "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B" },
  { label: "Collect", href: "https://www.tensor.trade/trade/stop" },
];

const pypdStars = [
  { size: 14, color: "#E7A3D0", style: { top: "14%", right: "6%" } },
  { size: 10, color: "#B79CF0", style: { top: "30%", right: "44%" } },
  { size: 18, color: "#C7B4F5", style: { bottom: "12%", right: "40%" } },
  { size: 9, color: "#E7A3D0", style: { bottom: "22%", right: "2%" } },
];

function EncryptedChapter({
  n,
  art,
  glow,
  coverBg,
  reverse,
}: {
  n: string;
  art: string;
  glow: string;
  coverBg: string;
  reverse: boolean;
}) {
  const copy = (
    <div>
      <p className="eyebrow eyebrow-muted">Chapter {n} · Coming soon</p>
      <h2 className="display-md">The Next Chapter</h2>
      <p className="kicker" style={{ marginTop: 14 }}>
        Encrypted
      </p>
      <p className="lede">Details remain encrypted. The next frequency is being prepared.</p>
    </div>
  );
  const cover = (
    <div className="art-col">
      <div className="art-glow" aria-hidden="true" style={{ ["--glow" as string]: glow }} />
      <div className="art-frame">
        <AlbumCover art={art} className="" artStyle={{ filter: "blur(22px) saturate(1.1)" }}>
          <span className="lock-chip lg">
            <LockIcon size={24} strokeWidth={1.5} />
          </span>
        </AlbumCover>
      </div>
    </div>
  );
  return (
    <article
      id={`ch${Number(n)}`}
      className={`chapter ${reverse ? "reverse" : ""}`}
      style={{ ["--cover-bg" as string]: coverBg }}
    >
      <span
        className="node"
        aria-hidden="true"
        style={{ borderColor: glow.replace(/0\.24\)$/, "0.6)") }}
      />
      {reverse ? (
        <>
          {copy}
          {cover}
        </>
      ) : (
        <>
          {cover}
          {copy}
        </>
      )}
    </article>
  );
}

function StoryArcPage() {
  return (
    <main>
      <section className="arc-intro">
        <p className="eyebrow">Sha&apos;s Worlds</p>
        <h1>The Story Arc</h1>
        <p className="kicker tight">Origins · Evolution · Expansion</p>
        <p className="lede">
          From SHA&apos;s first publication to the ultimate unfolding — and the prequel where it all
          began.
        </p>
      </section>

      <div className="arc">
        <div className="rail" aria-hidden="true" />

        {/* Chapter 01 — the Debut EP */}
        <article id="ep" className="chapter">
          <span className="node is-live" aria-hidden="true" />
          <div className="art-col">
            <div className="art-glow" aria-hidden="true" />
            <div className="art-frame">
              <AlbumCover
                art={vault}
                spinning
                artStyle={{ objectPosition: "62% center", filter: "blur(20px) saturate(1.25)" }}
                className="ep-cover"
              />
              <div
                className="cover-center"
                style={{ flexDirection: "column", justifyContent: "flex-end", paddingBottom: 24 }}
              >
                <span className="unlock-pill">Unlocks in January</span>
              </div>
            </div>
          </div>
          <div>
            <p className="release-pill">First release · January</p>
            <p className="eyebrow">Chapter 01 · Sha&apos;s First Publication</p>
            <h2 className="display-md">4-Track Debut EP</h2>
            <p className="lede">
              The rollout of four transmissions unlocking frequencies, themes, and deeper layers of
              SHA&apos;s multidimensional identity.
            </p>
            <Button asChild variant="pill" size="pill">
              <Link to="/" hash="ep">
                Open the vault
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </article>

        <EncryptedChapter
          n="02"
          art={blurPink}
          glow="rgba(200,120,220,0.24)"
          coverBg="#EEE3F7"
          reverse
        />
        <EncryptedChapter
          n="03"
          art={heroPoster}
          glow="rgba(140,130,240,0.24)"
          coverBg="#E4E0F6"
          reverse={false}
        />

        {/* PYPD — the ultimate unfolding */}
        <article id="pypd" className="chapter reverse chapter-pypd">
          <img
            className="pypd-nebula"
            src={spacePastel}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <span className="node is-star" aria-hidden="true">
            <Sparkle size={26} />
          </span>
          {pypdStars.map((s, i) => (
            <Sparkle
              key={i}
              size={s.size}
              className="pypd-star"
              style={{ color: s.color, ...s.style }}
            />
          ))}
          <div>
            <p className="eyebrow eyebrow-lilac">Chapter ?? · The Ultimate Unfolding</p>
            <h2 className="display-md">PYPD &amp; The NDA Album</h2>
            <p className="lede">
              The ultimate publication and personal unfolding. The journey will reveal all.
            </p>
            <Button asChild variant="pill" size="pill">
              <a href="https://pypd.shasworlds.com/" target="_blank" rel="noreferrer">
                Enter the World
                <ArrowUpRight size={18} />
              </a>
            </Button>
          </div>
          <div className="art-col">
            <div className="art-frame pypd-cover">
              <div className="cover">
                <div className="cover-disc" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ opacity: 0.22 }}>
                    <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.6"
                      fill="none"
                      stroke="#2A1433"
                      strokeWidth="2.2"
                    />
                  </svg>
                </div>
                <img
                  className="cover-sig"
                  src={signature}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="pypd-art"
                  src={pypd}
                  alt="SHA in luminous blue light — PYPD cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pypd-tint" aria-hidden="true" />
                <p className="pypd-kicker">The First Transmission</p>
                <div className="pypd-title">
                  <p>PYPD</p>
                  <p>000</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* STOP — the prequel */}
      <section id="prequel" className="prequel">
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="prequel-rule">
            <span aria-hidden="true" />
            <p className="eyebrow eyebrow-ember">The Prequel · Released as Sharlene</p>
            <span aria-hidden="true" />
          </div>
          <article className="chapter" style={{ marginTop: 72, padding: 0 }}>
            <div className="art-col">
              <div
                className="art-glow"
                aria-hidden="true"
                style={{ ["--glow" as string]: "rgba(255,150,90,0.3)" }}
              />
              <div className="art-frame">
                <img
                  className="stop-cover"
                  src={stopCover}
                  alt="STOP by Sharlene — single cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-ember">Prequel · Released</p>
              <h2 className="display-md">STOP</h2>
              <p className="kicker" style={{ marginTop: 14 }}>
                By Sharlene — Awakening
              </p>
              <p className="lede">
                Released under the artist identity Sharlene. The awakening from limitation to
                becoming SHA.
              </p>
              <div className="link-row">
                {stopLinks.map((l) => (
                  <Button key={l.label} asChild variant="pillOutline" size="pillSm">
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter fadeFrom="#FFFFFF" />
    </main>
  );
}
