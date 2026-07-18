import { useContext } from "react";
import { SavedJobsContext } from "./SavedJobsContext";

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error(
      "useSavedJobs must be used inside SavedJobsProvider"
    );
  }

  return context;
};