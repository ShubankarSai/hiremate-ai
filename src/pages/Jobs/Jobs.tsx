import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/job";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Browse Jobs
        </h1>

        <p className="mt-2 mb-8 text-slate-600 dark:text-slate-400">
          Explore software engineering opportunities.
        </p>

        {loading ? (
          <p className="text-slate-600 dark:text-slate-400">Loading jobs...</p>
        ) : (
          <div className="space-y-4">
            {jobs.slice(0, 10).map((job) => (
              <div
                key={job.slug}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {job.title}
                </h2>

                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {job.company_name}
                </p>

                <p className="mt-2 text-sm text-slate-500">{job.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Jobs;
