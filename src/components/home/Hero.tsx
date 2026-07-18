import React from "react";
import { motion, type Variants } from "framer-motion";
import { Search, MapPin, TrendingUp, Sparkles } from "lucide-react";

const TRENDING_KEYWORDS = ["Java", "React", "Spring Boot", "Python", "Remote"];

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl dark:bg-blue-900/10" />
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/4 rounded-full bg-indigo-50/40 blur-3xl dark:bg-indigo-900/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400"
          >
            <Sparkles size={16} />
            <span>AI-Powered Career Matching</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Find Your <span className="text-blue-600">Dream Job</span>{" "}
            <br className="hidden md:block" /> Faster
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400"
          >
            Discover your next career move with HireMate AI. Our intelligent
            platform connects you with the best opportunities across the globe,
            tailored to your skills and preferences.
          </motion.p>

          {/* Search Area */}
          <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-2xl backdrop-blur-xl md:flex-row md:items-center dark:border-slate-800 dark:bg-slate-900/70"
            >
              {/* Job Title Input */}
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <label htmlFor="job-title" className="sr-only">
                  Job Title
                </label>
                <input
                  id="job-title"
                  name="jobTitle"
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full rounded-xl border-none bg-transparent py-3.5 pr-4 pl-12 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Divider for Desktop */}
              <div className="hidden h-8 w-px bg-slate-200 md:block dark:bg-slate-700" />

              {/* Location Input */}
              <div className="relative flex-1">
                <MapPin className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City, state, or remote"
                  className="w-full rounded-xl border-none bg-transparent py-3.5 pr-4 pl-12 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 md:w-auto"
              >
                <span>Search Jobs</span>
              </button>
            </form>
          </motion.div>

          {/* Trending Keywords */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
              <TrendingUp size={16} />
              <span>Trending:</span>
            </div>
            {TRENDING_KEYWORDS.map((keyword) => (
              <button
                key={keyword}
                type="button"
                className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              >
                {keyword}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
