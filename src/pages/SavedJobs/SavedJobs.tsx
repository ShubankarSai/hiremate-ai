import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/job";
import { useSavedJobs } from "../../context/useSavedJobs";
import { mapApiJobToCardJob } from "../../utils/jobMapper";
import JobCard from "../../components/jobs/JobCard";

const SavedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const { savedJobs } = useSavedJobs();

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const saved = jobs.filter((job) => savedJobs.includes(job.slug));

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Saved Jobs
        </h1>

        <p className="mt-2 mb-8 text-slate-600 dark:text-slate-400">
          Your bookmarked opportunities.
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : saved.length === 0 ? (
          <p className="text-slate-500">You haven't saved any jobs yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {saved.map((job) => (
              <JobCard key={job.slug} job={mapApiJobToCardJob(job)} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default SavedJobs;
