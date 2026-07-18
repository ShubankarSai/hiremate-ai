import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/job";
import JobCard from "../../components/jobs/JobCard";
import { mapApiJobToCardJob } from "../../utils/jobMapper";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";
  const locationQuery = searchParams.get("location")?.toLowerCase() ?? "";

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      console.log(data);
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVisibleJobs(12);
    }, 0);
  }, [searchQuery, locationQuery]);

  const filteredJobs = useMemo(() => {
    console.log("Search:", searchQuery);
    console.log("Location:", locationQuery);

    return jobs.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery) ||
        job.company_name.toLowerCase().includes(searchQuery) ||
        job.description.toLowerCase().includes(searchQuery) ||
        job.tags.some((tag) => tag.toLowerCase().includes(searchQuery));

      const matchesLocation =
        !locationQuery ||
        (locationQuery === "remote"
          ? job.remote
          : job.location.toLowerCase().includes(locationQuery));

      return matchesSearch && matchesLocation;
    });
  }, [jobs, searchQuery, locationQuery]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Browse Jobs
        </h1>

        <p className="mt-2 mb-8 text-slate-600 dark:text-slate-400">
          Explore software engineering opportunities.
        </p>

        <p className="mt-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
        </p>

        {loading ? (
          <p className="text-slate-600 dark:text-slate-400">Loading jobs...</p>
        ) : (
          <>
            <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredJobs.slice(0, visibleJobs).map((job) => (
                <JobCard key={job.slug} job={mapApiJobToCardJob(job)} />
              ))}
            </div>

            {visibleJobs < filteredJobs.length && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setVisibleJobs((prev) => prev + 12)}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Load More Jobs
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Jobs;
