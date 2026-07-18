export interface Job {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  location: string;
  job_types: string[];
  tags: string[];
  created_at: string;
}