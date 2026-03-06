import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/koleksi", label: "Koleksi Kacamata" },
  { to: "/warna/hitam", label: "Warna Kacamata" },
  { to: "/kenapaP", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 select-none">
          {/* Icon SVG kacamata custom */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="9" width="10" height="10" rx="5" stroke="#8B5E3C" strokeWidth="2"/>
            <rect x="17" y="9" width="10" height="10" rx="5" stroke="#8B5E3C" strokeWidth="2"/>
            <path d="M11 14h6" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1 14 Q0 10 0 10" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M27 14 Q28 10 28 10" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* Logo teks: MEGA bold + OPTIK tipis */}
          <span className="flex items-baseline gap-[3px] tracking-wide">
            <span
              className="text-xl font-black uppercase text-foreground"
              style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", letterSpacing: "0.08em" }}
            >
              MEGA
            </span>
            <span
              className="text-xl font-light uppercase text-[#8B5E3C]"
              style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", letterSpacing: "0.18em" }}
            >
              OPTIK
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                location.pathname === link.to ||
                  (link.to !== "/" && location.pathname.startsWith(link.to.split("/").slice(0, 2).join("/")))
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === link.to
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;