import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ansonix-logo.png.asset.json";

export const LOGO_URL = logoAsset.url;

export function Logo({
  size = 40,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label="Ansonix IT — home"
      className={`group flex shrink-0 items-center gap-3 ${className}`}
    >
      <img
        src={LOGO_URL}
        alt="Ansonix IT logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain transition-transform duration-500 group-hover:scale-105"
      />
      {withWordmark ? (
        <span className="font-display text-[0.95rem] font-extrabold uppercase leading-none tracking-[0.22em] text-foreground">
          Ansonix<span className="ml-1 text-copper">IT</span>
        </span>
      ) : null}
    </Link>
  );
}
