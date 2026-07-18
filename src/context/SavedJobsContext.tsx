import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { toast } from "sonner";

interface SavedJobsContextType {
  savedJobs: string[];
  toggleSavedJob: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const SavedJobsContext = createContext<SavedJobsContextType | undefined>(
  undefined,
);

export const SavedJobsProvider = ({ children }: { children: ReactNode }) => {
  const [savedJobs, setSavedJobs] = useState<string[]>(() => {
    const stored = localStorage.getItem("savedJobs");
    return stored ? JSON.parse(stored) : [];
  });
  const toggleSavedJob = (jobId: string) => {
    const isSaved = savedJobs.includes(jobId);

    if (isSaved) {
      setSavedJobs((prev) => prev.filter((id) => id !== jobId));
      toast.success("Removed from saved jobs");
    } else {
      setSavedJobs((prev) => [...prev, jobId]);
      toast.success("Job saved successfully");
    }
  };

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const isSaved = (id: string) => savedJobs.includes(id);

  return (
    <SavedJobsContext.Provider
      value={{
        savedJobs,
        toggleSavedJob,
        isSaved,
      }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error("useSavedJobs must be used inside SavedJobsProvider");
  }

  return context;
};
