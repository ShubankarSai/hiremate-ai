import axios from "axios";
import type { Job } from "../types/job";

const API_URL = "https://www.arbeitnow.com/api/job-board-api";

export const getJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get(API_URL);

    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
};