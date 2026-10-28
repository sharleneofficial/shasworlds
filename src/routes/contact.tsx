import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Gem, Globe, Instagram, Mail, Music2, Send, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactGroups, contactIntro, type ContactIcon } from "@/lib/contact-links";
import garden from "@/assets/about-bright-pink.jpg";
import profile from "@/assets/sha-about-frameless.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact SHA — Sha's Worlds" },
    { name: "description", content: "Connect with SHA across music, film, fashion and digital art. Telegram, Email, Instagram, X, YouTube, Spotify, STOP and PYPD links." },
    { property: "og:title", content: "Contact SHA — Sha's Worlds" },
    { property: "og:description", content: "Step beyond what you thought was possible. Connect with SHA and explore her worlds." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

const ICONS: Record<ContactIcon, (props: { className?: string }) => React.ReactElement> = {
  mail: (p) => <Mail {...p} />,
  send: (p) => <Send {...p} />,
  instagram: (p) => <Instagram {...p} />,
  x: (p) => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" /></svg>,
  youtube: (p) => <Youtube {...p} />,
  music: (p) => <Music2 {...p} />,
  gem: (p) => <Gem {...p} />,
  globe: (p) => <Globe {...p} />,
};

function ContactPage() {
  return <main className="contact-page relative isolate min-h-screen overflow-hidden px-5 pb-10 pt-36 md:px-10 md:pt-44">
    <img src={garden} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div className="contact-scrim absolute inset-0 -z-10" />
    <div className="mx-auto max-w-xl text-center">
      <div className="flex flex-col items-center">
        <p className="eyebrow text-xs font-semibold uppercase">Sha's Worlds</p>
        <h1 className="contact-title mt-5 text-5xl leading-tight sm:text-6xl">Contact SHA</h1>
        <p className="mt-7 max-w-lg text-base leading-8">{contactIntro}</p>
        <img src={profile} alt="SHA" className="about-portrait mt-9 h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44" />
      </div>
      <div className="mt-12 flex flex-col gap-9">
        {contactGroups.map((group) => <section key={group.title} className="contact-group border-t border-glass-border pt-5">
          <h2 className="font-display text-xl font-medium">{group.title}</h2>
          <div className="mt-4 flex flex-col gap-3">
            {group.links.map((link) => {
              const Icon = ICONS[link.icon];
              const mailto = link.href.startsWith("mailto:");
              return <Button key={link.label} asChild variant="outline" className="contact-link h-auto min-h-12 w-full whitespace-normal rounded-lg px-5 py-3">
                <a href={link.href} target={mailto ? undefined : "_blank"} rel="noreferrer" className="flex items-center justify-center gap-3">
                  <Icon className="size-5 shrink-0" />{link.label}{mailto ? <Mail /> : <ArrowUpRight />}
                </a>
              </Button>;
            })}
          </div>
        </section>)}
      </div>
    </div>
    <footer className="footer-panel mx-auto mt-20 flex max-w-6xl flex-col justify-between gap-6 rounded-lg p-6 sm:flex-row sm:items-center">
      <div><p className="font-display text-2xl">Sha's Worlds</p><p className="mt-2 text-xs">Where creativity meets consciousness.</p><p className="mt-3 text-xs opacity-80">© {new Date().getFullYear()} SHA. All Worlds Reserved.</p></div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline" className="portal-outline rounded-full"><Link to="/">Sha's Worlds <ArrowRight /></Link></Button>
        <Button asChild variant="neon" className="rounded-full"><a href="https://pypd.shasworlds.com/" target="_blank" rel="noreferrer">PYPD World <ArrowUpRight /></a></Button>
      </div>
    </footer>
  </main>;
}
