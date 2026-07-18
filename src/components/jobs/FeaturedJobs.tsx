import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import JobCard from "./JobCard";
import { MOCK_JOBS } from "../../data/mockJobs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const FeaturedJobs: React.FC = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Featured Jobs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Explore hand-picked opportunities from top companies.
          </motion.p>
        </div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {MOCK_JOBS.map((job) => (
            <motion.div key={job.id} variants={itemVariants}>
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-blue-400 active:scale-95 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-700"
          >
            View All Jobs
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
