import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import type { Job } from "../../types/job";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { useSavedJobs } from "../../context/SavedJobsContext";

const JobDetails = () => {
  const { slug } = useParams();
  const { savedJobs, toggleSavedJob } = useSavedJobs();
  const [job, setJob] = useState<Job | null>(null);
  const isSaved = job ? savedJobs.includes(job.slug) : false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const jobs = await getJobs();

      const selectedJob = jobs.find((job) => job.slug === slug);

      setJob(selectedJob ?? null);
      setLoading(false);
    };

    fetchJob();
  }, [slug]);

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {loading ? (
          <h1 className="text-4xl font-bold text-white">Loading...</h1>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {
                <>
                  <h1 className="text-4xl font-bold text-white">
                    {job?.title}
                  </h1>

                  <p className="mt-3 text-xl text-slate-400">
                    {job?.company_name}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6 text-slate-300">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{job?.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      <span>{job?.job_types?.[0] ?? "Full Time"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>
                        {new Date(job?.created_at ?? "").toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {job?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-blue-600/15 px-3 py-1 text-sm font-medium text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <section className="mt-10">
                    <h2 className="mb-6 text-2xl font-semibold text-white">
                      Job Description
                    </h2>

                    <div
                      className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-200 prose-li:text-slate-200 prose-strong:text-white prose-a:text-blue-400"
                      dangerouslySetInnerHTML={{
                        __html: job?.description ?? "",
                      }}
                    />
                  </section>
                </>
              }
            </div>
            <aside>
              <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white">
                  Ready to Apply?
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Apply directly on the company's career page.
                </p>

                <button
                  onClick={() => window.open(job?.url, "_blank")}
                  className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply Now
                </button>

                <button
                  onClick={() => job && toggleSavedJob(job.slug)}
                  className="mt-3 w-full rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
                >
                  {isSaved ? "Saved ✓" : "Save Job"}
                </button>

                <div className="my-6 border-t border-slate-800" />

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-slate-500">Company</p>
                    <p className="mt-1 font-medium text-white">
                      {job?.company_name}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="mt-1 font-medium text-white">
                      {job?.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Employment Type</p>
                    <p className="mt-1 font-medium text-white">
                      {job?.job_types?.[0] ?? "Full Time"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Posted</p>
                    <p className="mt-1 font-medium text-white">
                      {new Date(job?.created_at ?? "").toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default JobDetails;
