import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BriefcaseBusiness, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerSectionVariants}
        className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <BriefcaseBusiness size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                HireMate <span className="text-blue-600">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Helping software engineers discover better career opportunities
              through intelligent matching and verified listings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/saved"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Tech Stack
            </h3>

            <ul className="mt-4 space-y-3">
              <li className="text-sm text-slate-600 dark:text-slate-400">
                React + Vite
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                TypeScript
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                Tailwind CSS
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                GitHub Actions CI
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Project
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://hiremate-ai-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Live Demo
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/ShubankarSai/hiremate-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Source Code
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/ShubankarSai/hiremate-ai/actions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  CI Pipeline
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Social Connect
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/ShubankarSai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shubankarsaik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:shubhankarsai@gmail.com"
                aria-label="Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-slate-100 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} HireMate AI • Built with React, TypeScript &
            Tailwind CSS
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
