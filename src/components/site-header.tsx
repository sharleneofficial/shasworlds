import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  const links = <>
    <Link to="/" hash="ep" className="nav-link" onClick={() => setOpen(false)}>Releases</Link>
    <Link to="/" hash="saga" className="nav-link" onClick={() => setOpen(false)}>Journey</Link>
    <Link to="/" hash="about" className="nav-link" onClick={() => setOpen(false)}>About SHA</Link>
    <Link to="/contact" className="nav-link" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Contact</Link>
  </>;
  return <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled || open || pathname !== "/" ? "is-scrolled" : ""}`}>
    <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 md:px-10">
      <Link to="/" hash="portal" className="brand-mark text-2xl font-extrabold leading-none" onClick={() => setOpen(false)}>SHA<span className="brand-sub block text-[8px] font-semibold uppercase">Creator of Worlds</span></Link>
      <div className="hidden items-center gap-7 text-xs font-semibold uppercase lg:flex">{links}</div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </nav>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation flex flex-col gap-5 px-6 pb-6 text-sm font-semibold uppercase lg:hidden">{links}</nav>}
  </header>;
}