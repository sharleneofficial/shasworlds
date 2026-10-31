import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowUpRight,
  GemIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  MusicIcon,
  SendIcon,
  XLogo,
  YoutubeIcon,
} from "@/components/sw-icons";
import { contactGroups, contactIntro, type ContactIcon } from "@/lib/contact-links";
import aboutCity from "@/assets/sw/about-city.webp";
import shaCutout from "@/assets/sw/sha-cutout.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SHA — Sha's Worlds" },
      {
        name: "description",
        content:
          "Connect with SHA across music, film, fashion and digital art. Telegram, Email, Instagram, X, YouTube, Spotify, STOP and PYPD links.",
      },
      { property: "og:title", content: "Contact SHA — Sha's Worlds" },
      {
        property: "og:description",
        content:
          "Step beyond what you thought was possible. Connect with SHA and explore her worlds.",
      },
      { property: "og:url", content: "https://shasworlds.com/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://shasworlds.com/og-shasworlds-contact.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://shasworlds.com/og-shasworlds-contact.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://shasworlds.com/contact" }],
  }),
  component: ContactPage,
});

const ICONS: Record<ContactIcon, () => ReactElement> = {
  mail: () => <MailIcon />,
  send: () => <SendIcon />,
  instagram: () => <InstagramIcon size={20} />,
  x: () => <XLogo size={18} />,
  youtube: () => <YoutubeIcon size={20} />,
  music: () => <MusicIcon />,
  gem: () => <GemIcon />,
  globe: () => <GlobeIcon />,
};

/** "Sharlene (human journey)" → name plus a softer note, as in the design. */
function LinkLabel({ label }: { label: string }) {
  const m = label.match(/^(.*?)\s*(\([^)]* [^)]*\))$/);
  if (!m) return <span className="label">{label}</span>;
  return (
    <span className="label">
      {m[1]} <span className="note">{m[2]}</span>
    </span>
  );
}

function ContactPage() {
  return (
    <main>
      <section className="contact-hero about-sec">
        <img className="city-bg" src={aboutCity} alt="" aria-hidden="true" decoding="async" />
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, background: "var(--veil)" }}
        />
        <img
          className="about-cut"
          src={shaCutout}
          alt="SHA, rainbow-haired, gazing upward"
          decoding="async"
        />
        <div className="about-inner">
          <div>
            <p className="eyebrow">Sha&apos;s Worlds</p>
            <h1>Contact SHA</h1>
            <p className="about-lead">{contactIntro}</p>
          </div>
        </div>
      </section>

      <div className="contact-list">
        <div>
          {contactGroups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              <div className="links">
                {group.links.map((link) => {
                  const Icon = ICONS[link.icon];
                  const mailto = link.href.startsWith("mailto:");
                  const featured = link.icon === "globe";
                  return (
                    <a
                      key={link.label}
                      className={`lk ${featured ? "is-featured" : ""}`}
                      href={link.href}
                      target={mailto ? undefined : "_blank"}
                      rel="noreferrer"
                    >
                      <Icon />
                      <LinkLabel label={link.label} />
                      <ArrowUpRight size={16} className="out" />
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
