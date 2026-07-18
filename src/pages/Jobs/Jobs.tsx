import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/job";
import JobCard from "../../components/jobs/JobCard";
import { mapApiJobToCardJob } from "../../utils/jobMapper";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";
  const locationQuery = searchParams.get("location")?.toLowerCase() ?? "";
  const [jobTitle, setJobTitle] = useState(searchQuery);
  const [location, setLocation] = useState(locationQuery);

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

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const params = new URLSearchParams();

            if (jobTitle.trim()) {
              params.set("search", jobTitle);
            }

            if (location.trim()) {
              params.set("location", location);
            }

            setSearchParams(params);
          }}
          className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:flex-row dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Job title, keyword or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full rounded-xl bg-transparent py-3 pl-12 pr-4 text-slate-900 outline-none dark:text-white"
            />
          </div>

          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl bg-transparent py-3 pl-12 pr-4 text-slate-900 outline-none dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        <p className="mt-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
        </p>

        {loading ? (
          <p className="text-slate-600 dark:text-slate-400">Loading jobs...</p>
        ) : (
          <>
            {filteredJobs.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.slice(0, visibleJobs).map((job) => (
                  <JobCard key={job.slug} job={mapApiJobToCardJob(job)} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  No jobs found
                </h3>

                <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
                  We couldn't find any jobs matching your search. Try different
                  keywords, change the location, or clear your filters.
                </p>

                <button
                  onClick={() => {
                    setJobTitle("");
                    setLocation("");
                    setSearchParams({});
                  }}
                  className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            )}

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
