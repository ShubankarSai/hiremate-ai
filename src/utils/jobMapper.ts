import type { Job as ApiJob } from "../types/job";
import type { Job as CardJob } from "../components/jobs/JobCard";

export const mapApiJobToCardJob = (job: ApiJob): CardJob => {
  return {
    id: job.slug,
    company: job.company_name,
    title: job.title,
    location: job.location || "Remote",
    employmentType:
      job.job_types?.length > 0 ? job.job_types[0] : "Full Time",
    salary: "Not Disclosed",
    postedAt: new Date(job.created_at).toLocaleDateString(),
    tags: job.tags?.slice(0, 4) ?? [],
    logo: undefined,
  };
};