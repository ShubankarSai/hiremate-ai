import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";
import { MOCK_COMPANIES } from "../../data/mockCompanies";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const FeaturedCompanies: React.FC = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Featured Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Discover opportunities from leading companies hiring software
            engineers.
          </motion.p>
        </div>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {MOCK_COMPANIES.map((company) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-center transition-all hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-900/50 dark:hover:bg-slate-900"
            >
              {/* Logo Placeholder */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 group-hover:ring-blue-100 dark:bg-slate-800 dark:ring-slate-700 dark:group-hover:ring-blue-900">
                <Building2 className="h-8 w-8 text-slate-400 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400" />
              </div>

              {/* Company Info */}
              <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-white">
                {company.name}
              </h3>

              <div className="mb-4 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin size={12} />
                <span className="truncate">{company.location}</span>
              </div>

              <div className="mt-auto">
                <p className="mb-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {company.openPositions} Open Positions
                </p>

                <button
                  type="button"
                  aria-label={`View jobs at ${company.name}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  View Jobs
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
