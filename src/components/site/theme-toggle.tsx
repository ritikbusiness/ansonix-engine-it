import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('ansonix-theme')||'dark';var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t==='light'?'light':'dark');r.style.colorScheme=t==='light'?'light':'dark';}catch(e){}})();`;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("ansonix-theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
  }, []);

  const apply = (next: "dark" | "light") => {
    setTheme(next);
    localStorage.setItem("ansonix-theme", next);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.style.colorScheme = next;
  };

  return (
    <button
      type="button"
      onClick={() => apply(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-copper/50 hover:text-copper ${className}`}
    >
      <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
