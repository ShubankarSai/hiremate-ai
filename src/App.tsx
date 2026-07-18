import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import JobDetails from "./pages/JobDetails/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<JobDetails />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-right" richColors closeButton duration={2500} />
    </BrowserRouter>
  );
}

export default App;
