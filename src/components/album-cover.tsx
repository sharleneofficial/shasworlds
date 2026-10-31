import type { ReactNode } from "react";
import signature from "@/assets/sw/signature.png";

type AlbumCoverProps = {
  /** Artwork shown blurred behind the disc. */
  art: string;
  /** Spinning disc for the live release; static watermark otherwise. */
  spinning?: boolean;
  /** Content centred on top of the cover (lock chip, pill…). */
  children?: ReactNode;
  className?: string;
  artClassName?: string;
  artStyle?: React.CSSProperties;
};

/** Square album cover: blurred art, large disc watermark and SHA's signature. */
export function AlbumCover({
  art,
  spinning = false,
  children,
  className = "",
  artClassName = "",
  artStyle,
}: AlbumCoverProps) {
  return (
    <div className={`cover ${spinning ? "spin-host" : ""} ${className}`}>
      <div className={`cover-disc ${spinning ? "spin" : ""}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" style={{ opacity: spinning ? 0.24 : 0.22 }}>
          <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="#2A1433" strokeWidth="2.2" />
        </svg>
        {spinning && <div className="sheen" />}
      </div>
      <img
        src={signature}
        alt=""
        aria-hidden="true"
        className="cover-sig"
        loading="lazy"
        decoding="async"
      />
      <img
        src={art}
        alt=""
        aria-hidden="true"
        className={`cover-art ${artClassName}`}
        style={artStyle}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      {children && <div className="cover-center">{children}</div>}
    </div>
  );
}
