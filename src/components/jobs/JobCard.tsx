import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Bookmark,
  ChevronRight,
  Building2,
} from "lucide-react";

export interface Job {
  id: string;
  company: string;
  logo?: string;
  title: string;
  location: string;
  employmentType: string;
  salary: string;
  postedAt: string;
  tags: string[];
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const {
    company,
    logo,
    title,
    location,
    employmentType,
    salary,
    postedAt,
    tags,
  } = job;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900/50"
    >
      {/* Header: Logo, Company & Bookmark */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800">
            {logo ? (
              <img
                src={logo}
                alt={`${company} logo`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <Building2 className="h-6 w-6 text-slate-400" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {company}
            </h3>
            <h2 className="mt-0.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {title}
            </h2>
          </div>
        </div>
        <button
          type="button"
          aria-label="Save job"
          className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-blue-400"
        >
          <Bookmark size={20} />
        </button>
      </div>

      {/* Meta Info Grid */}
      <div className="mt-5 grid grid-cols-2 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
          <MapPin size={16} className="text-slate-400" />
          {location}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
          <Briefcase size={16} className="text-slate-400" />
          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
            {employmentType}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
          <DollarSign size={16} className="text-slate-400" />
          {salary}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
          <Clock size={16} className="text-slate-400" />
          {postedAt}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/30 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 dark:group-hover:border-blue-900/30"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
        <button
          type="button"
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Details
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
        >
          Apply Now
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
