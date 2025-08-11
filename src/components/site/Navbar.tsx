import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { 
    to: "/academics", 
    label: "Academics",
    subItems: [
      { to: "/academics/school", label: "School (Std. 1-12)" },
      { to: "/academics/college", label: "College Programs" },
      { to: "/academics/bse", label: "BSE" },
      { to: "/academics/mba", label: "MBA" }
    ]
  },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo and Institution Name */}
        <NavLink to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border-2 border-college-gold">
            <img 
              src="/logo.png" 
              alt="Lilabai Tulshiramji Dhokane Senior College Logo" 
              className="h-12 w-12 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-merriweather text-xl font-bold tracking-tight text-college-navy">
              Lilabai Tulshiramji Dhokane
            </span>
            <span className="font-merriweather text-lg font-semibold text-college-navy">
              Senior College
            </span>
            <span className="text-sm text-college-gold font-medium italic">
              "Dnyan Parm Balam"
            </span>
          </div>
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.to} className="relative group">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold text-navy/90 transition-all duration-200 hover:text-navy relative py-2",
                    isActive ? "text-navy" : ""
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </>
                )}
              </NavLink>
              
              {/* Dropdown for Academics */}
              {item.subItems && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className="block px-4 py-2 text-sm text-navy hover:bg-beige hover:text-navy transition-colors"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <NavLink 
            to="/login" 
            className="hidden lg:inline-flex items-center rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:bg-navy/90 transition-all duration-200"
          >
            Portal Login
          </NavLink>
          
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden hover:bg-beige"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <ul className="container mx-auto grid gap-1 py-4 px-4">
            {navItems.map((item) => (
              <div key={item.to}>
                <li>
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      cn(
                        "block rounded-lg px-4 py-3 text-sm font-medium",
                        isActive ? "bg-beige text-navy" : "text-navy hover:bg-beige"
                      )
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
                {/* Mobile sub-items */}
                {item.subItems && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className="block rounded-lg px-4 py-2 text-sm text-navy/80 hover:bg-beige hover:text-navy"
                        onClick={() => setOpen(false)}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <li className="mt-2">
              <NavLink
                to="/login"
                className="block rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white text-center"
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
