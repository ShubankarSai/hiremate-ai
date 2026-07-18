import React from "react";
import { motion, type Variants } from "framer-motion";
import { Search, ShieldCheck, Bell, Bookmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "AI-Powered Search",
    description:
      "Find relevant jobs faster with intelligent search and matching.",
    icon: Search,
  },
  {
    title: "Verified Companies",
    description: "Browse openings from trusted companies around the world.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Job Alerts",
    description: "Never miss new opportunities that match your skills.",
    icon: Bell,
  },
  {
    title: "Save Jobs",
    description: "Bookmark jobs and apply whenever you're ready.",
    icon: Bookmark,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyHireMate: React.FC = () => {
  return (
    <section
      className="bg-white py-24 dark:bg-slate-950"
      aria-labelledby="why-choose-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            id="why-choose-title"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Why Choose HireMate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Everything you need to discover better software engineering
            opportunities.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-8 text-center transition-all hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-900/50 dark:hover:bg-slate-900"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 dark:bg-slate-800 dark:ring-slate-700 dark:group-hover:bg-blue-500 dark:group-hover:ring-blue-500 transition-all duration-300">
                <feature.icon
                  size={28}
                  className="text-blue-600 group-hover:text-white dark:text-blue-400 transition-colors duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMate;
