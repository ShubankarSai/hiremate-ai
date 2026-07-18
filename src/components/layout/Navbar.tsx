import React, { useState, useEffect, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  BriefcaseBusiness,
  Bookmark,
  Home,
  LogIn,
  Sun,
  Moon,
} from "lucide-react";

/**
 * Constants for production configurability
 */
const NAVBAR_SCROLL_THRESHOLD = 20;
const MOBILE_BREAKPOINT = 768;

import type { LucideIcon } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Jobs", href: "/jobs", icon: BriefcaseBusiness },
  { label: "Saved Jobs", href: "/saved", icon: Bookmark },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Handle scroll visibility for glassmorphism
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Auto-close mobile menu on screen resize
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    }`;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] active:scale-95"
            aria-label="HireMate AI Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
              <BriefcaseBusiness size={22} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              HireMate <span className="text-blue-600">AI</span>
            </span>
          </Link>

          {/* Desktop Actions & Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <div className="flex items-center gap-6 pr-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={navLinkClasses}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-indicator"
                          className="absolute bottom-[-1.25rem] left-0 h-0.5 w-full rounded-full bg-blue-600"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-slate-200 pl-6 dark:border-slate-800">
              {/* Dark Mode Toggle Placeholder */}
              <button
                type="button"
                className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                <Sun className="h-5 w-5 scale-100 transition-transform group-hover:rotate-45 dark:scale-0" />
                <Moon className="absolute h-5 w-5 scale-0 transition-transform dark:scale-100 dark:group-hover:-rotate-12" />
              </button>

              <Link
                to="/signin"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                <LogIn size={16} />
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile UI Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400"
              aria-label="Toggle dark mode"
            >
              <Sun size={20} className="dark:hidden" />
              <Moon size={20} className="hidden dark:block" />
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Main menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-xl md:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900"
                    }`
                  }
                >
                  <item.icon size={22} />
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-[0.98]"
                >
                  <LogIn size={20} />
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
