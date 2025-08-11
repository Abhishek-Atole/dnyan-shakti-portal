import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-elegant)]" aria-hidden />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold tracking-tight">L.T. Dhokane Senior College</span>
            <span className="text-xs text-muted-foreground">Dnyan Parm Balam</span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  cn(
                    "story-link text-sm font-medium text-foreground/90 transition-colors",
                    isActive ? "text-primary" : "hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <NavLink to="/login" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 md:inline-block">
            Portal Login
          </NavLink>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <ul className="container mx-auto grid gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    cn(
                      "block rounded-md px-3 py-2 text-sm",
                      isActive ? "bg-secondary text-primary" : "hover:bg-muted"
                    )
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/login"
                className="block rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                Portal Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
