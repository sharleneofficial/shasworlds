import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const stroke = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

/** Four-point star used as the cosmic accent across the site. */
export function Sparkle({ size = 11, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C12.6 7 17 11.4 24 12C17 12.6 12.6 17 12 24C11.4 17 7 12.6 0 12C7 11.4 11.4 7 12 0Z" />
    </svg>
  );
}

export function ArrowRight({ size = 18, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRight({ size = 14, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function Bell({ size = 15, ...props }: IconProps) {
  return (
    <svg {...stroke(size, { strokeWidth: 1.9, ...props })}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

export function LockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function MenuIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, { strokeWidth: 1.8, ...props })}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, { strokeWidth: 1.8, ...props })}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function XLogo({ size = 17, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 19, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function SpotifyIcon({ size = 19, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M7 9.5c3.5-1 7-.6 10 1" />
      <path d="M7.5 12.8c3-.8 5.8-.4 8.3.9" />
      <path d="M8 15.8c2.4-.6 4.6-.3 6.6.7" />
    </svg>
  );
}

export function InstagramIcon({ size = 19, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function SendIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <path d="M14.5 21.7a.5.5 0 0 0 .9 0l6.5-19a.5.5 0 0 0-.6-.6l-19 6.5a.5.5 0 0 0 0 .9l7.9 3.2a2 2 0 0 1 1.1 1.1z" />
      <path d="m21.9 2.1-10.9 10.9" />
    </svg>
  );
}

export function MailIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function MusicIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

export function GemIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M2 9h20" />
      <path d="m12 22 4-13-3-6" />
      <path d="m12 22-4-13 3-6" />
    </svg>
  );
}

export function GlobeIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...stroke(size, props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
