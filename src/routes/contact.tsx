import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactGroups, contactIntro } from "@/lib/contact-links";
import garden from "@/assets/about-bright-pink.jpg";
import profile from "@/assets/sha-about-frameless.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact SHA — Sha's Worlds" },
    { name: "description", content: "Connect with SHA across music, film, fashion and digital art. Email, Instagram, PYPD, STOP and Web3 links." },
    { property: "og:title", content: "Contact SHA — Sha's Worlds" },
    { property: "og:description", content: "Step beyond what you thought was possible. Connect with SHA and explore her worlds." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <main className="contact-page relative isolate min-h-screen overflow-hidden px-5 pb-10 pt-36 md:px-10 md:pt-44">
    <img src={garden} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div className="contact-scrim absolute inset-0 -z-10" />
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div>
        <p className="eyebrow text-xs font-semibold uppercase">Sha's Worlds</p>
        <h1 className="contact-title mt-5 text-5xl leading-tight sm:text-6xl">Contact SHA</h1>
        <p className="mt-7 max-w-lg text-base leading-8">{contactIntro}</p>
        <img src={profile} alt="SHA" className="about-portrait mt-9 h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44" />
      </div>
      <div className="grid content-start gap-x-8 gap-y-9 sm:grid-cols-2">
        {contactGroups.map((group) => <section key={group.title} className="contact-group border-t border-glass-border pt-5">
          <h2 className="font-display text-xl font-medium">{group.title}</h2>
          <div className="mt-4 flex flex-col items-start gap-2">
            {group.links.map((link) => <Button key={link.label} asChild variant="outline" className="contact-link h-auto min-h-10 max-w-full whitespace-normal rounded-full px-4 py-2 text-left">
              <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{link.label}{link.href.startsWith("mailto:") ? <Mail /> : <ArrowUpRight />}</a>
            </Button>)}
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