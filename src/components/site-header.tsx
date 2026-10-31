import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/sw-icons";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const isHome = pathname === "/";
  const close = () => setOpen(false);
  const current = (path: string) => (pathname === path ? "page" : undefined);

  const links = (
    <>
      <Link to="/" hash="ep" activeOptions={{ includeHash: true }} onClick={close}>
        Releases
      </Link>
      <Link
        to="/story-arc"
        className={current("/story-arc") ? "is-current" : undefined}
        onClick={close}
      >
        Story Arc
      </Link>
      <Link to="/" hash="about" activeOptions={{ includeHash: true }} onClick={close}>
        About SHA
      </Link>
      <Link
        to="/contact"
        className={current("/contact") ? "is-current" : undefined}
        onClick={close}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className={`site-header ${isHome ? "" : "is-solid"}`}>
      <nav aria-label="Main navigation" className="main">
        <Link
          to="/"
          hash="portal"
          activeOptions={{ includeHash: true }}
          aria-label="SHA — home"
          className="brand-mark"
          onClick={close}
        >
          SHA<span>CREATOR OF WORLDS</span>
        </Link>
        <div className="nav-links">{links}</div>
        <button
          className="burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu">
          {links}
        </nav>
      )}
    </header>
  );
}
