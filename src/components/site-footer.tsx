import { Link } from "@tanstack/react-router";
import aboutCity from "@/assets/sw/about-city.webp";
import { InstagramIcon, SpotifyIcon, XLogo, YoutubeIcon } from "@/components/sw-icons";

export const socials = [
  { label: "X", href: "https://x.com/shasworlds", icon: XLogo },
  { label: "YouTube", href: "https://www.youtube.com/@ShasWorldsVEVO", icon: YoutubeIcon },
  {
    label: "Spotify",
    href: "https://open.spotify.com/album/1uN5nOcxylApUOlYhAkGuH",
    icon: SpotifyIcon,
  },
  { label: "Instagram", href: "https://www.instagram.com/shasworlds", icon: InstagramIcon },
];

/** Footer content. Home renders it inside the city section; other pages use SiteFooter. */
export function FooterContent() {
  return (
    <div className="footer-inner">
      <div className="footer-row">
        <div style={{ flex: "1 1 320px" }}>
          <p className="footer-title">Sha&apos;s Worlds</p>
          <p style={{ margin: "12px 0 0", fontSize: 15, color: "var(--ink-muted)" }}>
            Where creativity meets consciousness.
          </p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          <Link to="/story-arc">Story Arc</Link>
          <a href="https://pypd.shasworlds.com/" target="_blank" rel="noreferrer">
            PYPD World
          </a>
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
          <p
            className="eyebrow eyebrow-muted"
            style={{ fontSize: 12, letterSpacing: "0.24em", fontWeight: 500 }}
          >
            Connect
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                className="soc"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} SHA. All Worlds Reserved.</p>
    </div>
  );
}

/** Footer with the marble-floor city image; `fadeFrom` matches the section above it. */
export function SiteFooter({ fadeFrom = "var(--ground)" }: { fadeFrom?: string }) {
  return (
    <footer className="site-footer" style={{ ["--footer-top" as string]: fadeFrom }}>
      <img
        src={aboutCity}
        alt=""
        aria-hidden="true"
        className="footer-bg"
        width={1376}
        height={768}
        loading="lazy"
        decoding="async"
      />
      <div className="footer-veil" aria-hidden="true" />
      <FooterContent />
    </footer>
  );
}
